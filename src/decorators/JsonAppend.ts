/**
 * @packageDocumentation
 * @module Decorators
 */

import {isClass, makeJacksonDecorator} from '../util';
import 'reflect-metadata';
import {
  JsonAppendDecorator,
  JsonAppendOptions
} from '../@types';

/**
 * Decorator that may be used to add "virtual" properties to be written after regular properties
 * (although ordering may be changed using both standard {@link JsonPropertyOrder} annotation, and properties of this annotation).
 *
 * @example
 * ```typescript
 * @JsonAppend({attrs: [
 *   {
 *     value: 'version',
 *   }
 * ]})
 * class User {
 *   @JsonProperty()
 *   id: number;
 *   @JsonProperty()
 *   email: string;
 *
 *   constructor(id: number, email: string) {
 *     this.id = id;
 *     this.email = email;
 *   }
 * }
 *
 * const user = new User(1, 'john.alfa@gmail.com');
 * const objectMapper = new ObjectMapper();
 *
 * const jsonData = objectMapper.stringify<User>(user, {
 *   attributes: {
 *     version: 1.2
 *   }
 * });
 * ```
 */
export const JsonAppend: JsonAppendDecorator = makeJacksonDecorator(
  (o: JsonAppendOptions): JsonAppendOptions => (
    {
      enabled: true,
      prepend: false,
      attrs: [],
      ...o
    }),
  (options: JsonAppendOptions, target, propertyKey, descriptorOrParamIndex) => {
    if (!descriptorOrParamIndex && isClass(target)) {
      Reflect.defineMetadata('jackson:JsonAppend', options, target);
      return target;
    }
  });