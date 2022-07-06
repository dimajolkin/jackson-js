(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jackson-js"] = factory();
	else
		root["jackson-js"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sortMappersByOrder = exports.castObjLiteral = exports.objectHasOwnPropertyWithPropertyDescriptorNames = exports.getObjectKeysWithPropertyDescriptorNames = exports.getDeepestClass = exports.isValueEmpty = exports.getDefaultValue = exports.getDefaultPrimitiveTypeValue = exports.isConstructorPrimitiveType = exports.isVariablePrimitiveType = exports.hasMetadata = exports.getMetadataKeys = exports.findMetadataKeys = exports.getMetadata = exports.findMetadata = exports.findMetadataByMetadataKeyWithContext = exports.isFloat = exports.isInt = exports.isObjLiteral = exports.isClassIterable = exports.isClassIterableNoMapNoString = exports.isClassIterableNoMap = exports.isIterableNoString = exports.isIterableNoMapNoString = exports.hasIterationProtocol = exports.isSameConstructorOrExtensionOfNoObject = exports.isSameConstructorOrExtensionOf = exports.isExtensionOf = exports.isSameConstructor = exports.getArgumentNames = exports.mapClassPropertyToVirtualProperty = exports.classPropertiesToVirtualPropertiesMapping = exports.mapClassPropertiesToVirtualProperties = exports.mapVirtualPropertyToClassProperty = exports.virtualPropertiesToClassPropertiesMapping = exports.mapVirtualPropertiesToClassProperties = exports.classHasOwnProperty = exports.getClassProperties = exports.makeJacksonDecorator = exports.makeDecorator = exports.isFunction = exports.isClass = exports.defineMetadata = exports.makeMetadataKeysWithContext = exports.makeMetadataKeyWithContext = void 0;
const meriyah_1 = __webpack_require__(16);
__webpack_require__(17);
const JacksonError_1 = __webpack_require__(1);
const DefaultContextGroup_1 = __webpack_require__(8);
/**
 * @internal
 */
exports.makeMetadataKeyWithContext = (key, options = {}) => {
    const regExp = /^[\w]+$/;
    if (options.contextGroup != null && !regExp.test(options.contextGroup)) {
        // eslint-disable-next-line max-len
        throw new JacksonError_1.JacksonError(`Invalid context group name "${options.contextGroup}" found! The context group name must match "/^[\\w]+$/" regular expression, that is a non-empty string which contains any alphanumeric character including the underscore.`);
    }
    return 'jackson:' +
        (options.contextGroup != null ? options.contextGroup : DefaultContextGroup_1.DefaultContextGroup) + ':' +
        (options.prefix != null ? options.prefix + ':' : '') +
        key +
        (options.suffix != null ? ':' + options.suffix : '');
};
/**
 * @internal
 */
exports.makeMetadataKeysWithContext = (key, options) => (options.contextGroups != null && options.contextGroups.length > 0) ? options.contextGroups.map((contextGroup) => exports.makeMetadataKeyWithContext(key, { prefix: options.prefix, suffix: options.suffix, contextGroup })) : [exports.makeMetadataKeyWithContext(key, { prefix: options.prefix, suffix: options.suffix, contextGroup: null })];
/**
 * @internal
 */
exports.defineMetadata = (metadataKey, metadataValue, target, propertyKey = null, options = {}) => {
    const makeMetadataKeysWithContextOptions = Object.assign({ contextGroups: metadataValue.contextGroups }, options);
    exports.makeMetadataKeysWithContext(metadataKey, makeMetadataKeysWithContextOptions).forEach((metadataKeyWithContext) => {
        if (propertyKey == null) {
            Reflect.defineMetadata(metadataKeyWithContext, metadataValue, target);
        }
        else {
            Reflect.defineMetadata(metadataKeyWithContext, metadataValue, target, propertyKey);
        }
    });
};
/**
 * https://stackoverflow.com/a/43197340/4637638
 * @internal
 */
exports.isClass = (obj) => {
    const isCtorClass = obj.constructor
        && obj.constructor.toString().substring(0, 5) === 'class';
    if (obj.prototype === undefined) {
        return isCtorClass || !exports.isFunction(obj);
    }
    const isPrototypeCtorClass = obj.prototype.constructor
        && obj.prototype.constructor.toString
        && obj.prototype.constructor.toString().substring(0, 5) === 'class';
    return isCtorClass || isPrototypeCtorClass || !exports.isFunction(obj);
};
/**
 * https://stackoverflow.com/a/56035104/4637638
 * @internal
 */
exports.isFunction = (funcOrClass) => {
    const propertyNames = Object.getOwnPropertyNames(funcOrClass);
    return (!propertyNames.includes('prototype') || propertyNames.includes('arguments'));
};
/**
 * @internal
 */
exports.makeDecorator = (options, decorator) => {
    const DecoratorFactory = (...args) => {
        const target = args[0];
        const propertyKey = args[1];
        const descriptorOrParamIndex = args[2];
        if ((typeof target === 'function' || propertyKey != null || descriptorOrParamIndex != null) ||
            descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
            return decorator(options(), target, propertyKey, descriptorOrParamIndex);
        }
        else {
            return (targetDecorator, propertyKeyDecorator, descriptor) => decorator(options(args[0]), targetDecorator, propertyKeyDecorator, descriptor);
        }
    };
    return DecoratorFactory;
};
/**
 * @internal
 */
exports.makeJacksonDecorator = (options, decorator) => exports.makeDecorator(options, (o, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        o._propertyKey = propertyKey.toString();
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex !== 'number') {
        o._descriptor = descriptorOrParamIndex;
    }
    const value = decorator(o, target, propertyKey, descriptorOrParamIndex);
    if (value != null) {
        return value;
    }
    if (typeof descriptorOrParamIndex !== 'number') {
        return descriptorOrParamIndex;
    }
});
/**
 * https://github.com/rphansen91/es-arguments/blob/master/src/arguments.js#L3
 * @internal
 */
const pluckPattern = (pattern) => ['{',
    pattern.map(({ key }) => key.name).join(', '),
    '}'].join(' ');
/**
 * https://github.com/rphansen91/es-arguments/blob/master/src/arguments.js#L9
 * @internal
 */
const pluckParamName = (param) => {
    if (param.name) {
        return param.name;
    }
    if (param.left) {
        return pluckParamName(param.left);
    }
    if (param.properties) {
        return pluckPattern(param.properties);
    }
    if (param.type === 'RestElement') {
        return '...' + pluckParamName(param.argument);
    }
    return;
};
/**
 * @internal
 */
exports.getClassProperties = (target, obj = null, context, options = {}) => {
    options = Object.assign({ withGettersAsProperty: false, withGetterVirtualProperties: false, withSettersAsProperty: false, withSetterVirtualProperties: false, withJsonVirtualPropertyValues: false, withJsonAliases: false }, options);
    const contextGroupsWithDefault = [
        ...(context.withContextGroups ? context.withContextGroups : []),
        DefaultContextGroup_1.DefaultContextGroup
    ];
    let objKeys = [];
    if (obj != null) {
        objKeys = Object.keys(obj);
        if (objKeys.includes('constructor') &&
            typeof obj.constructor === 'function' &&
            !obj.constructor.toString().endsWith('{ [native code] }') &&
            obj.constructor.constructor.toString().endsWith('{ [native code] }')) {
            objKeys.splice(objKeys.indexOf('constructor'), 1);
        }
    }
    const keysToBeDeleted = new Set();
    const metadataKeys = Reflect.getMetadataKeys(target);
    let classProperties = new Set(objKeys);
    for (const metadataKey of metadataKeys) {
        if (metadataKey.startsWith('jackson:')) {
            const metadataKeyWithoutJacksonPrefix = metadataKey.replace('jackson:', '');
            if (metadataKeyWithoutJacksonPrefix.includes(':JsonVirtualProperty:') ||
                (metadataKeyWithoutJacksonPrefix.includes(':JsonAlias:') && options.withJsonAliases)) {
                let metadataKeyFoundInContext = false;
                for (const contextGroup of contextGroupsWithDefault) {
                    const suffix = metadataKeyWithoutJacksonPrefix
                        .split((metadataKeyWithoutJacksonPrefix.includes(':JsonVirtualProperty:')) ? ':JsonVirtualProperty:' : ':JsonAlias:')[1];
                    const metadataKeyWithContext = exports.makeMetadataKeyWithContext((metadataKeyWithoutJacksonPrefix.includes(':JsonVirtualProperty:')) ? 'JsonVirtualProperty' : 'JsonAlias', {
                        contextGroup,
                        suffix
                    });
                    if (metadataKeyWithContext === metadataKey) {
                        metadataKeyFoundInContext = true;
                        break;
                    }
                }
                if (!metadataKeyFoundInContext) {
                    continue;
                }
            }
            if (metadataKeyWithoutJacksonPrefix.includes(':JsonVirtualProperty:')) {
                const jsonVirtualProperty = Reflect.getMetadata(metadataKey, target);
                if (jsonVirtualProperty && jsonVirtualProperty._descriptor != null && typeof jsonVirtualProperty._descriptor.value === 'function') {
                    if (jsonVirtualProperty._propertyKey.startsWith('get')) {
                        if (options.withGetterVirtualProperties) {
                            classProperties.add(jsonVirtualProperty.value);
                        }
                        if (!options.withGettersAsProperty) {
                            continue;
                        }
                        else if (!options.withGetterVirtualProperties) {
                            keysToBeDeleted.add(jsonVirtualProperty.value);
                        }
                    }
                    if (jsonVirtualProperty._propertyKey.startsWith('set')) {
                        if (options.withSetterVirtualProperties) {
                            classProperties.add(jsonVirtualProperty.value);
                        }
                        if (!options.withSettersAsProperty) {
                            continue;
                        }
                        else if (!options.withSetterVirtualProperties) {
                            keysToBeDeleted.add(jsonVirtualProperty.value);
                        }
                    }
                }
                classProperties.add(jsonVirtualProperty._propertyKey);
                if (options.withJsonVirtualPropertyValues && jsonVirtualProperty.value != null) {
                    classProperties.add(jsonVirtualProperty.value);
                }
            }
            else if (metadataKeyWithoutJacksonPrefix.includes(':JsonAlias:') && options.withJsonAliases) {
                const propertyKey = metadataKeyWithoutJacksonPrefix.split(':JsonAlias:')[1];
                classProperties.add(propertyKey);
                const jsonAlias = Reflect.getMetadata(metadataKey, target);
                if (jsonAlias.values != null) {
                    for (const alias of jsonAlias.values) {
                        classProperties.add(alias);
                    }
                }
            }
        }
    }
    classProperties = new Set([...classProperties].filter((key) => !keysToBeDeleted.has(key)));
    let parent = target;
    while (parent.name && parent !== Object) {
        const propertyDescriptors = Object.getOwnPropertyDescriptors(parent.prototype);
        // eslint-disable-next-line guard-for-in
        for (const property in propertyDescriptors) {
            const propertyDescriptor = propertyDescriptors[property];
            if (propertyDescriptor.get != null || propertyDescriptor.set != null) {
                classProperties.add(property);
            }
        }
        parent = Object.getPrototypeOf(parent);
    }
    return [...classProperties];
};
/**
 * @internal
 */
exports.classHasOwnProperty = (target, propertyKey, obj, context, options) => {
    const classProperties = exports.getClassProperties(target, obj, context, options);
    return classProperties.includes(propertyKey);
};
/**
 * @internal
 */
exports.mapVirtualPropertiesToClassProperties = (target, keys, context, options) => [...exports.virtualPropertiesToClassPropertiesMapping(target, keys, context, options).values()];
/**
 * @internal
 */
exports.virtualPropertiesToClassPropertiesMapping = (target, keys, context, options) => {
    options = Object.assign({ checkGetters: false, checkSetters: false }, options);
    const contextGroupsWithDefault = [
        ...(context.withContextGroups ? context.withContextGroups : []),
        DefaultContextGroup_1.DefaultContextGroup
    ];
    const metadataKeys = Reflect.getMetadataKeys(target);
    const propertiesMapping = new Map();
    for (const key of keys) {
        let getterOrSetterFound = false;
        for (const metadataKey of metadataKeys) {
            if (metadataKey.startsWith('jackson:')) {
                const metadataKeyWithoutJacksonPrefix = metadataKey.replace('jackson:', '');
                if (metadataKeyWithoutJacksonPrefix.includes(':JsonVirtualProperty:')) {
                    let metadataKeyFoundInContext = false;
                    for (const contextGroup of contextGroupsWithDefault) {
                        const suffix = metadataKeyWithoutJacksonPrefix.split(':JsonVirtualProperty:')[1];
                        const metadataKeyWithContext = exports.makeMetadataKeyWithContext('JsonVirtualProperty', {
                            contextGroup,
                            suffix
                        });
                        if (metadataKeyWithContext === metadataKey) {
                            metadataKeyFoundInContext = true;
                            break;
                        }
                    }
                    if (!metadataKeyFoundInContext) {
                        continue;
                    }
                    const jsonVirtualProperty = Reflect.getMetadata(metadataKey, target);
                    if (jsonVirtualProperty.value !== key) {
                        continue;
                    }
                    if (jsonVirtualProperty && jsonVirtualProperty._descriptor != null &&
                        typeof jsonVirtualProperty._descriptor.value === 'function') {
                        if ((options.checkGetters && jsonVirtualProperty._propertyKey.startsWith('get')) ||
                            (options.checkSetters && jsonVirtualProperty._propertyKey.startsWith('set'))) {
                            propertiesMapping.set(key, jsonVirtualProperty._propertyKey);
                            getterOrSetterFound = true;
                            break;
                        }
                    }
                }
            }
        }
        if (!getterOrSetterFound) {
            propertiesMapping.set(key, key);
        }
    }
    return propertiesMapping;
};
/**
 * @internal
 */
exports.mapVirtualPropertyToClassProperty = (target, key, context, options) => exports.mapVirtualPropertiesToClassProperties(target, [key], context, options)[0];
/**
 * @internal
 */
exports.mapClassPropertiesToVirtualProperties = (target, classProperties, context) => [...exports.classPropertiesToVirtualPropertiesMapping(target, classProperties, context).values()];
/**
 * @internal
 */
exports.classPropertiesToVirtualPropertiesMapping = (target, classProperties, context) => {
    const contextGroupsWithDefault = [
        ...(context.withContextGroups ? context.withContextGroups : []),
        DefaultContextGroup_1.DefaultContextGroup
    ];
    const propertiesMapping = new Map();
    for (const classProperty of classProperties) {
        let jsonVirtualProperty = null;
        for (const contextGroup of contextGroupsWithDefault) {
            const metadataKeyWithContext = exports.makeMetadataKeyWithContext('JsonVirtualProperty', {
                contextGroup,
                suffix: classProperty
            });
            jsonVirtualProperty = Reflect.getMetadata(metadataKeyWithContext, target);
            if (jsonVirtualProperty != null) {
                break;
            }
        }
        if (jsonVirtualProperty) {
            propertiesMapping.set(classProperty, jsonVirtualProperty.value);
        }
        else {
            propertiesMapping.set(classProperty, classProperty);
        }
    }
    return propertiesMapping;
};
/**
 * @internal
 */
exports.mapClassPropertyToVirtualProperty = (target, key, context) => exports.mapClassPropertiesToVirtualProperties(target, [key], context)[0];
/**
 * @internal
 */
exports.getArgumentNames = (method) => {
    let code = method.toString().trim();
    if (code.endsWith(' { [native code] }')) {
        return [];
    }
    if (code.startsWith('class extends')) {
        code = 'class JacksonClass ' + code.substring(6);
    }
    else if (code.startsWith('function (')) {
        code = 'function JacksonFunction ' + code.substring(9);
    }
    else if (!code.startsWith('class ') && !code.startsWith('function ')) {
        code = 'function ' + code;
    }
    const ast = meriyah_1.parseScript(code, {
        next: true,
        webcompat: true,
        directives: true
    });
    const body = ast.body;
    let nodes = [];
    if (code.startsWith('class ')) {
        const classDeclarationNodes = body[0].body.body;
        // find constructor
        for (const propertyOrMethod of classDeclarationNodes) {
            if (propertyOrMethod.kind === 'constructor') {
                nodes = [propertyOrMethod];
                break;
            }
        }
    }
    else {
        nodes = [body[0]];
    }
    return nodes.reduce((args, exp) => {
        if (exp.params) {
            return args.concat(exp.params);
        }
        if ('value' in exp && exp.value != null && (exp.value).params) {
            return args.concat(exp.value.params);
        }
        if ('expression' in exp && exp.expression != null && exp.expression.params) {
            return args.concat(exp.expression.params);
        }
        return args;
    }, []).map(pluckParamName);
};
/**
 * @internal
 */
exports.isSameConstructor = (ctorOrCtorName, ctor2) => (typeof ctorOrCtorName === 'string' && ctorOrCtorName === ctor2.name) || ctorOrCtorName === ctor2;
/**
 * @internal
 */
exports.isExtensionOf = (ctor, ctorExtensionOf) => {
    if (typeof ctor === 'string') {
        let parent = Object.getPrototypeOf(ctorExtensionOf);
        while (parent.name) {
            if (parent.name === ctor) {
                return true;
            }
            // get parent class
            parent = Object.getPrototypeOf(parent);
        }
    }
    else {
        return ctor !== ctorExtensionOf && ctorExtensionOf.prototype instanceof ctor;
    }
    return false;
};
/**
 * @internal
 */
exports.isSameConstructorOrExtensionOf = (ctorOrCtorName, ctor2) => (exports.isSameConstructor(ctorOrCtorName, ctor2) || exports.isExtensionOf(ctorOrCtorName, ctor2));
/**
 * @internal
 */
exports.isSameConstructorOrExtensionOfNoObject = (ctorOrCtorName, ctor2) => ctorOrCtorName !== Object && (exports.isSameConstructor(ctorOrCtorName, ctor2) || exports.isExtensionOf(ctorOrCtorName, ctor2));
/**
 * @internal
 */
exports.hasIterationProtocol = (variable) => variable !== null && Symbol.iterator in Object(variable);
/**
 * @internal
 */
exports.isIterableNoMapNoString = (variable) => typeof variable !== 'string' &&
    !(exports.isSameConstructorOrExtensionOfNoObject(variable.constructor, Map)) &&
    exports.hasIterationProtocol(variable);
/**
 * @internal
 */
exports.isIterableNoString = (variable) => typeof variable !== 'string' &&
    exports.hasIterationProtocol(variable);
/**
 * @internal
 */
exports.isClassIterableNoMap = (ctor) => !(exports.isSameConstructorOrExtensionOfNoObject(ctor, Map)) &&
    exports.hasIterationProtocol(ctor.prototype);
/**
 * @internal
 */
exports.isClassIterableNoMapNoString = (ctor) => !(exports.isSameConstructorOrExtensionOfNoObject(ctor, String)) &&
    !(exports.isSameConstructorOrExtensionOfNoObject(ctor, Map)) &&
    exports.hasIterationProtocol(ctor.prototype);
/**
 * @internal
 */
exports.isClassIterable = (ctor) => exports.hasIterationProtocol(ctor.prototype);
/**
 * https://stackoverflow.com/a/1482209/4637638
 * @internal
 */
exports.isObjLiteral = (_obj) => {
    let _test = _obj;
    return (typeof _obj !== 'object' || _obj === null ?
        false :
        ((() => {
            while (true) {
                if (Object.getPrototypeOf(_test = Object.getPrototypeOf(_test)) === null) {
                    break;
                }
            }
            return Object.getPrototypeOf(_obj) === _test;
        })()));
};
/**
 * https://stackoverflow.com/a/3886106/4637638
 * @internal
 */
exports.isInt = (n) => Number(n) === n && n % 1 === 0;
/**
 * https://stackoverflow.com/a/3886106/4637638
 * @internal
 */
exports.isFloat = (n) => Number(n) === n && n % 1 !== 0;
/**
 * find metadata considering also _internalDecorators
 * @internal
 */
exports.findMetadataByMetadataKeyWithContext = (metadataKeyWithContext, target, propertyKey = null, context) => {
    let jsonDecoratorOptions = (propertyKey) ?
        Reflect.getMetadata(metadataKeyWithContext, target, propertyKey) :
        Reflect.getMetadata(metadataKeyWithContext, target);
    // search also on its prototype chain
    let parent = target;
    while (jsonDecoratorOptions == null && parent.name) {
        if (jsonDecoratorOptions == null && propertyKey == null && context != null && context._internalDecorators != null) {
            const map = context._internalDecorators.get(parent);
            if (map != null && metadataKeyWithContext in map) {
                jsonDecoratorOptions = map[metadataKeyWithContext];
            }
        }
        // get parent class
        parent = Object.getPrototypeOf(parent);
    }
    return jsonDecoratorOptions;
};
/**
 * @internal
 */
exports.findMetadata = (metadataKey, target, propertyKey = null, context) => {
    let jsonDecoratorOptions = null;
    const contextGroupsWithDefault = [
        ...(context.withContextGroups ? context.withContextGroups : []),
        DefaultContextGroup_1.DefaultContextGroup
    ];
    for (const contextGroup of contextGroupsWithDefault) {
        const metadataKeyWithContext = exports.makeMetadataKeyWithContext(metadataKey, { contextGroup });
        jsonDecoratorOptions = exports.findMetadataByMetadataKeyWithContext(metadataKeyWithContext, target, propertyKey, context);
        if (jsonDecoratorOptions != null) {
            break;
        }
    }
    return jsonDecoratorOptions;
};
/**
 * @internal
 */
exports.getMetadata = (metadataKey, target, propertyKey = null, context) => {
    const jsonjsonDecoratorOptions = (!metadataKey.startsWith('jackson:')) ?
        exports.findMetadata(metadataKey, target, propertyKey, context) :
        exports.findMetadataByMetadataKeyWithContext(metadataKey, target, propertyKey, context);
    if (jsonjsonDecoratorOptions != null && context != null && context.decoratorsEnabled != null) {
        const decoratorKeys = Object.keys(context.decoratorsEnabled);
        const decoratorKey = decoratorKeys.find((key) => (metadataKey.startsWith('jackson:')) ?
            metadataKey.replace('jackson:', '').includes(':' + key) :
            metadataKey.startsWith(key));
        if (decoratorKey && typeof context.decoratorsEnabled[decoratorKey] === 'boolean') {
            jsonjsonDecoratorOptions.enabled = context.decoratorsEnabled[decoratorKey];
        }
    }
    return jsonjsonDecoratorOptions != null && jsonjsonDecoratorOptions.enabled ? jsonjsonDecoratorOptions : undefined;
};
/**
 * find all metadataKeys considering also _internalDecorators
 * @internal
 */
exports.findMetadataKeys = (target, context) => {
    const metadataKeys = new Set(Reflect.getMetadataKeys(target));
    const contextGroupsWithDefault = [
        ...(context.withContextGroups ? context.withContextGroups : []),
        DefaultContextGroup_1.DefaultContextGroup
    ];
    if (context != null && context._internalDecorators != null) {
        // search also on its prototype chain
        let parent = target;
        while (parent.name) {
            const internalDecorators = context._internalDecorators.get(parent);
            for (const key in internalDecorators) {
                if (key === 'depth') {
                    continue;
                }
                metadataKeys.add(key);
            }
            // get parent class
            parent = Object.getPrototypeOf(parent);
        }
    }
    for (const metadataKey of metadataKeys) {
        let metadataKeyFoundInContext = false;
        for (const contextGroup of contextGroupsWithDefault) {
            if (metadataKey.startsWith('jackson:' + contextGroup + ':')) {
                metadataKeyFoundInContext = true;
                break;
            }
        }
        if (!metadataKeyFoundInContext || !metadataKey.startsWith('jackson:')) {
            metadataKeys.delete(metadataKey);
        }
    }
    return [...metadataKeys];
};
/**
 * @internal
 */
exports.getMetadataKeys = (target, context) => {
    let metadataKeys = exports.findMetadataKeys(target, context);
    if (context != null && context.decoratorsEnabled != null) {
        const decoratorKeys = Object.keys(context.decoratorsEnabled);
        metadataKeys = metadataKeys.filter((metadataKey) => {
            const decoratorKey = decoratorKeys.find((key) => (metadataKey.startsWith('jackson:')) ?
                metadataKey.replace('jackson:', '').includes(':' + key) :
                metadataKey.startsWith(key));
            return context.decoratorsEnabled[decoratorKey] == null || context.decoratorsEnabled[decoratorKey];
        });
    }
    return metadataKeys;
};
/**
 * @internal
 */
exports.hasMetadata = (metadataKey, target, propertyKey = null, context) => {
    const option = exports.getMetadata(metadataKey, target, propertyKey, context);
    return option != null;
};
/**
 * @internal
 */
exports.isVariablePrimitiveType = (value) => value != null && exports.isConstructorPrimitiveType(value.constructor);
/**
 * @internal
 */
exports.isConstructorPrimitiveType = (ctor) => ctor === Number ||
    (BigInt && ctor === BigInt) || ctor === String ||
    ctor === Boolean || (Symbol && ctor === Symbol);
/**
 * @internal
 */
exports.getDefaultPrimitiveTypeValue = (ctor) => {
    switch (ctor) {
        case Number:
            return 0;
        case Boolean:
            return false;
        case String:
            return '';
        default:
            if (BigInt && ctor === BigInt) {
                return BigInt(0);
            }
    }
    return null;
};
/**
 * @internal
 */
exports.getDefaultValue = (value) => {
    if (value != null) {
        return exports.getDefaultPrimitiveTypeValue(value.constructor);
    }
    return null;
};
/**
 * @internal
 */
exports.isValueEmpty = (value) => value == null ||
    ((value instanceof Set || value instanceof Map) && value.size === 0) ||
    (!(value instanceof Set || value instanceof Map) &&
        (typeof value === 'object' || typeof value === 'string') && Object.keys(value).length === 0);
/**
 * @internal
 */
exports.getDeepestClass = (array) => {
    if (array == null || array.length === 0) {
        return null;
    }
    if (!(array[array.length - 1] instanceof Array)) {
        return array[array.length - 1];
    }
    return exports.getDeepestClass(array[array.length - 1]);
};
/**
 * @internal
 */
exports.getObjectKeysWithPropertyDescriptorNames = (obj, ctor, context, options) => {
    if (obj == null) {
        return [];
    }
    const keys = Object.keys(obj);
    const classProperties = exports.getClassProperties(ctor != null ? ctor : obj.constructor, null, context, options);
    if (keys.includes('constructor') &&
        typeof obj.constructor === 'function' &&
        !obj.constructor.toString().endsWith('{ [native code] }') &&
        obj.constructor.constructor.toString().endsWith('{ [native code] }')) {
        keys.splice(keys.indexOf('constructor'), 1);
    }
    return [...new Set([...keys, ...classProperties])];
};
/**
 * @internal
 */
exports.objectHasOwnPropertyWithPropertyDescriptorNames = (obj, ctor, key, context, options) => {
    if (obj == null || key == null) {
        return false;
    }
    return exports.getObjectKeysWithPropertyDescriptorNames(obj, ctor, context, options).includes(key);
};
/**
 * @internal
 */
exports.castObjLiteral = (target, value) => {
    if (exports.isObjLiteral(value) && target !== Object) {
        let parent = target;
        while (parent.name && parent !== Object) {
            const propertyDescriptors = Object.getOwnPropertyDescriptors(parent.prototype);
            // eslint-disable-next-line guard-for-in
            for (const property in propertyDescriptors) {
                if (!Object.hasOwnProperty.call(value, property)) {
                    const jsonPropertyMetadataKey = Reflect.getMetadataKeys(target, property)
                        .find((metadataKey) => metadataKey.endsWith(':JsonProperty'));
                    if (jsonPropertyMetadataKey != null) {
                        const jsonPropertyOptions = Reflect.getMetadata(jsonPropertyMetadataKey, target, property);
                        if (jsonPropertyOptions && jsonPropertyOptions._descriptor == null) {
                            continue;
                        }
                    }
                    const ownPropertyDescriptor = Object.assign({}, propertyDescriptors[property]);
                    ownPropertyDescriptor.enumerable = false;
                    Object.defineProperty(value, property, ownPropertyDescriptor);
                }
            }
            parent = Object.getPrototypeOf(parent);
        }
    }
    return value;
};
/**
 * Sort custom user-defined serializers/deserializers by its order.
 *
 * @param mappers
 * @internal
 */
exports.sortMappersByOrder = (mappers) => mappers.sort((a, b) => a.order - b.order > 0 ? 1 : -1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Core
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JacksonError = void 0;
/**
 * Exception used to signal fatal problems during JSON serialization/deserialization.
 */
class JacksonError extends Error {
    constructor(message) {
        super(message);
        /**
         * https://medium.com/@xpl/javascript-deriving-from-error-properly-8d2f8f315801
         */
        this.constructor = JacksonError;
        // @ts-ignore
        this.__proto__ = JacksonError.prototype;
        this.message = message;
    }
}
exports.JacksonError = JacksonError;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

const __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

const __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(15), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);
tslib_1.__exportStar(__webpack_require__(32), exports);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(35), exports);
tslib_1.__exportStar(__webpack_require__(36), exports);
tslib_1.__exportStar(__webpack_require__(37), exports);
tslib_1.__exportStar(__webpack_require__(38), exports);
tslib_1.__exportStar(__webpack_require__(39), exports);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(41), exports);
tslib_1.__exportStar(__webpack_require__(42), exports);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(45), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);
tslib_1.__exportStar(__webpack_require__(47), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);
tslib_1.__exportStar(__webpack_require__(50), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(52), exports);
tslib_1.__exportStar(__webpack_require__(53), exports);
tslib_1.__exportStar(__webpack_require__(6), exports);
tslib_1.__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Databind
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultCommonFeatureValues = void 0;
/**
 * Variable that defines default feature values for {@link ObjectMapper}, {@link JsonParser} and {@link JsonStringifier}.
 */
exports.DefaultCommonFeatureValues = {
    /**
     * {@link CommonFeature.DEFAULT_VIEW_INCLUSION}
     */
    DEFAULT_VIEW_INCLUSION: true,
    /**
     * {@link CommonFeature.SET_DEFAULT_VALUE_FOR_PRIMITIVES_ON_NULL}
     */
    SET_DEFAULT_VALUE_FOR_PRIMITIVES_ON_NULL: false,
    /**
     * {@link CommonFeature.SET_DEFAULT_VALUE_FOR_NUMBER_ON_NULL}
     */
    SET_DEFAULT_VALUE_FOR_NUMBER_ON_NULL: false,
    /**
     * {@link CommonFeature.SET_DEFAULT_VALUE_FOR_STRING_ON_NULL}
     */
    SET_DEFAULT_VALUE_FOR_STRING_ON_NULL: false,
    /**
     * {@link CommonFeature.SET_DEFAULT_VALUE_FOR_BOOLEAN_ON_NULL}
     */
    SET_DEFAULT_VALUE_FOR_BOOLEAN_ON_NULL: false,
    /**
     * {@link CommonFeature.SET_DEFAULT_VALUE_FOR_BIGINT_ON_NULL}
     */
    SET_DEFAULT_VALUE_FOR_BIGINT_ON_NULL: false
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Core
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonStringifier = void 0;
const decorators_1 = __webpack_require__(3);
const util_1 = __webpack_require__(0);
// import * as moment from 'moment';
// import {v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5} from 'uuid';
const JacksonError_1 = __webpack_require__(1);
const cloneDeep = __webpack_require__(9);
const clone = __webpack_require__(11);
const databind_1 = __webpack_require__(5);
/**
 * JsonStringifier provides functionality for writing JSON.
 * It is also highly customizable to work both with different styles of JSON content,
 * and to support more advanced Object concepts such as polymorphism and Object identity.
 */
class JsonStringifier {
    /**
     *
     * @param defaultContext - Default context to use during serialization.
     */
    constructor(defaultContext = JsonStringifier.makeDefaultContext()) {
        this.defaultContext = defaultContext;
    }
    /**
     * Make a default {@link JsonStringifierContext}.
     */
    static makeDefaultContext() {
        return {
            mainCreator: null,
            features: {
                serialization: Object.assign({}, databind_1.DefaultSerializationFeatureValues)
            },
            serializers: [],
            decoratorsEnabled: {},
            withViews: null,
            forType: new Map(),
            withContextGroups: [],
            _internalDecorators: new Map(),
            _propertyParentCreator: null,
            attributes: {},
            filters: {},
            format: null,
            dateLibrary: null,
            uuidLibrary: null
        };
    }
    /**
     * Merge multiple {@link JsonStringifierContext} into one.
     * Array direct properties will be concatenated, instead, Map and Object Literal direct properties will be merged.
     * All the other properties, such as {@link JsonStringifierContext.mainCreator}, will be completely replaced.
     *
     * @param contexts - list of contexts to be merged.
     */
    static mergeContexts(contexts) {
        const finalContext = JsonStringifier.makeDefaultContext();
        for (const context of contexts) {
            if (context == null) {
                continue;
            }
            if (context.mainCreator != null) {
                finalContext.mainCreator = context.mainCreator;
            }
            if (context.decoratorsEnabled != null) {
                finalContext.decoratorsEnabled = Object.assign(Object.assign({}, finalContext.decoratorsEnabled), context.decoratorsEnabled);
            }
            if (context.withViews != null) {
                finalContext.withViews = context.withViews;
            }
            if (context.withContextGroups != null) {
                finalContext.withContextGroups = finalContext.withContextGroups.concat(context.withContextGroups);
            }
            if (context.serializers != null) {
                finalContext.serializers = finalContext.serializers.concat(context.serializers);
            }
            if (context.features != null && context.features.serialization != null) {
                finalContext.features.serialization = Object.assign(Object.assign({}, finalContext.features.serialization), context.features.serialization);
            }
            if (context.filters != null) {
                finalContext.filters = Object.assign(Object.assign({}, finalContext.filters), context.filters);
            }
            if (context.attributes != null) {
                finalContext.attributes = Object.assign(Object.assign({}, finalContext.attributes), context.attributes);
            }
            if (context.format != null) {
                finalContext.format = context.format;
            }
            if (context.forType != null) {
                finalContext.forType = new Map([
                    ...finalContext.forType,
                    ...context.forType
                ]);
            }
            if (context.dateLibrary != null) {
                finalContext.dateLibrary = context.dateLibrary;
            }
            if (context.uuidLibrary != null) {
                finalContext.uuidLibrary = context.uuidLibrary;
            }
            if (context._internalDecorators != null) {
                finalContext._internalDecorators = new Map([
                    ...finalContext._internalDecorators,
                    ...context._internalDecorators
                ]);
            }
            if (context._propertyParentCreator != null) {
                finalContext._propertyParentCreator = context._propertyParentCreator;
            }
        }
        finalContext.serializers = util_1.sortMappersByOrder(finalContext.serializers);
        return finalContext;
    }
    /**
     * Method for serializing a JavaScript object or a value to a JSON string.
     *
     * @param obj - the JavaScript object or value to be serialized.
     * @param context - the context to be used during serialization.
     */
    stringify(obj, context) {
        const preProcessedObj = this.transform(obj, context);
        return JSON.stringify(preProcessedObj, null, context.format);
    }
    /**
     * Method for applying json decorators to a JavaScript object/value.
     * It returns a JavaScript object/value with json decorators applied and ready to be JSON serialized.
     *
     * @param value - the JavaScript object or value to be preprocessed.
     * @param context - the context to be used during serialization preprocessing.
     */
    transform(value, context) {
        const globalContext = {
            globalValueAlreadySeen: new WeakMap(),
            intSequenceGenerator: 1
        };
        context = JsonStringifier.mergeContexts([this.defaultContext, context]);
        let newContext = this.convertStringifierContextToTransformerContext(context);
        newContext.mainCreator = (newContext.mainCreator && newContext.mainCreator[0] !== Object) ?
            newContext.mainCreator : [(value != null) ? value.constructor : Object];
        newContext._propertyParentCreator = newContext.mainCreator[0];
        newContext = cloneDeep(newContext);
        const currentMainCreator = newContext.mainCreator[0];
        value = util_1.castObjLiteral(currentMainCreator, value);
        const preProcessedObj = this.deepTransform('', value, newContext, globalContext, new Map());
        return preProcessedObj;
    }
    /**
     * Recursive {@link JsonStringifier.transform}.
     *
     * @param key - key name representing the object property being preprocessed.
     * @param value - the JavaScript object or value to preprocessed.
     * @param context - the context to be used during serialization preprocessing.
     * @param globalContext - the global context to be used during serialization preprocessing.
     * @param valueAlreadySeen - Map used to manage object circular references.
     */
    deepTransform(key, value, context, globalContext, valueAlreadySeen) {
        context = Object.assign({ withContextGroups: [], features: {
                serialization: {}
            }, filters: {}, serializers: [], attributes: {}, _internalDecorators: new Map() }, context);
        context = cloneDeep(context);
        if (value != null && context._internalDecorators != null &&
            context._internalDecorators.size > 0) {
            let target = context.mainCreator[0];
            while (target.name && !context._internalDecorators.has(target)) {
                target = Object.getPrototypeOf(target);
            }
            if (context._internalDecorators.has(target)) {
                if (context._internalDecorators.get(target).depth === 0) {
                    context._internalDecorators.delete(target);
                }
                else {
                    context._internalDecorators.get(target).depth--;
                }
            }
        }
        if (context.forType && context.forType.has(context.mainCreator[0])) {
            context = Object.assign(Object.assign({ mainCreator: context.mainCreator }, context), (context.forType.get(context.mainCreator[0])));
            context = cloneDeep(context);
        }
        const currentMainCreator = context.mainCreator[0];
        value = this.invokeCustomSerializers(key, value, context);
        value = this.stringifyJsonSerializeClass(value, context);
        if (value == null && util_1.isConstructorPrimitiveType(context.mainCreator[0])) {
            value = this.getDefaultValue(context);
        }
        if (value != null && value.constructor === Number && isNaN(value) && context.features.serialization.WRITE_NAN_AS_ZERO) {
            value = 0;
        }
        else if (value === Infinity) {
            if (context.features.serialization.WRITE_POSITIVE_INFINITY_AS_NUMBER_MAX_SAFE_INTEGER) {
                value = Number.MAX_SAFE_INTEGER;
            }
            else if (context.features.serialization.WRITE_POSITIVE_INFINITY_AS_NUMBER_MAX_VALUE) {
                value = Number.MAX_VALUE;
            }
        }
        else if (value === -Infinity) {
            if (context.features.serialization.WRITE_NEGATIVE_INFINITY_AS_NUMBER_MIN_SAFE_INTEGER) {
                value = Number.MIN_SAFE_INTEGER;
            }
            else if (context.features.serialization.WRITE_NEGATIVE_INFINITY_AS_NUMBER_MIN_VALUE) {
                value = Number.MIN_VALUE;
            }
        }
        else if (value != null && value instanceof Date &&
            context.features.serialization.WRITE_DATES_AS_TIMESTAMPS) {
            value = value.getTime();
        }
        if (value != null) {
            const identity = globalContext.globalValueAlreadySeen.get(value);
            if (identity) {
                return identity;
            }
            value = this.stringifyJsonFormatClass(value, context);
            if (BigInt && util_1.isSameConstructorOrExtensionOfNoObject(value.constructor, BigInt)) {
                return value.toString() + 'n';
            }
            else if (value instanceof RegExp) {
                const replacement = value.toString();
                return replacement.substring(1, replacement.length - 1);
            }
            else if (value instanceof Date) {
                return value;
            }
            else if (value instanceof Map || (util_1.isObjLiteral(value) && currentMainCreator === Object)) {
                value = this.stringifyMapAndObjLiteral(key, value, context, globalContext, new Map(valueAlreadySeen));
            }
            else if (typeof value === 'object' && !util_1.isIterableNoMapNoString(value)) {
                // Infinite recursion is already handled by JSON.stringify();
                // if (valueAlreadySeen.has(value)) {
                //   throw new JacksonError(`Infinite recursion on key "${key}" of type "${currentMainCreator.name}"`);
                // }
                valueAlreadySeen.set(value, (identity) ? identity : null);
                let replacement = {};
                const jsonValueOptions = util_1.getMetadata('JsonValue', context.mainCreator[0], null, context);
                if (jsonValueOptions) {
                    let jsonValue = this.stringifyJsonValue(value, context);
                    const newContext = cloneDeep(context);
                    let newMainCreator;
                    const jsonClass = util_1.getMetadata('JsonClassType', currentMainCreator, jsonValueOptions._propertyKey, context);
                    if (jsonClass && jsonClass.type) {
                        newMainCreator = jsonClass.type();
                    }
                    else {
                        newMainCreator = [Object];
                    }
                    if (jsonValue != null && jsonValue.constructor !== Object) {
                        newMainCreator[0] = jsonValue.constructor;
                    }
                    newContext.mainCreator = newMainCreator;
                    newContext._propertyParentCreator = newContext.mainCreator[0];
                    jsonValue = util_1.castObjLiteral(newContext.mainCreator[0], jsonValue);
                    replacement = this.deepTransform(key, jsonValue, newContext, globalContext, new Map(valueAlreadySeen));
                    return replacement;
                }
                const isPrepJsonAppend = this.isPrependJsonAppend(context);
                if (isPrepJsonAppend) {
                    this.stringifyJsonAppend(replacement, context);
                }
                let keys = util_1.getClassProperties(currentMainCreator, value, context, {
                    withGettersAsProperty: true
                });
                keys = this.stringifyJsonPropertyOrder(keys, context);
                const namingMap = new Map();
                for (const k of keys) {
                    if (!this.stringifyHasJsonIgnore(k, context) &&
                        this.stringifyHasVirtualPropertyGetter(k, context) &&
                        this.stringifyHasJsonView(k, context) &&
                        !this.stringifyIsIgnoredByJsonPropertyAccess(k, context) &&
                        !this.stringifyHasJsonBackReference(k, context) &&
                        !this.stringifyIsPropertyKeyExcludedByJsonFilter(k, context) &&
                        util_1.classHasOwnProperty(currentMainCreator, k, value, context, { withGettersAsProperty: true })) {
                        let newKey = this.stringifyJsonNaming(replacement, k, context);
                        namingMap.set(k, newKey);
                        // if it has a JsonIdentityReference, then we can skip all these methods because
                        // the entire object will be replaced later by the identity value
                        if (!this.hasJsonIdentityReferenceAlwaysAsId(context)) {
                            const jsonIdentityInfo = util_1.getMetadata('JsonIdentityInfo', currentMainCreator, null, context);
                            if (value === value[k] && jsonIdentityInfo == null) {
                                if (context.features.serialization.FAIL_ON_SELF_REFERENCES) {
                                    // eslint-disable-next-line max-len
                                    throw new JacksonError_1.JacksonError(`Direct self-reference leading to cycle (through reference chain: ${currentMainCreator.name}["${k}"])`);
                                }
                                if (context.features.serialization.WRITE_SELF_REFERENCES_AS_NULL) {
                                    value[k] = null;
                                }
                            }
                            this.propagateDecorators(value, k, context);
                            replacement[newKey] = this.stringifyJsonGetter(value, k, context);
                            if (this.stringifyHasJsonIgnoreTypeByKey(replacement, newKey, context)) {
                                delete replacement[newKey];
                                continue;
                            }
                            if (!this.stringifyJsonInclude(replacement, newKey, context)) {
                                namingMap.delete(k);
                                delete replacement[newKey];
                                continue;
                            }
                            if (replacement[newKey] == null) {
                                this.stringifyJsonSerializePropertyNull(replacement, k, newKey, context);
                            }
                            this.stringifyJsonSerializeProperty(replacement, k, newKey, context);
                            if (replacement[newKey] != null) {
                                replacement[newKey] = this.stringifyJsonFormatProperty(replacement, k, newKey, context);
                                this.stringifyJsonRawValue(replacement, k, newKey, context);
                                this.stringifyJsonFilter(replacement, value, k, newKey, context);
                                newKey = this.stringifyJsonVirtualProperty(replacement, k, newKey, context, namingMap);
                                if (!util_1.isIterableNoMapNoString(replacement[newKey])) {
                                    this.stringifyJsonUnwrapped(replacement, value, k, newKey, context, globalContext, new Map(valueAlreadySeen));
                                }
                            }
                            else {
                                newKey = this.stringifyJsonVirtualProperty(replacement, k, newKey, context, namingMap);
                            }
                        }
                    }
                }
                if (this.hasJsonIdentityReferenceAlwaysAsId(context)) {
                    replacement = this.stringifyJsonIdentityReference(value, context);
                }
                else {
                    this.stringifyJsonAnyGetter(replacement, value, context);
                    if (!isPrepJsonAppend) {
                        this.stringifyJsonAppend(replacement, context);
                    }
                    this.stringifyJsonIdentityInfo(replacement, value, context, globalContext);
                    // eslint-disable-next-line guard-for-in
                    for (const k in replacement) {
                        const oldKey = namingMap.get(k);
                        const newContext = cloneDeep(context);
                        newContext._propertyParentCreator = currentMainCreator;
                        let newMainCreator;
                        const jsonClass = util_1.getMetadata('JsonClassType', currentMainCreator, oldKey, context);
                        if (jsonClass && jsonClass.type) {
                            newMainCreator = jsonClass.type();
                        }
                        else {
                            newMainCreator = [Object];
                        }
                        if (replacement[k] != null && replacement[k].constructor !== Object) {
                            newMainCreator[0] = replacement[k].constructor;
                        }
                        newContext.mainCreator = newMainCreator;
                        replacement[k] = util_1.castObjLiteral(newContext.mainCreator[0], replacement[k]);
                        replacement[k] = this.deepTransform(oldKey, replacement[k], newContext, globalContext, new Map(valueAlreadySeen));
                    }
                    replacement = this.stringifyJsonRootName(replacement, context);
                    replacement = this.stringifyJsonTypeInfo(replacement, value, context);
                }
                return replacement;
            }
            else if (util_1.isIterableNoMapNoString(value)) {
                const replacement = this.stringifyIterable(key, value, context, globalContext, new Map(valueAlreadySeen));
                return replacement;
            }
        }
        return value;
    }
    /**
     *
     * @param context
     */
    convertStringifierContextToTransformerContext(context) {
        const newContext = {
            mainCreator: context.mainCreator ? context.mainCreator() : [Object]
        };
        for (const key in context) {
            if (key !== 'mainCreator') {
                newContext[key] = context[key];
            }
        }
        return newContext;
    }
    /**
     *
     * @param key
     * @param value
     * @param context
     */
    invokeCustomSerializers(key, value, context) {
        if (context.serializers) {
            const currentMainCreator = context.mainCreator[0];
            for (const serializer of context.serializers) {
                if (serializer.type != null) {
                    const classType = serializer.type();
                    if ((value != null && typeof classType === 'string' && classType !== typeof value) ||
                        (typeof classType !== 'string' && currentMainCreator != null &&
                            !util_1.isSameConstructorOrExtensionOf(classType, currentMainCreator))) {
                        continue;
                    }
                }
                value = serializer.mapper(key, value, context);
            }
        }
        return value;
    }
    /**
     *
     * @param context
     */
    getDefaultValue(context) {
        let defaultValue = null;
        const currentMainCreator = context.mainCreator[0];
        if (currentMainCreator === String &&
            (context.features.serialization.SET_DEFAULT_VALUE_FOR_PRIMITIVES_ON_NULL ||
                context.features.serialization.SET_DEFAULT_VALUE_FOR_STRING_ON_NULL)) {
            defaultValue = util_1.getDefaultPrimitiveTypeValue(String);
        }
        else if (currentMainCreator === Number &&
            (context.features.serialization.SET_DEFAULT_VALUE_FOR_PRIMITIVES_ON_NULL ||
                context.features.serialization.SET_DEFAULT_VALUE_FOR_NUMBER_ON_NULL)) {
            defaultValue = util_1.getDefaultPrimitiveTypeValue(Number);
        }
        else if (currentMainCreator === Boolean &&
            (context.features.serialization.SET_DEFAULT_VALUE_FOR_PRIMITIVES_ON_NULL ||
                context.features.serialization.SET_DEFAULT_VALUE_FOR_BOOLEAN_ON_NULL)) {
            defaultValue = util_1.getDefaultPrimitiveTypeValue(Boolean);
        }
        else if (BigInt && currentMainCreator === BigInt &&
            (context.features.serialization.SET_DEFAULT_VALUE_FOR_PRIMITIVES_ON_NULL ||
                context.features.serialization.SET_DEFAULT_VALUE_FOR_BIGINT_ON_NULL)) {
            defaultValue = util_1.getDefaultPrimitiveTypeValue(BigInt);
        }
        return defaultValue;
    }
    /**
     * Propagate decorators to class properties,
     * only for the first level (depth) of recursion.
     *
     * Used, for example, in case of decorators applied on an iterable, such as an Array.
     * In this case, the decorators are applied to each item of the iterable and not on the iterable itself.JsonFormat
     * @param obj
     * @param key
     * @param context
     */
    propagateDecorators(obj, key, context) {
        const currentMainCreator = context.mainCreator[0];
        const jsonClass = util_1.getMetadata('JsonClassType', currentMainCreator, key, context);
        // Decorators list that can be propagated
        const metadataKeys = [
            'JsonIgnoreProperties',
            'JsonTypeInfo',
            'JsonSubTypes',
            'JsonTypeIdResolver',
            'JsonFilter',
            'JsonIdentityInfo',
            'JsonIdentityReference',
            'JsonPropertyOrder'
        ];
        const decoratorsNameFound = [];
        const decoratorsToBeApplied = {
            depth: 1
        };
        let deepestClass = null;
        if (jsonClass) {
            deepestClass = util_1.getDeepestClass(jsonClass.type());
        }
        else {
            deepestClass = (obj[key] != null) ? obj[key].constructor : Object;
        }
        for (const metadataKey of metadataKeys) {
            const jsonDecoratorOptions = util_1.getMetadata(metadataKey, currentMainCreator, key, context);
            if (jsonDecoratorOptions) {
                const metadataKeysWithContext = util_1.makeMetadataKeysWithContext(metadataKey, { contextGroups: jsonDecoratorOptions.contextGroups });
                for (const metadataKeyWithContext of metadataKeysWithContext) {
                    decoratorsToBeApplied[metadataKeyWithContext] = jsonDecoratorOptions;
                }
                decoratorsNameFound.push(metadataKey);
            }
        }
        if (deepestClass != null && decoratorsNameFound.length > 0) {
            context._internalDecorators.set(deepestClass, decoratorsToBeApplied);
        }
    }
    /**
     *
     * @param key
     * @param context
     */
    stringifyHasVirtualPropertyGetter(key, context) {
        const currentMainCreator = context.mainCreator[0];
        const jsonVirtualProperty = util_1.getMetadata('JsonVirtualProperty:' + key, currentMainCreator, null, context);
        if (jsonVirtualProperty && jsonVirtualProperty._descriptor != null) {
            return typeof jsonVirtualProperty._descriptor.value === 'function' || jsonVirtualProperty._descriptor.get != null ||
                jsonVirtualProperty._descriptor.set == null;
        }
        return true;
    }
    /**
     *
     * @param obj
     * @param key
     * @param context
     */
    stringifyJsonGetter(obj, key, context) {
        const currentMainCreator = context.mainCreator[0];
        const jsonVirtualProperty = util_1.getMetadata('JsonVirtualProperty:' + key, currentMainCreator, null, context);
        const jsonIgnoreProperties = util_1.getMetadata('JsonIgnoreProperties', currentMainCreator, null, context);
        if (jsonVirtualProperty &&
            !(jsonIgnoreProperties && !jsonIgnoreProperties.allowGetters && jsonIgnoreProperties.value.includes(jsonVirtualProperty.value))) {
            return (jsonVirtualProperty._descriptor != null && typeof jsonVirtualProperty._descriptor.value === 'function') ?
                obj[key]() : obj[key];
        }
        return obj[key];
    }
    /**
     *
     * @param replacement
     * @param obj
     * @param context
     */
    stringifyJsonAnyGetter(replacement, obj, context) {
        const currentMainCreator = context.mainCreator[0];
        const jsonAnyGetter = util_1.getMetadata('JsonAnyGetter', currentMainCreator, null, context);
        if (jsonAnyGetter && obj[jsonAnyGetter._propertyKey]) {
            const map = (typeof obj[jsonAnyGetter._propertyKey] === 'function') ?
                obj[jsonAnyGetter._propertyKey]() :
                obj[jsonAnyGetter._propertyKey];
            if (!(map instanceof Map) && !util_1.isObjLiteral(map)) {
                // eslint-disable-next-line max-len
                throw new JacksonError_1.JacksonError(`Property ${currentMainCreator.name}["${jsonAnyGetter._propertyKey}"] decorated with @JsonAnyGetter() returned a "${map.constructor.name}": expected "Map" or "Object Literal".`);
            }
            if (map instanceof Map) {
                for (const [k, value] of map) {
                    replacement[k] = value;
                }
            }
            else {
                for (const k in map) {
                    if (Object.hasOwnProperty.call(map, k)) {
                        replacement[k] = map[k];
                    }
                }
            }
            if (jsonAnyGetter.value) {
                delete replacement[jsonAnyGetter.value];
            }
        }
    }
    /**
     *
     * @param keys
     * @param context
     */
    stringifyJsonPropertyOrder(keys, context) {
        const currentMainCreator = context.mainCreator[0];
        const jsonPropertyOrder = util_1.getMetadata('JsonPropertyOrder', currentMainCreator, null, context);
        if (context.features.serialization.SORT_PROPERTIES_ALPHABETICALLY || jsonPropertyOrder) {
            const classProperties = (jsonPropertyOrder) ?
                util_1.mapVirtualPropertiesToClassProperties(currentMainCreator, jsonPropertyOrder.value, context, { checkGetters: true }) :
                [];
            let remainingKeys = keys.filter(key => !classProperties.includes(key));
            if (context.features.serialization.SORT_PROPERTIES_ALPHABETICALLY || jsonPropertyOrder.alphabetic) {
                const remainingKeysToVirtualPropertiesMapping = util_1.classPropertiesToVirtualPropertiesMapping(currentMainCreator, remainingKeys, context);
                const remainingVirtualKeysOrdered = new Map([...remainingKeysToVirtualPropertiesMapping.entries()]
                    .sort((a, b) => a[1] > b[1] ? 1 : -1));
                const remainingKeysOrdered = [];
                for (const [classProperty, virtualProperty] of remainingVirtualKeysOrdered) {
                    remainingKeysOrdered.push(classProperty);
                }
                remainingKeys = remainingKeysOrdered;
            }
            keys = classProperties.concat(remainingKeys);
        }
        return keys;
    }
    /**
     *
     * @param oldKey
     * @param context
     */
    stringifyIsIgnoredByJsonPropertyAccess(oldKey, context) {
        const jsonProperty = util_1.getMetadata('JsonProperty', context.mainCreator[0], oldKey, context);
        if (jsonProperty) {
            return jsonProperty.access === decorators_1.JsonPropertyAccess.WRITE_ONLY;
        }
        return false;
    }
    /**
     *
     * @param replacement
     * @param oldKey
     * @param newKey
     * @param context
     * @param namingMap
     */
    stringifyJsonVirtualProperty(replacement, oldKey, newKey, context, namingMap) {
        const jsonVirtualProperty = util_1.getMetadata('JsonVirtualProperty:' + oldKey, context.mainCreator[0], null, context);
        if (jsonVirtualProperty && jsonVirtualProperty.value !== oldKey) {
            const newKeyUpdated = this.stringifyJsonNaming(replacement, jsonVirtualProperty.value, context);
            namingMap.set(oldKey, newKeyUpdated);
            replacement[newKeyUpdated] = replacement[newKey];
            delete replacement[newKey];
            return newKeyUpdated;
        }
        return newKey;
    }
    /**
     *
     * @param replacement
     * @param oldKey
     * @param newKey
     * @param context
     */
    stringifyJsonRawValue(replacement, oldKey, newKey, context) {
        const jsonRawValue = util_1.hasMetadata('JsonRawValue', context.mainCreator[0], oldKey, context);
        if (jsonRawValue) {
            replacement[newKey] = JSON.parse(replacement[newKey]);
        }
    }
    /**
     *
     * @param obj
     * @param context
     */
    stringifyJsonValue(obj, context) {
        const jsonValue = util_1.getMetadata('JsonValue', context.mainCreator[0], null, context);
        if (jsonValue) {
            return (typeof obj[jsonValue._propertyKey] === 'function') ? obj[jsonValue._propertyKey]() : obj[jsonValue._propertyKey];
        }
        return null;
    }
    /**
     *
     * @param replacement
     * @param context
     */
    stringifyJsonRootName(replacement, context) {
        if (context.features.serialization.WRAP_ROOT_VALUE) {
            const jsonRootName = util_1.getMetadata('JsonRootName', context.mainCreator[0], null, context);
            const wrapKey = (jsonRootName && jsonRootName.value) ? jsonRootName.value : context.mainCreator[0].constructor.name;
            const newReplacement = {};
            newReplacement[wrapKey] = replacement;
            return newReplacement;
        }
        return replacement;
    }
    /**
     *
     * @param obj
     * @param context
     */
    stringifyJsonSerializeClass(obj, context) {
        const jsonSerialize = util_1.getMetadata('JsonSerialize', context.mainCreator[0], null, context);
        if (jsonSerialize && jsonSerialize.using) {
            return jsonSerialize.using(obj, context);
        }
        return obj;
    }
    /**
     *
     * @param replacement
     * @param oldKey
     * @param newKey
     * @param context
     */
    stringifyJsonSerializeProperty(replacement, oldKey, newKey, context) {
        const jsonSerialize = util_1.getMetadata('JsonSerialize', context.mainCreator[0], oldKey, context);
        if (jsonSerialize && jsonSerialize.using) {
            replacement[newKey] = jsonSerialize.using(replacement[newKey], context);
        }
    }
    /**
     *
     * @param replacement
     * @param oldKey
     * @param newKey
     * @param context
     */
    stringifyJsonSerializePropertyNull(replacement, oldKey, newKey, context) {
        const jsonSerialize = util_1.getMetadata('JsonSerialize', context.mainCreator[0], oldKey, context);
        if (jsonSerialize && jsonSerialize.nullsUsing) {
            replacement[newKey] = jsonSerialize.nullsUsing(context);
        }
    }
    /**
     *
     * @param key
     * @param context
     */
    stringifyHasJsonIgnore(key, context) {
        const currentMainCreator = context.mainCreator[0];
        const hasJsonIgnore = util_1.hasMetadata('JsonIgnore', currentMainCreator, key, context);
        if (!hasJsonIgnore) {
            const jsonIgnoreProperties = util_1.getMetadata('JsonIgnoreProperties', currentMainCreator, null, context);
            if (jsonIgnoreProperties) {
                const jsonVirtualProperty = util_1.getMetadata('JsonVirtualProperty:' + key, currentMainCreator, null, context);
                if (jsonVirtualProperty && jsonIgnoreProperties.value.includes(jsonVirtualProperty.value)) {
                    if (jsonVirtualProperty._descriptor != null && typeof jsonVirtualProperty._descriptor.value === 'function' &&
                        jsonIgnoreProperties.allowGetters) {
                        return false;
                    }
                    return true;
                }
                return jsonIgnoreProperties.value.includes(key);
            }
        }
        return hasJsonIgnore;
    }
    /**
     *
     * @param obj
     * @param key
     * @param context
     */
    stringifyJsonInclude(obj, key, context) {
        const currentMainCreator = context.mainCreator[0];
        let jsonInclude = util_1.getMetadata('JsonInclude', currentMainCreator, key, context);
        if (!jsonInclude) {
            jsonInclude = util_1.getMetadata('JsonInclude', currentMainCreator, null, context);
            jsonInclude = jsonInclude ? jsonInclude : context.features.serialization.DEFAULT_PROPERTY_INCLUSION;
        }
        if (jsonInclude) {
            const value = obj[key];
            switch (jsonInclude.value) {
                case decorators_1.JsonIncludeType.NON_EMPTY:
                    return !util_1.isValueEmpty(value);
                case decorators_1.JsonIncludeType.NON_NULL:
                    return value != null;
                case decorators_1.JsonIncludeType.NON_DEFAULT:
                    return value !== util_1.getDefaultValue(value) && !util_1.isValueEmpty(value);
                case decorators_1.JsonIncludeType.CUSTOM:
                    return !jsonInclude.valueFilter(value);
            }
        }
        return true;
    }
    /**
     *
     * @param replacement
     * @param key
     * @param context
     */
    stringifyHasJsonIgnoreTypeByKey(replacement, key, context) {
        const currentMainCreator = context.mainCreator[0];
        let classType;
        const jsonClass = util_1.getMetadata('JsonClassType', currentMainCreator, key, context);
        if (jsonClass && jsonClass.type) {
            classType = jsonClass.type();
        }
        else {
            classType = [Object];
        }
        const value = replacement[key];
        if (value != null && value.constructor !== Object) {
            classType[0] = value.constructor;
        }
        return util_1.hasMetadata('JsonIgnoreType', classType[0], null, context);
    }
    /**
     *
     * @param value
     * @param key
     * @param context
     */
    stringifyHasJsonIgnoreTypeByValue(value, key, context) {
        let classType;
        const jsonClass = util_1.getMetadata('JsonClassType', context._propertyParentCreator, key, context);
        if (jsonClass && jsonClass.type) {
            classType = jsonClass.type();
        }
        else {
            classType = [Object];
        }
        if (value != null && value.constructor !== Object) {
            classType[0] = value.constructor;
        }
        return util_1.hasMetadata('JsonIgnoreType', classType[0], null, context);
    }
    /**
     *
     * @param key
     * @param context
     */
    stringifyHasJsonBackReference(key, context) {
        return util_1.hasMetadata('JsonBackReference', context.mainCreator[0], key, context);
    }
    /**
     *
     * @param replacement
     * @param obj
     * @param context
     */
    stringifyJsonTypeInfo(replacement, obj, context) {
        const currentMainCreator = context.mainCreator[0];
        const jsonTypeInfo = util_1.getMetadata('JsonTypeInfo', currentMainCreator, null, context);
        if (jsonTypeInfo) {
            let jsonTypeName;
            const jsonTypeIdResolver = util_1.getMetadata('JsonTypeIdResolver', currentMainCreator, null, context);
            if (jsonTypeIdResolver && jsonTypeIdResolver.resolver) {
                jsonTypeName = jsonTypeIdResolver.resolver.idFromValue(obj, context);
            }
            if (!jsonTypeName) {
                const jsonTypeId = util_1.getMetadata('JsonTypeId', currentMainCreator, null, context);
                if (jsonTypeId) {
                    if (typeof obj[jsonTypeId._propertyKey] === 'function') {
                        jsonTypeName = obj[jsonTypeId._propertyKey]();
                    }
                    else {
                        jsonTypeName = obj[jsonTypeId._propertyKey];
                        delete replacement[jsonTypeId._propertyKey];
                    }
                }
            }
            if (!jsonTypeName) {
                const jsonSubTypes = util_1.getMetadata('JsonSubTypes', currentMainCreator, null, context);
                if (jsonSubTypes && jsonSubTypes.types) {
                    for (const subType of jsonSubTypes.types) {
                        if (subType.name && util_1.isSameConstructor(subType.class(), currentMainCreator)) {
                            jsonTypeName = subType.name;
                            break;
                        }
                    }
                }
            }
            if (!jsonTypeName) {
                const jsonTypeNameOptions = util_1.getMetadata('JsonTypeName', currentMainCreator, null, context);
                if (jsonTypeNameOptions && jsonTypeNameOptions.value != null && jsonTypeNameOptions.value.trim() !== '') {
                    jsonTypeName = jsonTypeNameOptions.value;
                }
            }
            if (!jsonTypeName) {
                switch (jsonTypeInfo.use) {
                    case decorators_1.JsonTypeInfoId.NAME:
                        jsonTypeName = currentMainCreator.name;
                        break;
                }
            }
            let newReplacement;
            switch (jsonTypeInfo.include) {
                case decorators_1.JsonTypeInfoAs.PROPERTY:
                    replacement[jsonTypeInfo.property] = jsonTypeName;
                    break;
                case decorators_1.JsonTypeInfoAs.WRAPPER_OBJECT:
                    newReplacement = {};
                    newReplacement[jsonTypeName] = replacement;
                    replacement = newReplacement;
                    break;
                case decorators_1.JsonTypeInfoAs.WRAPPER_ARRAY:
                    newReplacement = [jsonTypeName, replacement];
                    replacement = newReplacement;
                    break;
            }
        }
        return replacement;
    }
    /**
     *
     * @param replacement
     * @param oldKey
     * @param newKey
     * @param context
     */
    stringifyJsonFormatProperty(replacement, oldKey, newKey, context) {
        const jsonFormat = util_1.getMetadata('JsonFormat', context.mainCreator[0], oldKey, context);
        if (jsonFormat) {
            return this.stringifyJsonFormat(jsonFormat, replacement[newKey], context);
        }
        return replacement[newKey];
    }
    /**
     *
     * @param obj
     * @param context
     */
    stringifyJsonFormatClass(obj, context) {
        const jsonFormat = util_1.getMetadata('JsonFormat', context.mainCreator[0], null, context);
        if (jsonFormat) {
            return this.stringifyJsonFormat(jsonFormat, obj, context);
        }
        return obj;
    }
    /**
     *
     * @param jsonFormat
     * @param replacement
     * @param context
     */
    stringifyJsonFormat(jsonFormat, replacement, context) {
        let formattedValue = replacement;
        switch (jsonFormat.shape) {
            case decorators_1.JsonFormatShape.ARRAY:
                if (typeof replacement === 'object') {
                    if (replacement instanceof Set || replacement instanceof Map) {
                        formattedValue = [...replacement];
                    }
                    else {
                        formattedValue = Object.values(replacement);
                    }
                }
                else {
                    formattedValue = [replacement];
                }
                break;
            case decorators_1.JsonFormatShape.BOOLEAN:
                formattedValue = !!replacement;
                break;
            case decorators_1.JsonFormatShape.NUMBER_FLOAT:
                if (replacement instanceof Date) {
                    formattedValue = parseFloat(replacement.getTime().toString());
                }
                else {
                    formattedValue = parseFloat(replacement);
                }
                break;
            case decorators_1.JsonFormatShape.NUMBER_INT:
                if (replacement instanceof Date) {
                    formattedValue = replacement.getTime();
                }
                else {
                    formattedValue = parseInt(replacement, 10);
                }
                break;
            case decorators_1.JsonFormatShape.OBJECT:
                if (replacement instanceof Set) {
                    formattedValue = Object.assign({}, [...replacement]);
                }
                else if (replacement instanceof Map) {
                    const newValue = {};
                    for (const [k, val] of replacement) {
                        newValue[k] = val;
                    }
                    formattedValue = newValue;
                }
                else {
                    formattedValue = Object.assign({}, replacement);
                }
                break;
            case decorators_1.JsonFormatShape.SCALAR:
                if (!util_1.isVariablePrimitiveType(replacement)) {
                    formattedValue = null;
                }
                break;
            case decorators_1.JsonFormatShape.STRING:
                if (replacement instanceof Date) {
                    const locale = jsonFormat.locale;
                    const timezone = (jsonFormat.timezone) ? { timeZone: jsonFormat.timezone } : {};
                    const dateLibrary = jsonFormat.dateLibrary != null ? jsonFormat.dateLibrary : context.dateLibrary;
                    if (dateLibrary == null) {
                        // eslint-disable-next-line max-len
                        throw new JacksonError_1.JacksonError('No date library has been set. To be able to use @JsonFormat() on class properties of type "Date" with JsonFormatShape.STRING, a date library needs to be set. Date libraries supported: "https://github.com/moment/moment", "https://github.com/iamkun/dayjs/".');
                    }
                    formattedValue = dateLibrary(new Date(replacement.toLocaleString('en-US', timezone))).locale(locale).format(jsonFormat.pattern);
                }
                else {
                    if (replacement != null && replacement.constructor === Number) {
                        if (jsonFormat.radix != null && jsonFormat.radix.constructor === Number) {
                            formattedValue = replacement.toString(jsonFormat.radix);
                        }
                        else if (jsonFormat.toExponential != null && jsonFormat.toExponential.constructor === Number) {
                            formattedValue = replacement.toExponential(jsonFormat.toExponential);
                        }
                        else if (jsonFormat.toFixed != null && jsonFormat.toFixed.constructor === Number) {
                            formattedValue = replacement.toFixed(jsonFormat.toFixed);
                        }
                        else if (jsonFormat.toPrecision != null && jsonFormat.toPrecision.constructor === Number) {
                            formattedValue = replacement.toPrecision(jsonFormat.toPrecision);
                        }
                        else {
                            formattedValue = replacement.toString();
                        }
                    }
                    else {
                        formattedValue = replacement.toString();
                    }
                }
                break;
        }
        return formattedValue;
    }
    /**
     *
     * @param key
     * @param context
     */
    stringifyHasJsonView(key, context) {
        const currentMainCreator = context.mainCreator[0];
        if (context.withViews) {
            let jsonView = util_1.getMetadata('JsonView', currentMainCreator, key, context);
            if (!jsonView) {
                jsonView = util_1.getMetadata('JsonView', currentMainCreator, null, context);
            }
            if (jsonView && jsonView.value) {
                const views = jsonView.value();
                const withViews = context.withViews();
                for (const view of views) {
                    for (const withView of withViews) {
                        if (util_1.isSameConstructorOrExtensionOf(view, withView)) {
                            return true;
                        }
                    }
                }
                return false;
            }
            return context.features.serialization.DEFAULT_VIEW_INCLUSION;
        }
        return true;
    }
    /**
     *
     * @param replacement
     * @param obj
     * @param oldKey
     * @param newKey
     * @param context
     * @param globalContext
     * @param valueAlreadySeen
     */
    stringifyJsonUnwrapped(replacement, obj, oldKey, newKey, context, globalContext, valueAlreadySeen) {
        const currentMainCreator = context.mainCreator[0];
        const jsonUnwrapped = util_1.getMetadata('JsonUnwrapped', currentMainCreator, oldKey, context);
        if (jsonUnwrapped) {
            let objValue = (typeof obj[oldKey] === 'function') ? obj[oldKey]() : obj[oldKey];
            const newContext = cloneDeep(context);
            let newMainCreator;
            const jsonClass = util_1.getMetadata('JsonClassType', currentMainCreator, oldKey, context);
            if (jsonClass && jsonClass.type) {
                newMainCreator = jsonClass.type();
            }
            else {
                newMainCreator = [Object];
            }
            if (obj[oldKey] != null && objValue.constructor !== Object) {
                newMainCreator[0] = objValue.constructor;
            }
            newContext.mainCreator = newMainCreator;
            const hasJsonTypeInfo = (typeof objValue === 'object') ?
                util_1.hasMetadata('JsonTypeInfo', newContext.mainCreator, null, newContext) : false;
            if (hasJsonTypeInfo) {
                // eslint-disable-next-line max-len
                throw new JacksonError_1.JacksonError(`Unwrapped property requires use of type information: cannot serialize (through reference chain: ${currentMainCreator.name}["${oldKey}"])`);
            }
            const prefix = (jsonUnwrapped.prefix != null) ? jsonUnwrapped.prefix : '';
            const suffix = (jsonUnwrapped.suffix != null) ? jsonUnwrapped.suffix : '';
            objValue = util_1.castObjLiteral(newContext.mainCreator[0], objValue);
            const objTransformed = this.deepTransform(oldKey, objValue, newContext, globalContext, new Map(valueAlreadySeen));
            const keys = Object.keys(objTransformed);
            for (const objKey of keys) {
                const newKeyWrapped = prefix + objKey + suffix;
                replacement[newKeyWrapped] = objTransformed[objKey];
            }
            delete replacement[newKey];
        }
    }
    /**
     *
     * @param replacement
     * @param obj
     * @param context
     * @param globalContext
     */
    stringifyJsonIdentityInfo(replacement, obj, context, globalContext) {
        const currentMainCreator = context.mainCreator[0];
        const jsonIdentityInfo = util_1.getMetadata('JsonIdentityInfo', currentMainCreator, null, context);
        if (jsonIdentityInfo) {
            if (globalContext.globalValueAlreadySeen.has(obj)) {
                replacement[jsonIdentityInfo.property] = globalContext.globalValueAlreadySeen.get(obj);
            }
            else {
                if (typeof jsonIdentityInfo.generator === 'function') {
                    replacement[jsonIdentityInfo.property] = jsonIdentityInfo.generator(obj);
                }
                else {
                    let uuidLibrary;
                    if (jsonIdentityInfo.generator === decorators_1.ObjectIdGenerator.UUIDv5Generator ||
                        jsonIdentityInfo.generator === decorators_1.ObjectIdGenerator.UUIDv4Generator ||
                        jsonIdentityInfo.generator === decorators_1.ObjectIdGenerator.UUIDv3Generator ||
                        jsonIdentityInfo.generator === decorators_1.ObjectIdGenerator.UUIDv1Generator) {
                        uuidLibrary = jsonIdentityInfo.uuidLibrary != null ? jsonIdentityInfo.uuidLibrary : context.uuidLibrary;
                        if (uuidLibrary == null) {
                            // eslint-disable-next-line max-len
                            throw new JacksonError_1.JacksonError('No UUID library has been set. To be able to use @JsonIdentityInfo() with any UUID ObjectIdGenerator, an UUID library needs to be set. UUID library supported: "https://github.com/uuidjs/uuid".');
                        }
                    }
                    switch (jsonIdentityInfo.generator) {
                        case decorators_1.ObjectIdGenerator.IntSequenceGenerator:
                            globalContext.intSequenceGenerator++;
                            replacement[jsonIdentityInfo.property] = globalContext.intSequenceGenerator;
                            break;
                        case decorators_1.ObjectIdGenerator.None:
                            replacement[jsonIdentityInfo.property] = null;
                            break;
                        case decorators_1.ObjectIdGenerator.PropertyGenerator:
                            if (!Object.hasOwnProperty.call(replacement, jsonIdentityInfo.property)) {
                                // eslint-disable-next-line max-len
                                throw new JacksonError_1.JacksonError(`Invalid Object Id definition for "${currentMainCreator.name}": cannot find property with name "${jsonIdentityInfo.property}"`);
                            }
                            break;
                        case decorators_1.ObjectIdGenerator.UUIDv5Generator:
                            const uuidv5Options = jsonIdentityInfo.uuidv5;
                            const uuidv5Args = [uuidv5Options.name, uuidv5Options.namespace];
                            if (uuidv5Options.buffer != null) {
                                uuidv5Args.push(uuidv5Options.buffer);
                                if (uuidv5Options.offset != null) {
                                    uuidv5Args.push(uuidv5Options.offset);
                                }
                            }
                            replacement[jsonIdentityInfo.property] = uuidLibrary.v5(...uuidv5Args);
                            break;
                        case decorators_1.ObjectIdGenerator.UUIDv4Generator:
                            const uuidv4Options = jsonIdentityInfo.uuidv4;
                            const uuidv4Args = [uuidv4Options.options];
                            if (uuidv4Options.buffer != null) {
                                uuidv4Args.push(uuidv4Options.buffer);
                                if (uuidv4Options.offset != null) {
                                    uuidv4Args.push(uuidv4Options.offset);
                                }
                            }
                            replacement[jsonIdentityInfo.property] = uuidLibrary.v4(...uuidv4Args);
                            break;
                        case decorators_1.ObjectIdGenerator.UUIDv3Generator:
                            const uuidv3Options = jsonIdentityInfo.uuidv3;
                            const uuidv3Args = [uuidv3Options.name, uuidv3Options.namespace];
                            if (uuidv3Options.buffer != null) {
                                uuidv3Args.push(uuidv3Options.buffer);
                                if (uuidv3Options.offset != null) {
                                    uuidv3Args.push(uuidv3Options.offset);
                                }
                            }
                            replacement[jsonIdentityInfo.property] = uuidLibrary.v3(...uuidv3Args);
                            break;
                        case decorators_1.ObjectIdGenerator.UUIDv1Generator:
                            const uuidv1Options = jsonIdentityInfo.uuidv1;
                            const uuidv1Args = [uuidv1Options.options];
                            if (uuidv1Options.buffer != null) {
                                uuidv1Args.push(uuidv1Options.buffer);
                                if (uuidv1Options.offset != null) {
                                    uuidv1Args.push(uuidv1Options.offset);
                                }
                            }
                            replacement[jsonIdentityInfo.property] = uuidLibrary.v1(...uuidv1Args);
                            break;
                    }
                }
            }
            if (!globalContext.globalValueAlreadySeen.has(obj)) {
                const objIdentifier = (typeof replacement[jsonIdentityInfo.property] === 'function') ?
                    replacement[jsonIdentityInfo.property]() :
                    replacement[jsonIdentityInfo.property];
                globalContext.globalValueAlreadySeen.set(obj, objIdentifier);
            }
        }
    }
    /**
     *
     * @param context
     */
    hasJsonIdentityReferenceAlwaysAsId(context) {
        const currentMainCreator = context.mainCreator[0];
        const jsonIdentityInfo = util_1.getMetadata('JsonIdentityInfo', currentMainCreator, null, context);
        const jsonIdentityReference = util_1.getMetadata('JsonIdentityReference', currentMainCreator, null, context);
        return jsonIdentityReference != null && jsonIdentityReference.alwaysAsId && jsonIdentityInfo != null;
    }
    /**
     *
     * @param obj
     * @param context
     */
    stringifyJsonIdentityReference(obj, context) {
        const jsonIdentityInfo = util_1.getMetadata('JsonIdentityInfo', context.mainCreator[0], null, context);
        return obj[jsonIdentityInfo.property];
    }
    /**
     *
     * @param key
     * @param iterableNoString
     * @param context
     * @param globalContext
     * @param valueAlreadySeen
     */
    stringifyIterable(key, iterableNoString, context, globalContext, valueAlreadySeen) {
        const jsonSerialize = util_1.getMetadata('JsonSerialize', context._propertyParentCreator, key, context);
        const iterable = [...iterableNoString];
        const newIterable = [];
        for (let value of iterable) {
            const newContext = cloneDeep(context);
            let newMainCreator;
            if (context.mainCreator.length > 1) {
                newMainCreator = newContext.mainCreator[1];
            }
            else {
                newMainCreator = [Object];
            }
            if (value != null && value.constructor !== Object) {
                newMainCreator[0] = value.constructor;
            }
            newContext.mainCreator = newMainCreator;
            if (jsonSerialize && jsonSerialize.contentUsing) {
                value = jsonSerialize.contentUsing(value, newContext);
            }
            value = util_1.castObjLiteral(newContext.mainCreator[0], value);
            if (this.stringifyHasJsonIgnoreTypeByValue(value, key, newContext)) {
                continue;
            }
            newIterable.push(this.deepTransform(key, value, newContext, globalContext, new Map(valueAlreadySeen)));
        }
        return newIterable;
    }
    /**
     *
     * @param key
     * @param map
     * @param context
     * @param globalContext
     * @param valueAlreadySeen
     */
    stringifyMapAndObjLiteral(key, map, context, globalContext, valueAlreadySeen) {
        const currentCreators = context.mainCreator;
        const jsonSerialize = util_1.getMetadata('JsonSerialize', context._propertyParentCreator, key, context);
        let jsonInclude = util_1.getMetadata('JsonInclude', context._propertyParentCreator, key, context);
        if (!jsonInclude) {
            jsonInclude = util_1.getMetadata('JsonInclude', context._propertyParentCreator, null, context);
            jsonInclude = jsonInclude ? jsonInclude : context.features.serialization.DEFAULT_PROPERTY_INCLUSION;
        }
        const newValue = {};
        let mapKeys = (map instanceof Map) ? [...map.keys()] : util_1.getObjectKeysWithPropertyDescriptorNames(map, null, context);
        if (context.features.serialization.ORDER_MAP_AND_OBJECT_LITERAL_ENTRIES_BY_KEYS) {
            mapKeys = mapKeys.sort();
        }
        const newContext = cloneDeep(context);
        if (currentCreators.length > 1 && currentCreators[1] instanceof Array) {
            newContext.mainCreator = currentCreators[1];
        }
        else {
            newContext.mainCreator = [Object];
        }
        const mapCurrentCreators = newContext.mainCreator;
        for (let mapKey of mapKeys) {
            let mapValue = (map instanceof Map) ? map.get(mapKey) : map[mapKey];
            const keyNewContext = cloneDeep(newContext);
            const valueNewContext = cloneDeep(newContext);
            if (mapCurrentCreators[0] instanceof Array) {
                keyNewContext.mainCreator = mapCurrentCreators[0];
            }
            else {
                keyNewContext.mainCreator = [mapCurrentCreators[0]];
            }
            if (keyNewContext.mainCreator[0] === Object) {
                keyNewContext.mainCreator[0] = mapKey.constructor;
            }
            if (mapCurrentCreators.length > 1) {
                if (mapCurrentCreators[1] instanceof Array) {
                    valueNewContext.mainCreator = mapCurrentCreators[1];
                }
                else {
                    valueNewContext.mainCreator = [mapCurrentCreators[1]];
                }
            }
            else {
                valueNewContext.mainCreator = [Object];
            }
            if (mapValue != null && mapValue.constructor !== Object && valueNewContext.mainCreator[0] === Object) {
                valueNewContext.mainCreator[0] = mapValue.constructor;
            }
            if (jsonSerialize && (jsonSerialize.contentUsing || jsonSerialize.keyUsing)) {
                mapKey = (jsonSerialize.keyUsing) ? jsonSerialize.keyUsing(mapKey, keyNewContext) : mapKey;
                mapValue = (jsonSerialize.contentUsing) ?
                    jsonSerialize.contentUsing(mapValue, valueNewContext) : mapValue;
                if (mapKey != null && mapKey.constructor !== Object) {
                    keyNewContext.mainCreator[0] = mapKey.constructor;
                }
                if (mapValue != null && mapValue.constructor !== Object) {
                    valueNewContext.mainCreator[0] = mapValue.constructor;
                }
            }
            if (jsonInclude && jsonInclude.content != null && jsonInclude.content !== decorators_1.JsonIncludeType.ALWAYS) {
                switch (jsonInclude.content) {
                    case decorators_1.JsonIncludeType.NON_EMPTY:
                        if (util_1.isValueEmpty(mapValue)) {
                            continue;
                        }
                        break;
                    case decorators_1.JsonIncludeType.NON_NULL:
                        if (mapValue == null) {
                            continue;
                        }
                        break;
                    case decorators_1.JsonIncludeType.NON_DEFAULT:
                        if (mapValue === util_1.getDefaultValue(mapValue) || util_1.isValueEmpty(mapValue)) {
                            continue;
                        }
                        break;
                    case decorators_1.JsonIncludeType.CUSTOM:
                        if (jsonInclude.contentFilter(mapValue)) {
                            continue;
                        }
                        break;
                }
            }
            if (context.features.serialization.WRITE_DATE_KEYS_AS_TIMESTAMPS) {
                if (map instanceof Map && mapKey instanceof Date) {
                    mapKey = mapKey.getTime();
                }
                else if (!(map instanceof Map) && currentCreators[0] === Object &&
                    util_1.isSameConstructorOrExtensionOfNoObject(keyNewContext.mainCreator[0], Date)) {
                    mapKey = (new keyNewContext.mainCreator[0](mapKey)).getTime();
                }
            }
            mapValue = util_1.castObjLiteral(newContext.mainCreator[0], mapValue);
            if (this.stringifyHasJsonIgnoreTypeByValue(mapValue, key, valueNewContext)) {
                continue;
            }
            const mapValueStringified = this.deepTransform(mapKey, mapValue, valueNewContext, globalContext, new Map(valueAlreadySeen));
            newValue[mapKey.toString()] = mapValueStringified;
        }
        return newValue;
    }
    /**
     *
     * @param filter
     * @param key
     * @param context
     */
    isPropertyKeyExcludedByJsonFilter(filter, key, context) {
        if (filter.values == null) {
            return false;
        }
        const jsonProperty = util_1.getMetadata('JsonProperty', context.mainCreator[0], key, context);
        switch (filter.type) {
            case decorators_1.JsonFilterType.FILTER_OUT_ALL_EXCEPT:
                return !filter.values.includes(key) && !(jsonProperty && filter.values.includes(jsonProperty.value));
            case decorators_1.JsonFilterType.SERIALIZE_ALL:
                return false;
            case decorators_1.JsonFilterType.SERIALIZE_ALL_EXCEPT:
                return filter.values.includes(key) || (jsonProperty && filter.values.includes(jsonProperty.value));
        }
    }
    /**
     *
     * @param key
     * @param context
     */
    stringifyIsPropertyKeyExcludedByJsonFilter(key, context) {
        const jsonFilter = util_1.getMetadata('JsonFilter', context.mainCreator[0], null, context);
        if (jsonFilter) {
            const filter = context.filters[jsonFilter.value];
            if (filter) {
                return this.isPropertyKeyExcludedByJsonFilter(filter, key, context);
            }
        }
        return false;
    }
    /**
     *
     * @param replacement
     * @param obj
     * @param oldKey
     * @param newKey
     * @param context
     */
    stringifyJsonFilter(replacement, obj, oldKey, newKey, context) {
        const currentMainCreator = context.mainCreator[0];
        const jsonFilter = util_1.getMetadata('JsonFilter', currentMainCreator, oldKey, context);
        if (jsonFilter) {
            const filter = context.filters[jsonFilter.value];
            if (filter) {
                replacement[newKey] = clone((typeof obj[oldKey] === 'function') ? obj[oldKey]() : obj[oldKey]);
                // eslint-disable-next-line guard-for-in
                for (const propertyKey in obj[oldKey]) {
                    const newContext = cloneDeep(context);
                    let newMainCreator;
                    const jsonClass = util_1.getMetadata('JsonClassType', currentMainCreator, oldKey, context);
                    if (jsonClass && jsonClass.type) {
                        newMainCreator = jsonClass.type();
                    }
                    else {
                        newMainCreator = [Object];
                    }
                    if (obj[oldKey] != null && obj[oldKey].constructor !== Object) {
                        newMainCreator[0] = obj[oldKey].constructor;
                    }
                    newContext.mainCreator = newMainCreator;
                    const isExcluded = this.isPropertyKeyExcludedByJsonFilter(filter, propertyKey, newContext);
                    if (isExcluded) {
                        delete replacement[newKey][propertyKey];
                    }
                }
            }
        }
    }
    /**
     *
     * @param context
     */
    isPrependJsonAppend(context) {
        const jsonAppend = util_1.getMetadata('JsonAppend', context.mainCreator[0], null, context);
        return jsonAppend && jsonAppend.prepend;
    }
    /**
     *
     * @param replacement
     * @param context
     */
    stringifyJsonAppend(replacement, context) {
        const currentMainCreator = context.mainCreator[0];
        const jsonAppend = util_1.getMetadata('JsonAppend', currentMainCreator, null, context);
        if (jsonAppend) {
            for (const attr of jsonAppend.attrs) {
                const attributeKey = attr.value;
                if (attributeKey != null) {
                    if (attr.required && !Object.hasOwnProperty.call(context.attributes, attributeKey)) {
                        // eslint-disable-next-line max-len
                        throw new JacksonError_1.JacksonError(`Missing @JsonAppend() required attribute "${attributeKey}" for class "${currentMainCreator.name}".`);
                    }
                    const value = context.attributes[attributeKey];
                    const key = attr.propName ? attr.propName : attributeKey;
                    switch (attr.include) {
                        case decorators_1.JsonIncludeType.NON_EMPTY:
                            if (util_1.isValueEmpty(value)) {
                                continue;
                            }
                            break;
                        case decorators_1.JsonIncludeType.NON_NULL:
                            if (value == null) {
                                continue;
                            }
                            break;
                        case decorators_1.JsonIncludeType.NON_DEFAULT:
                            if (value === util_1.getDefaultValue(value) || util_1.isValueEmpty(value)) {
                                continue;
                            }
                            break;
                    }
                    replacement[key] = value;
                }
            }
        }
    }
    /**
     *
     * @param replacement
     * @param key
     * @param context
     */
    stringifyJsonNaming(replacement, key, context) {
        const jsonNamingOptions = util_1.getMetadata('JsonNaming', context.mainCreator[0], null, context);
        if (jsonNamingOptions && jsonNamingOptions.strategy != null) {
            const tokens = key.split(/(?=[A-Z])/);
            const tokensLength = tokens.length;
            let newKey = '';
            for (let i = 0; i < tokensLength; i++) {
                let token = tokens[i];
                let separator = '';
                switch (jsonNamingOptions.strategy) {
                    case decorators_1.PropertyNamingStrategy.KEBAB_CASE:
                        token = token.toLowerCase();
                        separator = '-';
                        break;
                    case decorators_1.PropertyNamingStrategy.LOWER_CAMEL_CASE:
                        if (i === 0) {
                            token = token.toLowerCase();
                        }
                        else {
                            token = token.charAt(0).toUpperCase() + token.slice(1);
                        }
                        break;
                    case decorators_1.PropertyNamingStrategy.LOWER_CASE:
                        token = token.toLowerCase();
                        break;
                    case decorators_1.PropertyNamingStrategy.LOWER_DOT_CASE:
                        token = token.toLowerCase();
                        separator = '.';
                        break;
                    case decorators_1.PropertyNamingStrategy.SNAKE_CASE:
                        token = token.toLowerCase();
                        separator = (i > 0 && tokens[i - 1].endsWith('_')) ? '' : '_';
                        break;
                    case decorators_1.PropertyNamingStrategy.UPPER_CAMEL_CASE:
                        token = token.charAt(0).toUpperCase() + token.slice(1);
                        break;
                }
                newKey += (newKey !== '' && token.length > 1) ? separator + token : token;
            }
            if (newKey !== key) {
                replacement[newKey] = replacement[key];
                delete replacement[key];
            }
            return newKey;
        }
        return key;
    }
}
exports.JsonStringifier = JsonStringifier;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Core
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultContextGroup = void 0;
/**
 * Default context group.
 */
exports.DefaultContextGroup = 'defaultContextGroup';


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4), __webpack_require__(10)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, false, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = clone;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4), __webpack_require__(10)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Core
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonParser = void 0;
const util_1 = __webpack_require__(0);
const decorators_1 = __webpack_require__(3);
const JacksonError_1 = __webpack_require__(1);
const cloneDeep = __webpack_require__(9);
const clone = __webpack_require__(11);
const databind_1 = __webpack_require__(5);
/**
 * JsonParser provides functionality for reading JSON.
 * It is also highly customizable to work both with different styles of JSON content,
 * and to support more advanced Object concepts such as polymorphism and Object identity.
 */
class JsonParser {
    /**
     *
     * @param defaultContext - Default context to use during deserialization.
     */
    constructor(defaultContext = JsonParser.makeDefaultContext()) {
        /**
         * Default context to use during deserialization.
         */
        this.defaultContext = {};
        this.defaultContext = defaultContext;
    }
    /**
     * Make a default {@link JsonParserContext}.
     */
    static makeDefaultContext() {
        return {
            mainCreator: null,
            features: {
                deserialization: Object.assign({}, databind_1.DefaultDeserializationFeatureValues)
            },
            deserializers: [],
            decoratorsEnabled: {},
            withViews: null,
            forType: new Map(),
            withContextGroups: [],
            _internalDecorators: new Map(),
            _propertyParentCreator: null,
            injectableValues: {},
            withCreatorName: null
        };
    }
    /**
     * Merge multiple {@link JsonParserContext} into one.
     * Array direct properties will be concatenated, instead, Map and Object Literal direct properties will be merged.
     * All the other properties, such as {@link JsonParserContext.mainCreator}, will be completely replaced.
     *
     * @param contexts - list of contexts to be merged.
     */
    static mergeContexts(contexts) {
        const finalContext = JsonParser.makeDefaultContext();
        for (const context of contexts) {
            if (context == null) {
                continue;
            }
            if (context.mainCreator != null) {
                finalContext.mainCreator = context.mainCreator;
            }
            if (context.decoratorsEnabled != null) {
                finalContext.decoratorsEnabled = Object.assign(Object.assign({}, finalContext.decoratorsEnabled), context.decoratorsEnabled);
            }
            if (context.withViews != null) {
                finalContext.withViews = context.withViews;
            }
            if (context.withContextGroups != null) {
                finalContext.withContextGroups = finalContext.withContextGroups.concat(context.withContextGroups);
            }
            if (context.deserializers != null) {
                finalContext.deserializers = finalContext.deserializers.concat(context.deserializers);
            }
            if (context.features != null && context.features.deserialization != null) {
                finalContext.features.deserialization = Object.assign(Object.assign({}, finalContext.features.deserialization), context.features.deserialization);
            }
            if (context.forType != null) {
                finalContext.forType = new Map([
                    ...finalContext.forType,
                    ...context.forType
                ]);
            }
            if (context.injectableValues != null) {
                finalContext.injectableValues = Object.assign(Object.assign({}, finalContext.injectableValues), context.injectableValues);
            }
            if (context.withCreatorName != null) {
                finalContext.withCreatorName = context.withCreatorName;
            }
            if (context._internalDecorators != null) {
                finalContext._internalDecorators = new Map([
                    ...finalContext._internalDecorators,
                    ...context._internalDecorators
                ]);
            }
            if (context._propertyParentCreator != null) {
                finalContext._propertyParentCreator = context._propertyParentCreator;
            }
        }
        finalContext.deserializers = util_1.sortMappersByOrder(finalContext.deserializers);
        return finalContext;
    }
    /**
     * Method for deserializing a JSON string into a JavaScript object or value.
     *
     * @param text - the JSON string to be deserialized.
     * @param context - the context to be used during deserialization.
     */
    parse(text, context) {
        const value = JSON.parse(text);
        return this.transform(value, context);
    }
    /**
     * Method for applying json decorators to a JavaScript object/value parsed.
     * It returns a JavaScript object/value with json decorators applied.
     *
     * @param value - the JavaScript object or value to be postprocessed.
     * @param context - the context to be used during deserialization postprocessing.
     */
    transform(value, context) {
        const globalContext = {
            globalValueAlreadySeen: new Map(),
            globalUnresolvedObjectIdentities: new Set()
        };
        context = JsonParser.mergeContexts([this.defaultContext, context]);
        let newContext = this.convertParserContextToTransformerContext(context);
        newContext.mainCreator = (newContext.mainCreator && newContext.mainCreator[0] !== Object) ?
            newContext.mainCreator : [(value != null) ? value.constructor : Object];
        newContext._propertyParentCreator = newContext.mainCreator[0];
        newContext._internalDecorators = new Map();
        newContext = cloneDeep(newContext);
        const postProcessedObj = this.deepTransform('', value, newContext, globalContext);
        if (globalContext.globalUnresolvedObjectIdentities.size > 0 &&
            newContext.features.deserialization.FAIL_ON_UNRESOLVED_OBJECT_IDS) {
            throw new JacksonError_1.JacksonError(`Found unresolved Object Ids: ${[...globalContext.globalUnresolvedObjectIdentities].join(', ')}`);
        }
        return postProcessedObj;
    }
    /**
     * Recursive {@link JsonParser.transform}.
     *
     * @param key - key name representing the object property being postprocessed.
     * @param value - the JavaScript object or value to postprocessed.
     * @param context - the context to be used during deserialization postprocessing.
     * @param globalContext - the global context to be used during deserialization postprocessing.
     */
    deepTransform(key, value, context, globalContext) {
        context = Object.assign({ withContextGroups: [], features: {
                deserialization: {}
            }, deserializers: [], injectableValues: {}, decoratorsEnabled: {}, _internalDecorators: new Map() }, context);
        context = cloneDeep(context);
        if (value != null && context._internalDecorators != null &&
            context._internalDecorators.size > 0) {
            let target = context.mainCreator[0];
            while (target.name && !context._internalDecorators.has(target)) {
                target = Object.getPrototypeOf(target);
            }
            if (context._internalDecorators.has(target)) {
                if (context._internalDecorators.get(target).depth === 0) {
                    context._internalDecorators.delete(target);
                }
                else {
                    context._internalDecorators.get(target).depth--;
                }
            }
        }
        if (context.forType && context.forType.has(context.mainCreator[0])) {
            context = Object.assign(Object.assign({ mainCreator: context.mainCreator }, context), context.forType.get(context.mainCreator[0]));
            context = cloneDeep(context);
        }
        const currentMainCreator = context.mainCreator[0];
        value = this.invokeCustomDeserializers(key, value, context);
        value = this.parseJsonDeserializeClass(value, context);
        if (value != null && context.features.deserialization.ALLOW_COERCION_OF_SCALARS) {
            if (value.constructor === String) {
                if (util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, Number)) {
                    value = +value;
                }
                else if (BigInt && util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, BigInt)) {
                    value = BigInt(+value);
                }
                else if (util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, Boolean)) {
                    if (value.toLowerCase() === 'true' || value === '1') {
                        value = true;
                    }
                    else if (value.toLowerCase() === 'false' || value === '0') {
                        value = false;
                    }
                    else {
                        value = !!value;
                    }
                }
            }
            else if (value.constructor === Number) {
                if (util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, Boolean)) {
                    value = !!value;
                }
                else if (BigInt && util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, BigInt)) {
                    value = BigInt(+value);
                }
                else if (util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, String)) {
                    // @ts-ignore
                    value += '';
                }
            }
            else if (value.constructor === Boolean) {
                if (util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, Number)) {
                    value = value ? 1 : 0;
                }
                else if (BigInt && util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, BigInt)) {
                    value = BigInt(value ? 1 : 0);
                }
                else if (util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, String)) {
                    // @ts-ignore
                    value += '';
                }
            }
        }
        if (value == null && util_1.isConstructorPrimitiveType(context.mainCreator[0])) {
            value = this.getDefaultValue(context);
        }
        if (value == null && context.features.deserialization.FAIL_ON_NULL_FOR_PRIMITIVES &&
            util_1.isConstructorPrimitiveType(currentMainCreator)) {
            // eslint-disable-next-line max-len
            throw new JacksonError_1.JacksonError(`Cannot map "${value}" into primitive type ${currentMainCreator.name}` +
                ((context._propertyParentCreator != null && context._propertyParentCreator !== Object && key !== '') ?
                    ` for ${context._propertyParentCreator.name}["${key}"]` :
                    (key !== '' ? ' for property ' + key : '')));
        }
        if ((value instanceof Array && value.length === 0 &&
            context.features.deserialization.ACCEPT_EMPTY_ARRAY_AS_NULL_OBJECT) ||
            (value != null && value.constructor === String && value.length === 0 &&
                context.features.deserialization.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT)) {
            value = null;
        }
        // if (value != null && value.constructor === Number &&
        //   context.features.deserialization.ACCEPT_FLOAT_AS_INT && isFloat(value)) {
        //   value = parseInt(value + '', 10);
        // }
        if (value != null) {
            let instance = this.getInstanceAlreadySeen(key, value, context, globalContext);
            if (instance !== undefined) {
                return instance;
            }
            value = this.parseJsonTypeInfo(value, context);
            if (util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, Map) ||
                (typeof value === 'object' && !util_1.isIterableNoMapNoString(value) && currentMainCreator === Object)) {
                return this.parseMapAndObjLiteral(key, value, context, globalContext);
            }
            else if (BigInt && util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, BigInt)) {
                return (value != null && value.constructor === String && value.endsWith('n')) ?
                    // @ts-ignore
                    currentMainCreator(value.substring(0, value.length - 1)) :
                    // @ts-ignore
                    currentMainCreator(value);
            }
            else if (util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, RegExp)) {
                // @ts-ignore
                return new currentMainCreator(value);
            }
            else if (util_1.isSameConstructorOrExtensionOfNoObject(currentMainCreator, Date)) {
                // @ts-ignore
                return new currentMainCreator(value);
            }
            else if (typeof value === 'object' && !util_1.isIterableNoMapNoString(value)) {
                if (this.parseJsonIgnoreType(context)) {
                    return null;
                }
                let replacement = clone(value);
                replacement = this.parseJsonRootName(replacement, context);
                this.parseJsonUnwrapped(replacement, context);
                this.parseJsonVirtualPropertyAndJsonAlias(replacement, context);
                this.parseJsonNaming(replacement, context);
                let keys = Object.keys(replacement);
                if (context.features.deserialization.ACCEPT_CASE_INSENSITIVE_PROPERTIES) {
                    const classProperties = util_1.getClassProperties(currentMainCreator, null, context);
                    const caseInsesitiveKeys = keys.map((k) => k.toLowerCase());
                    for (const classProperty of classProperties) {
                        const index = caseInsesitiveKeys.indexOf(classProperty.toLowerCase());
                        if (index >= 0) {
                            replacement[classProperty] = replacement[keys[index]];
                            delete replacement[keys[index]];
                            keys[index] = classProperty;
                        }
                    }
                }
                keys = util_1.mapVirtualPropertiesToClassProperties(currentMainCreator, keys, context, { checkSetters: true });
                const classPropertiesToBeExcluded = [];
                for (const k of keys) {
                    if (util_1.classHasOwnProperty(currentMainCreator, k, replacement, context, { withSettersAsProperty: true })) {
                        const jsonClass = util_1.getMetadata('JsonClassType', context.mainCreator[0], k, context);
                        this.propagateDecorators(jsonClass, replacement, k, context);
                        if (this.parseHasJsonIgnore(context, k) || !this.parseIsIncludedByJsonViewProperty(context, k)) {
                            classPropertiesToBeExcluded.push(k);
                            delete replacement[k];
                        }
                        else {
                            this.parseJsonRawValue(context, replacement, k);
                            this.parseJsonDeserializeProperty(k, replacement, context);
                        }
                    }
                }
                instance = this.parseJsonCreator(context, globalContext, replacement, classPropertiesToBeExcluded);
                if (instance) {
                    replacement = instance;
                }
                return replacement;
            }
            else if (util_1.isIterableNoMapNoString(value)) {
                const replacement = this.parseIterable(value, key, context, globalContext);
                return replacement;
            }
        }
        return value;
    }
    /**
     *
     * @param context
     */
    convertParserContextToTransformerContext(context) {
        const newContext = {
            mainCreator: context.mainCreator ? context.mainCreator() : [Object]
        };
        for (const key in context) {
            if (key !== 'mainCreator') {
                newContext[key] = context[key];
            }
        }
        return newContext;
    }
    /**
     *
     * @param context
     */
    getDefaultValue(context) {
        let defaultValue = null;
        const currentMainCreator = context.mainCreator[0];
        if (currentMainCreator === String &&
            (context.features.deserialization.SET_DEFAULT_VALUE_FOR_PRIMITIVES_ON_NULL ||
                context.features.deserialization.SET_DEFAULT_VALUE_FOR_STRING_ON_NULL)) {
            defaultValue = util_1.getDefaultPrimitiveTypeValue(String);
        }
        else if (currentMainCreator === Number &&
            (context.features.deserialization.SET_DEFAULT_VALUE_FOR_PRIMITIVES_ON_NULL ||
                context.features.deserialization.SET_DEFAULT_VALUE_FOR_NUMBER_ON_NULL)) {
            defaultValue = util_1.getDefaultPrimitiveTypeValue(Number);
        }
        else if (currentMainCreator === Boolean &&
            (context.features.deserialization.SET_DEFAULT_VALUE_FOR_PRIMITIVES_ON_NULL ||
                context.features.deserialization.SET_DEFAULT_VALUE_FOR_BOOLEAN_ON_NULL)) {
            defaultValue = util_1.getDefaultPrimitiveTypeValue(Boolean);
        }
        else if (BigInt && currentMainCreator === BigInt &&
            (context.features.deserialization.SET_DEFAULT_VALUE_FOR_PRIMITIVES_ON_NULL ||
                context.features.deserialization.SET_DEFAULT_VALUE_FOR_BIGINT_ON_NULL)) {
            defaultValue = util_1.getDefaultPrimitiveTypeValue(BigInt);
        }
        return defaultValue;
    }
    /**
     * Propagate decorators to class properties or parameters,
     * only for the first level (depth) of recursion.
     *
     * Used, for example, in case of decorators applied on an iterable, such as an Array.
     * In this case, the decorators are applied to each item of the iterable and not on the iterable itself.
     *
     * @param jsonClass
     * @param key
     * @param context
     * @param methodName
     * @param argumentIndex
     */
    propagateDecorators(jsonClass, obj, key, context, methodName, argumentIndex) {
        const currentMainCreator = context.mainCreator[0];
        // Decorators list that can be propagated
        const metadataKeysForDeepestClass = [
            'JsonIgnoreProperties',
            'JsonIgnorePropertiesParam:' + argumentIndex,
            'JsonTypeInfo',
            'JsonTypeInfoParam:' + argumentIndex,
            'JsonSubTypes',
            'JsonSubTypesParam:' + argumentIndex,
            'JsonTypeIdResolver',
            'JsonTypeIdResolverParam:' + argumentIndex,
            'JsonIdentityInfo',
            'JsonIdentityInfoParam:' + argumentIndex
        ];
        const metadataKeysForFirstClass = [
            'JsonDeserializeParam:' + argumentIndex
        ];
        let deepestClass = null;
        const decoratorsNameFoundForDeepestClass = [];
        const decoratorsToBeAppliedForDeepestClass = {
            depth: 1
        };
        let firstClass = null;
        const decoratorsNameFoundForFirstClass = [];
        const decoratorsToBeAppliedForFirstClass = {
            depth: 1
        };
        if (jsonClass) {
            firstClass = jsonClass.type()[0];
            deepestClass = util_1.getDeepestClass(jsonClass.type());
        }
        else {
            firstClass = (obj[key] != null) ? obj[key].constructor : Object;
            deepestClass = (obj[key] != null) ? obj[key].constructor : Object;
        }
        for (const metadataKey of metadataKeysForDeepestClass) {
            const jsonDecoratorOptions = (!metadataKey.includes('Param:')) ?
                util_1.getMetadata(metadataKey, currentMainCreator, key, context) :
                util_1.getMetadata(metadataKey, currentMainCreator, methodName, context);
            if (jsonDecoratorOptions) {
                if (metadataKey.includes('Param:') && deepestClass != null && methodName != null && argumentIndex != null) {
                    const jsonClassParam = util_1.getMetadata('JsonClassTypeParam:' + argumentIndex, currentMainCreator, methodName, context);
                    const metadataKeysWithContext = util_1.makeMetadataKeysWithContext(metadataKey.substring(0, metadataKey.indexOf('Param:')), { contextGroups: jsonDecoratorOptions.contextGroups });
                    for (const metadataKeyWithContext of metadataKeysWithContext) {
                        decoratorsToBeAppliedForDeepestClass[metadataKeyWithContext] = jsonDecoratorOptions;
                    }
                    if (jsonClassParam == null) {
                        deepestClass = null;
                    }
                    else {
                        const jsonClassMetadataKeysWithContext = util_1.makeMetadataKeysWithContext('JsonClassType', { contextGroups: jsonClassParam.contextGroups });
                        for (const metadataKeyWithContext of jsonClassMetadataKeysWithContext) {
                            decoratorsToBeAppliedForDeepestClass[metadataKeyWithContext] = jsonClassParam;
                        }
                    }
                    decoratorsNameFoundForDeepestClass.push(metadataKey.substring(0, metadataKey.indexOf('Param:')));
                }
                else {
                    const metadataKeysWithContext = util_1.makeMetadataKeysWithContext(metadataKey, { contextGroups: jsonDecoratorOptions.contextGroups });
                    for (const metadataKeyWithContext of metadataKeysWithContext) {
                        decoratorsToBeAppliedForDeepestClass[metadataKeyWithContext] = jsonDecoratorOptions;
                    }
                    decoratorsNameFoundForDeepestClass.push(metadataKey);
                }
            }
        }
        for (const metadataKey of metadataKeysForFirstClass) {
            const jsonDecoratorOptions = (!metadataKey.includes('Param:')) ?
                util_1.getMetadata(metadataKey, currentMainCreator, key, context) :
                util_1.getMetadata(metadataKey, currentMainCreator, methodName, context);
            if (jsonDecoratorOptions) {
                if (metadataKey.includes('Param:') && firstClass != null && methodName != null && argumentIndex != null) {
                    const jsonClassParam = util_1.getMetadata('JsonClassTypeParam:' + argumentIndex, currentMainCreator, methodName, context);
                    const metadataKeysWithContext = util_1.makeMetadataKeysWithContext(metadataKey.substring(0, metadataKey.indexOf('Param:')), { contextGroups: jsonDecoratorOptions.contextGroups });
                    for (const metadataKeyWithContext of metadataKeysWithContext) {
                        decoratorsToBeAppliedForFirstClass[metadataKeyWithContext] = jsonDecoratorOptions;
                    }
                    if (jsonClassParam == null) {
                        firstClass = null;
                    }
                    else {
                        const jsonClassMetadataKeysWithContext = util_1.makeMetadataKeysWithContext('JsonClassType', { contextGroups: jsonClassParam.contextGroups });
                        for (const metadataKeyWithContext of jsonClassMetadataKeysWithContext) {
                            decoratorsToBeAppliedForFirstClass[metadataKeyWithContext] = jsonClassParam;
                        }
                    }
                    decoratorsNameFoundForFirstClass.push(metadataKey.substring(0, metadataKey.indexOf('Param:')));
                }
                else {
                    const metadataKeysWithContext = util_1.makeMetadataKeysWithContext(metadataKey, { contextGroups: jsonDecoratorOptions.contextGroups });
                    for (const metadataKeyWithContext of metadataKeysWithContext) {
                        decoratorsNameFoundForFirstClass[metadataKeyWithContext] = jsonDecoratorOptions;
                    }
                    decoratorsNameFoundForFirstClass.push(metadataKey);
                }
            }
        }
        if (deepestClass != null && decoratorsNameFoundForDeepestClass.length > 0) {
            context._internalDecorators.set(deepestClass, decoratorsToBeAppliedForDeepestClass);
        }
        if (firstClass != null && decoratorsNameFoundForFirstClass.length > 0) {
            context._internalDecorators.set(firstClass, decoratorsToBeAppliedForFirstClass);
        }
    }
    /**
     *
     * @param key
     * @param value
     * @param context
     */
    invokeCustomDeserializers(key, value, context) {
        if (context.deserializers) {
            const currentMainCreator = context.mainCreator[0];
            for (const deserializer of context.deserializers) {
                if (deserializer.type != null) {
                    const classType = deserializer.type();
                    if ((value != null && typeof classType === 'string' && classType !== typeof value) ||
                        (typeof classType !== 'string' && currentMainCreator != null &&
                            !util_1.isSameConstructorOrExtensionOf(classType, currentMainCreator))) {
                        continue;
                    }
                }
                const virtualProperty = util_1.mapClassPropertyToVirtualProperty(currentMainCreator, key, context);
                value = deserializer.mapper(virtualProperty, value, context);
            }
        }
        return value;
    }
    /**
     *
     * @param key
     * @param value
     * @param context
     * @param globalContext
     */
    getInstanceAlreadySeen(key, value, context, globalContext) {
        const currentMainCreator = context.mainCreator[0];
        const jsonIdentityInfo = util_1.getMetadata('JsonIdentityInfo', currentMainCreator, null, context);
        if (jsonIdentityInfo) {
            const id = typeof value === 'object' ? value[jsonIdentityInfo.property] : value;
            const scope = jsonIdentityInfo.scope || '';
            const scopedId = this.generateScopedId(scope, id);
            if (globalContext.globalValueAlreadySeen.has(scopedId)) {
                const instance = globalContext.globalValueAlreadySeen.get(scopedId);
                if (instance.constructor !== currentMainCreator) {
                    throw new JacksonError_1.JacksonError(`Already had Class "${instance.constructor.name}" for id ${id}.`);
                }
                globalContext.globalUnresolvedObjectIdentities.delete(scopedId);
                return instance;
            }
            else if (typeof value !== 'object') {
                globalContext.globalUnresolvedObjectIdentities.add(scopedId);
                if (!context.features.deserialization.FAIL_ON_UNRESOLVED_OBJECT_IDS) {
                    return null;
                }
            }
        }
        return undefined;
    }
    /**
     *
     * @param context
     * @param globalContext
     * @param obj
     * @param classPropertiesToBeExcluded
     */
    parseJsonCreator(context, globalContext, obj, classPropertiesToBeExcluded) {
        if (obj != null) {
            const currentMainCreator = context.mainCreator[0];
            context._propertyParentCreator = currentMainCreator;
            const withCreatorName = context.withCreatorName;
            const jsonCreatorMetadataKey = 'JsonCreator:' + ((withCreatorName != null) ? withCreatorName : decorators_1.defaultCreatorName);
            const hasJsonCreator = util_1.hasMetadata(jsonCreatorMetadataKey, currentMainCreator, null, context);
            const jsonCreator = (hasJsonCreator) ?
                util_1.getMetadata(jsonCreatorMetadataKey, currentMainCreator, null, context) :
                currentMainCreator;
            const jsonIgnoreProperties = util_1.getMetadata('JsonIgnoreProperties', currentMainCreator, null, context);
            const method = (hasJsonCreator) ?
                ((jsonCreator._ctor) ?
                    jsonCreator._ctor :
                    jsonCreator._method)
                : jsonCreator;
            let args;
            let argNames;
            let argNamesAliasToBeExcluded;
            let instance;
            if (('mode' in jsonCreator && jsonCreator.mode === decorators_1.JsonCreatorMode.PROPERTIES) || !('mode' in jsonCreator)) {
                const methodName = ('_propertyKey' in jsonCreator && jsonCreator._propertyKey) ? jsonCreator._propertyKey : 'constructor';
                const result = this.parseMethodArguments(methodName, method, obj, context, globalContext, null, true);
                args = result.args != null && result.args.length > 0 ? result.args : [obj];
                argNames = result.argNames;
                argNamesAliasToBeExcluded = result.argNamesAliasToBeExcluded;
                instance = ('_method' in jsonCreator && jsonCreator._method) ?
                    method(...args) : new method(...args);
            }
            else if ('mode' in jsonCreator) {
                switch (jsonCreator.mode) {
                    case decorators_1.JsonCreatorMode.DELEGATING:
                        instance = ('_method' in jsonCreator && jsonCreator._method) ?
                            method(obj) : new method(obj);
                        break;
                }
            }
            this.parseJsonIdentityInfo(instance, obj, context, globalContext);
            const jsonAppendAttributesToBeExcluded = [];
            const jsonAppend = util_1.getMetadata('JsonAppend', currentMainCreator, null, context);
            if (jsonAppend && jsonAppend.attrs && jsonAppend.attrs.length > 0) {
                for (const attr of jsonAppend.attrs) {
                    if (attr.value) {
                        jsonAppendAttributesToBeExcluded.push(attr.value);
                    }
                    if (attr.propName) {
                        jsonAppendAttributesToBeExcluded.push(attr.propName);
                    }
                }
            }
            if (('mode' in jsonCreator && jsonCreator.mode === decorators_1.JsonCreatorMode.PROPERTIES) || !('mode' in jsonCreator)) {
                const keysToBeExcluded = [...new Set([
                        ...argNames,
                        ...argNamesAliasToBeExcluded,
                        ...jsonAppendAttributesToBeExcluded,
                        ...classPropertiesToBeExcluded
                    ])];
                const classKeys = util_1.getClassProperties(currentMainCreator, obj, context, {
                    withSettersAsProperty: true
                });
                const remainingKeys = classKeys.filter(k => Object.hasOwnProperty.call(obj, k) && !keysToBeExcluded.includes(k));
                const hasJsonAnySetter = util_1.hasMetadata('JsonAnySetter', currentMainCreator, null, context);
                // add remaining properties and ignore the ones that are not part of "instance"
                for (const key of remainingKeys) {
                    const jsonVirtualProperty = util_1.getMetadata('JsonVirtualProperty:' + key, currentMainCreator, null, context);
                    if (jsonVirtualProperty && jsonVirtualProperty._descriptor != null) {
                        if (typeof jsonVirtualProperty._descriptor.value === 'function' || jsonVirtualProperty._descriptor.set != null ||
                            jsonVirtualProperty._descriptor.get == null) {
                            this.parseJsonSetter(instance, obj, key, context, globalContext);
                        }
                        else {
                            // if property has a descriptor but is not a function and doesn't have a setter,
                            // then this property has only getter, so we can skip it.
                            continue;
                        }
                    }
                    else if ((Object.hasOwnProperty.call(obj, key) && util_1.classHasOwnProperty(currentMainCreator, key, null, context)) ||
                        currentMainCreator.name === 'Object') {
                        instance[key] = this.parseJsonClassType(context, globalContext, obj, key);
                    }
                    else if (hasJsonAnySetter && Object.hasOwnProperty.call(obj, key)) {
                        // for any other unrecognized properties found
                        this.parseJsonAnySetter(instance, obj, key, context);
                    }
                    else if (!util_1.classHasOwnProperty(currentMainCreator, key, null, context) &&
                        ((jsonIgnoreProperties == null && context.features.deserialization.FAIL_ON_UNKNOWN_PROPERTIES) ||
                            (jsonIgnoreProperties != null && !jsonIgnoreProperties.ignoreUnknown))) {
                        // eslint-disable-next-line max-len
                        throw new JacksonError_1.JacksonError(`Unknown property "${key}" for ${currentMainCreator.name} at [Source '${JSON.stringify(obj)}']`);
                    }
                }
            }
            const classProperties = util_1.getClassProperties(currentMainCreator, null, context);
            for (const classProperty of classProperties) {
                /*
                if (!Object.hasOwnProperty.call(instance, classProperty) &&
                  !Object.getOwnPropertyDescriptor(currentMainCreator.prototype, classProperty)) {
                  instance[classProperty] = undefined; // set to undefined all the missing class properties (but not descriptors!)
                }
                */
                this.parseJsonInject(instance, obj, classProperty, context, globalContext);
                // if there is a reference, convert the reference property to the corresponding Class
                this.parseJsonManagedReference(instance, context, obj, classProperty);
            }
            return instance;
        }
    }
    /**
     *
     * @param replacement
     * @param obj
     * @param key
     * @param context
     * @param globalContext
     */
    parseJsonInject(replacement, obj, key, context, globalContext) {
        const currentMainCreator = context.mainCreator[0];
        let propertySetter;
        let jsonInject = util_1.getMetadata('JsonInject', currentMainCreator, key, context);
        if (!jsonInject) {
            propertySetter = util_1.mapVirtualPropertyToClassProperty(currentMainCreator, key, context, { checkSetters: true });
            jsonInject = util_1.getMetadata('JsonInject', currentMainCreator, propertySetter, context);
        }
        if (jsonInject && (!jsonInject.useInput || (jsonInject.useInput && replacement[key] == null && obj[key] == null))) {
            const injectableValue = context.injectableValues[jsonInject.value];
            if (propertySetter != null && typeof replacement[propertySetter] === 'function') {
                replacement[propertySetter](injectableValue);
            }
            else {
                replacement[key] = injectableValue;
            }
        }
    }
    /**
     *
     * @param replacement
     * @param obj
     * @param key
     * @param context
     * @param globalContext
     */
    parseJsonSetter(replacement, obj, key, context, globalContext) {
        const currentMainCreator = context.mainCreator[0];
        const jsonVirtualProperty = util_1.getMetadata('JsonVirtualProperty:' + key, currentMainCreator, null, context);
        if (('access' in jsonVirtualProperty && jsonVirtualProperty.access !== decorators_1.JsonPropertyAccess.READ_ONLY) ||
            !('access' in jsonVirtualProperty)) {
            if ('required' in jsonVirtualProperty && jsonVirtualProperty.required &&
                !Object.hasOwnProperty.call(obj, jsonVirtualProperty._propertyKey)) {
                // eslint-disable-next-line max-len
                throw new JacksonError_1.JacksonError(`Required value "${jsonVirtualProperty.value}" not found for ${currentMainCreator.name}.${key} at [Source '${JSON.stringify(obj)}']`);
            }
            let parsedValue;
            if (typeof jsonVirtualProperty._descriptor.value === 'function') {
                parsedValue = this.parseMethodArguments(key, null, obj, context, globalContext, [jsonVirtualProperty.value], false)
                    .args[0];
            }
            else {
                parsedValue = this.parseJsonClassType(context, globalContext, obj, key);
            }
            if ('nulls' in jsonVirtualProperty || 'contentNulls' in jsonVirtualProperty) {
                if (jsonVirtualProperty.nulls !== decorators_1.JsonSetterNulls.SET && parsedValue == null) {
                    switch (jsonVirtualProperty.nulls) {
                        case decorators_1.JsonSetterNulls.FAIL:
                            // eslint-disable-next-line max-len
                            throw new JacksonError_1.JacksonError(`"${parsedValue}" value found on ${jsonVirtualProperty.value} for ${currentMainCreator.name}.${key} at [Source '${JSON.stringify(obj)}']`);
                        case decorators_1.JsonSetterNulls.SKIP:
                            return;
                    }
                }
                if (jsonVirtualProperty.contentNulls !== decorators_1.JsonSetterNulls.SET) {
                    if (util_1.isIterableNoMapNoString(parsedValue)) {
                        parsedValue = [...parsedValue];
                        const indexesToBeRemoved = [];
                        for (let i = 0; i < parsedValue.length; i++) {
                            const value = parsedValue[i];
                            if (value == null) {
                                switch (jsonVirtualProperty.contentNulls) {
                                    case decorators_1.JsonSetterNulls.FAIL:
                                        // eslint-disable-next-line max-len
                                        throw new JacksonError_1.JacksonError(`"${value}" value found on ${jsonVirtualProperty.value} at index ${i} for ${currentMainCreator.name}.${key} at [Source '${JSON.stringify(obj)}']`);
                                    case decorators_1.JsonSetterNulls.SKIP:
                                        indexesToBeRemoved.push(i);
                                        break;
                                }
                            }
                        }
                        while (indexesToBeRemoved.length) {
                            parsedValue.splice(indexesToBeRemoved.pop(), 1);
                        }
                    }
                    else if (parsedValue instanceof Map || (parsedValue != null && parsedValue.constructor === Object)) {
                        const entries = (parsedValue instanceof Map) ?
                            [...parsedValue.entries()] :
                            Object.entries(parsedValue);
                        for (const [mapKey, mapValue] of entries) {
                            if (mapValue == null) {
                                switch (jsonVirtualProperty.contentNulls) {
                                    case decorators_1.JsonSetterNulls.FAIL:
                                        // eslint-disable-next-line max-len
                                        throw new JacksonError_1.JacksonError(`"${mapValue}" value found on ${jsonVirtualProperty.value} at key "${mapKey}" for ${currentMainCreator.name}.${key} at [Source '${JSON.stringify(obj)}']`);
                                    case decorators_1.JsonSetterNulls.SKIP:
                                        if (parsedValue instanceof Map) {
                                            parsedValue.delete(mapKey);
                                        }
                                        else {
                                            delete parsedValue[mapKey];
                                        }
                                        break;
                                }
                            }
                        }
                    }
                }
            }
            if (typeof jsonVirtualProperty._descriptor.value === 'function') {
                replacement[key](parsedValue);
            }
            else {
                replacement[key] = parsedValue;
            }
        }
    }
    /**
     *
     * @param methodName
     * @param method
     * @param obj
     * @param context
     * @param globalContext
     * @param argNames
     * @param isJsonCreator
     */
    parseMethodArguments(methodName, method, obj, context, globalContext, argNames, isJsonCreator) {
        const currentMainCreator = context.mainCreator[0];
        const args = [];
        argNames = (method) ? util_1.getArgumentNames(method) : argNames;
        if (context.features.deserialization.ACCEPT_CASE_INSENSITIVE_PROPERTIES) {
            const objKeys = Object.keys(obj);
            const caseInsesitiveObjKeys = objKeys.map((k) => k.toLowerCase());
            for (const argName of argNames) {
                const index = caseInsesitiveObjKeys.indexOf(argName.toLowerCase());
                if (index >= 0) {
                    obj[argName] = obj[objKeys[index]];
                    delete obj[objKeys[index]];
                    objKeys[index] = argName;
                }
            }
        }
        argNames = util_1.mapVirtualPropertiesToClassProperties(currentMainCreator, argNames, context, { checkSetters: true });
        const argNamesAliasToBeExcluded = [];
        for (let argIndex = 0; argIndex < argNames.length; argIndex++) {
            const key = argNames[argIndex];
            const hasJsonIgnore = util_1.hasMetadata('JsonIgnoreParam:' + argIndex, currentMainCreator, methodName, context);
            const isIncludedByJsonView = this.parseIsIncludedByJsonViewParam(context, methodName, argIndex);
            if (hasJsonIgnore || !isIncludedByJsonView) {
                args.push(null);
                continue;
            }
            const jsonInject = util_1.getMetadata('JsonInjectParam:' + argIndex, currentMainCreator, methodName, context);
            if (!jsonInject || (jsonInject && jsonInject.useInput)) {
                const jsonProperty = util_1.getMetadata('JsonPropertyParam:' + argIndex, currentMainCreator, methodName, context);
                let mappedKey = jsonProperty != null ? jsonProperty.value : null;
                if (!mappedKey) {
                    const jsonAlias = util_1.getMetadata('JsonAliasParam:' + argIndex, currentMainCreator, methodName, context);
                    if (jsonAlias && jsonAlias.values) {
                        mappedKey = jsonAlias.values.find((alias) => Object.hasOwnProperty.call(obj, alias));
                    }
                }
                if (mappedKey && Object.hasOwnProperty.call(obj, mappedKey)) {
                    args.push(this.parseJsonClassType(context, globalContext, obj, mappedKey, methodName, argIndex));
                    argNamesAliasToBeExcluded.push(mappedKey);
                }
                else if (mappedKey && jsonProperty.required) {
                    // eslint-disable-next-line max-len
                    throw new JacksonError_1.JacksonError(`Required property "${mappedKey}" not found on parameter at index ${argIndex} of ${currentMainCreator.name}.${methodName} at [Source '${JSON.stringify(obj)}']`);
                }
                else if (Object.hasOwnProperty.call(obj, key)) {
                    args.push(this.parseJsonClassType(context, globalContext, obj, key, methodName, argIndex));
                }
                else {
                    if (isJsonCreator && context.features.deserialization.FAIL_ON_MISSING_CREATOR_PROPERTIES &&
                        (!jsonInject || (jsonInject && !(jsonInject.value in context.injectableValues)))) {
                        // eslint-disable-next-line max-len
                        throw new JacksonError_1.JacksonError(`Missing @JsonCreator() parameter at index ${argIndex} of ${currentMainCreator.name}.${methodName} at [Source '${JSON.stringify(obj)}']`);
                    }
                    args.push(jsonInject ? context.injectableValues[jsonInject.value] : null);
                }
            }
            else {
                // force argument value to use options.injectableValues
                args.push(jsonInject ? context.injectableValues[jsonInject.value] : null);
            }
        }
        if (isJsonCreator && context.features.deserialization.FAIL_ON_NULL_CREATOR_PROPERTIES) {
            const argsLength = args.length;
            for (let i = 0; i < argsLength; i++) {
                const arg = args[i];
                if (arg == null) {
                    // eslint-disable-next-line max-len
                    throw new JacksonError_1.JacksonError(`Found "${arg}" value on @JsonCreator() parameter at index ${i} of ${currentMainCreator.name}.${methodName} at [Source '${JSON.stringify(obj)}']`);
                }
            }
        }
        return {
            args,
            argNames,
            argNamesAliasToBeExcluded
        };
    }
    /**
     *
     * @param replacement
     * @param context
     */
    parseJsonVirtualPropertyAndJsonAlias(replacement, context) {
        const currentMainCreator = context.mainCreator[0];
        // convert JsonProperty to Class properties
        const creatorMetadataKeys = util_1.getMetadataKeys(currentMainCreator, context);
        for (const metadataKey of creatorMetadataKeys) {
            if (metadataKey.includes(':JsonVirtualProperty:') || metadataKey.includes(':JsonAlias:')) {
                const realKey = metadataKey.split(metadataKey.includes(':JsonVirtualProperty:') ? ':JsonVirtualProperty:' : ':JsonAlias:')[1];
                const jsonVirtualProperty = util_1.getMetadata(metadataKey, currentMainCreator, null, context);
                if (jsonVirtualProperty && jsonVirtualProperty._descriptor != null &&
                    typeof jsonVirtualProperty._descriptor.value === 'function' &&
                    jsonVirtualProperty._propertyKey.startsWith('get')) {
                    continue;
                }
                const jsonAlias = util_1.getMetadata(metadataKey, currentMainCreator, null, context);
                const isIgnored = jsonVirtualProperty && 'access' in jsonVirtualProperty && jsonVirtualProperty.access === decorators_1.JsonPropertyAccess.READ_ONLY;
                if (jsonVirtualProperty && !isIgnored) {
                    if (Object.hasOwnProperty.call(replacement, jsonVirtualProperty.value)) {
                        replacement[realKey] = replacement[jsonVirtualProperty.value];
                        if (realKey !== jsonVirtualProperty.value) {
                            delete replacement[jsonVirtualProperty.value];
                        }
                    }
                    else if ('required' in jsonVirtualProperty && jsonVirtualProperty.required) {
                        // eslint-disable-next-line max-len
                        throw new JacksonError_1.JacksonError(`Required property "${jsonVirtualProperty.value}" not found at [Source '${JSON.stringify(replacement)}']`);
                    }
                }
                if (jsonAlias && jsonAlias.values && !isIgnored) {
                    for (const alias of jsonAlias.values) {
                        if (Object.hasOwnProperty.call(replacement, alias)) {
                            replacement[realKey] = replacement[alias];
                            if (realKey !== alias) {
                                delete replacement[alias];
                            }
                            break;
                        }
                    }
                }
                if (isIgnored) {
                    delete replacement[realKey];
                }
            }
        }
    }
    /**
     *
     * @param context
     * @param replacement
     * @param key
     */
    parseJsonRawValue(context, replacement, key) {
        const jsonRawValue = util_1.hasMetadata('JsonRawValue', context.mainCreator[0], key, context);
        if (jsonRawValue) {
            replacement[key] = JSON.stringify(replacement[key]);
        }
    }
    /**
     *
     * @param replacement
     * @param context
     */
    parseJsonRootName(replacement, context) {
        if (context.features.deserialization.UNWRAP_ROOT_VALUE) {
            const jsonRootName = util_1.getMetadata('JsonRootName', context.mainCreator[0], null, context);
            const wrapKey = (jsonRootName && jsonRootName.value) ? jsonRootName.value : context.mainCreator[0].constructor.name;
            if (!(wrapKey in replacement) || Object.keys(replacement).length !== 1) {
                // eslint-disable-next-line max-len
                throw new JacksonError_1.JacksonError(`No JSON Object with single property as root name "${wrapKey}" found to unwrap value at [Source "${JSON.stringify(replacement)}"]`);
            }
            return clone(replacement[wrapKey]);
        }
        return replacement;
    }
    /**
     *
     * @param context
     * @param globalContext
     * @param obj
     * @param key
     * @param methodName
     * @param argumentIndex
     */
    parseJsonClassType(context, globalContext, obj, key, methodName, argumentIndex) {
        let jsonClass;
        if (methodName != null && argumentIndex != null) {
            jsonClass =
                util_1.getMetadata('JsonClassTypeParam:' + argumentIndex, context.mainCreator[0], methodName, context);
        }
        if (!jsonClass) {
            // if @JsonClass() is not found at parameter level, try to get it from the class properties
            jsonClass = util_1.getMetadata('JsonClassType', context.mainCreator[0], key, context);
        }
        this.propagateDecorators(jsonClass, obj, key, context, methodName, argumentIndex);
        const newContext = cloneDeep(context);
        if (jsonClass && jsonClass.type) {
            newContext.mainCreator = jsonClass.type();
            this._addInternalDecoratorsFromJsonClass(newContext.mainCreator, newContext);
        }
        else {
            const newCreator = (obj[key] != null) ? obj[key].constructor : Object;
            newContext.mainCreator = [newCreator];
        }
        return this.deepTransform(key, obj[key], newContext, globalContext);
    }
    /**
     *
     * @param mainCreator
     * @param context
     */
    _addInternalDecoratorsFromJsonClass(mainCreator, context) {
        for (let i = 0; i < mainCreator.length; i++) {
            const ctor = mainCreator[i];
            if (!(ctor instanceof Array)) {
                if (!ctor.name && typeof ctor === 'function') {
                    const decoratorsToBeApplied = {
                        depth: 1
                    };
                    const result = ctor();
                    mainCreator[i] = result.target;
                    const decorators = result.decorators;
                    for (const decorator of decorators) {
                        const metadataKeysWithContext = util_1.makeMetadataKeysWithContext(decorator.name, { contextGroups: decorator.options.contextGroups });
                        for (const metadataKeyWithContext of metadataKeysWithContext) {
                            decoratorsToBeApplied[metadataKeyWithContext] = Object.assign({ enabled: true }, decorator.options);
                        }
                    }
                    context._internalDecorators.set(result.target, decoratorsToBeApplied);
                }
            }
            else {
                this._addInternalDecoratorsFromJsonClass(ctor, context);
            }
        }
    }
    /**
     *
     * @param replacement
     * @param context
     * @param obj
     * @param key
     */
    parseJsonManagedReference(replacement, context, obj, key) {
        const currentMainCreator = context.mainCreator[0];
        let jsonManagedReference = util_1.getMetadata('JsonManagedReference', currentMainCreator, key, context);
        let jsonClassManagedReference = util_1.getMetadata('JsonClassType', currentMainCreator, key, context);
        if (!jsonManagedReference) {
            const propertySetter = util_1.mapVirtualPropertyToClassProperty(currentMainCreator, key, context, { checkSetters: true });
            jsonManagedReference =
                util_1.getMetadata('JsonManagedReference', currentMainCreator, propertySetter, context);
            jsonClassManagedReference =
                util_1.getMetadata('JsonClassTypeParam:0', currentMainCreator, propertySetter, context);
            if (jsonManagedReference && !jsonClassManagedReference) {
                // eslint-disable-next-line max-len
                throw new JacksonError_1.JacksonError(`Missing mandatory @JsonClass() decorator for the parameter at index 0 of @JsonManagedReference() decorated ${replacement.constructor.name}.${propertySetter}() method at [Source '${JSON.stringify(obj)}']`);
            }
        }
        if (jsonManagedReference && jsonClassManagedReference) {
            const jsonClassConstructors = jsonClassManagedReference.type();
            const childConstructor = jsonClassConstructors[0];
            if (util_1.isClassIterable(childConstructor)) {
                const backReferenceConstructor = (jsonClassConstructors.length === 1) ?
                    Object :
                    ((!util_1.isSameConstructorOrExtensionOfNoObject(childConstructor, Map)) ?
                        jsonClassManagedReference.type()[1][0] :
                        jsonClassManagedReference.type()[1][1]);
                const jsonBackReference = util_1.getMetadata('JsonBackReference:' + jsonManagedReference.value, backReferenceConstructor, null, context);
                if (jsonBackReference) {
                    if (util_1.isSameConstructorOrExtensionOfNoObject(childConstructor, Map)) {
                        for (const [k, value] of replacement[key]) {
                            if (typeof value[jsonBackReference._propertyKey] === 'function') {
                                value[jsonBackReference._propertyKey](replacement);
                            }
                            else {
                                value[jsonBackReference._propertyKey] = replacement;
                            }
                        }
                    }
                    else {
                        for (const value of replacement[key]) {
                            if (typeof value[jsonBackReference._propertyKey] === 'function') {
                                value[jsonBackReference._propertyKey](replacement);
                            }
                            else {
                                value[jsonBackReference._propertyKey] = replacement;
                            }
                        }
                    }
                }
            }
            else {
                const jsonBackReference = util_1.getMetadata('JsonBackReference:' + jsonManagedReference.value, childConstructor, null, context);
                if (jsonBackReference) {
                    if (typeof replacement[key][jsonBackReference._propertyKey] === 'function') {
                        replacement[key][jsonBackReference._propertyKey](replacement);
                    }
                    else {
                        replacement[key][jsonBackReference._propertyKey] = replacement;
                    }
                }
            }
        }
        else if (jsonManagedReference && !jsonClassManagedReference) {
            // eslint-disable-next-line max-len
            throw new JacksonError_1.JacksonError(`Missing mandatory @JsonClass() decorator for the @JsonManagedReference() decorated ${replacement.constructor.name}["${key}"] field at [Source '${JSON.stringify(obj)}']`);
        }
    }
    /**
     *
     * @param replacement
     * @param obj
     * @param key
     * @param context
     */
    parseJsonAnySetter(replacement, obj, key, context) {
        const jsonAnySetter = util_1.getMetadata('JsonAnySetter', replacement.constructor, null, context);
        if (jsonAnySetter && replacement[jsonAnySetter._propertyKey]) {
            if (typeof replacement[jsonAnySetter._propertyKey] === 'function') {
                replacement[jsonAnySetter._propertyKey](key, obj[key]);
            }
            else {
                replacement[jsonAnySetter._propertyKey][key] = obj[key];
            }
        }
    }
    /**
     *
     * @param context
     * @param replacement
     */
    parseJsonDeserializeClass(replacement, context) {
        const jsonDeserialize = util_1.getMetadata('JsonDeserialize', context.mainCreator[0], null, context);
        if (jsonDeserialize && jsonDeserialize.using) {
            return jsonDeserialize.using(replacement, context);
        }
        return replacement;
    }
    /**
     *
     * @param context
     * @param replacement
     * @param key
     */
    parseJsonDeserializeProperty(key, replacement, context) {
        const currentMainCreator = context.mainCreator[0];
        const jsonDeserialize = util_1.getMetadata('JsonDeserialize', currentMainCreator, key, context);
        if (jsonDeserialize && jsonDeserialize.using) {
            replacement[key] = jsonDeserialize.using(replacement[key], context);
        }
    }
    /**
     *
     * @param context
     * @param key
     */
    parseHasJsonIgnore(context, key) {
        const currentMainCreator = context.mainCreator[0];
        const hasJsonIgnore = util_1.hasMetadata('JsonIgnore', currentMainCreator, key, context);
        if (!hasJsonIgnore) {
            const jsonIgnoreProperties = util_1.getMetadata('JsonIgnoreProperties', currentMainCreator, null, context);
            if (jsonIgnoreProperties) {
                const jsonVirtualProperty = util_1.getMetadata('JsonVirtualProperty:' + key, currentMainCreator, null, context);
                if (jsonVirtualProperty && jsonIgnoreProperties.value.includes(jsonVirtualProperty.value)) {
                    if (jsonVirtualProperty._descriptor != null && typeof jsonVirtualProperty._descriptor.value === 'function' &&
                        jsonIgnoreProperties.allowSetters) {
                        return false;
                    }
                    return true;
                }
                return jsonIgnoreProperties.value.includes(key);
            }
        }
        return hasJsonIgnore;
    }
    /**
     *
     * @param context
     */
    parseJsonIgnoreType(context) {
        return util_1.hasMetadata('JsonIgnoreType', context.mainCreator[0], null, context);
    }
    /**
     *
     * @param obj
     * @param context
     */
    parseJsonTypeInfo(obj, context) {
        const currentMainCreator = context.mainCreator[0];
        const jsonTypeInfo = util_1.getMetadata('JsonTypeInfo', currentMainCreator, null, context);
        if (jsonTypeInfo) {
            let jsonTypeCtor;
            let jsonTypeInfoProperty;
            let newObj = clone(obj);
            switch (jsonTypeInfo.include) {
                case decorators_1.JsonTypeInfoAs.PROPERTY:
                    jsonTypeInfoProperty = newObj[jsonTypeInfo.property];
                    if (jsonTypeInfoProperty == null &&
                        context.features.deserialization.FAIL_ON_MISSING_TYPE_ID && context.features.deserialization.FAIL_ON_INVALID_SUBTYPE) {
                        // eslint-disable-next-line max-len
                        throw new JacksonError_1.JacksonError(`Missing type id when trying to resolve type or subtype of class ${currentMainCreator.name}: missing type id property '${jsonTypeInfo.property}' at [Source '${JSON.stringify(newObj)}']`);
                    }
                    else {
                        delete newObj[jsonTypeInfo.property];
                    }
                    break;
                case decorators_1.JsonTypeInfoAs.WRAPPER_OBJECT:
                    if (!(newObj instanceof Object) || newObj instanceof Array) {
                        // eslint-disable-next-line max-len
                        throw new JacksonError_1.JacksonError(`Expected "Object", got "${newObj.constructor.name}": need JSON Object to contain JsonTypeInfoAs.WRAPPER_OBJECT type information for class "${currentMainCreator.name}" at [Source '${JSON.stringify(newObj)}']`);
                    }
                    jsonTypeInfoProperty = Object.keys(newObj)[0];
                    newObj = newObj[jsonTypeInfoProperty];
                    break;
                case decorators_1.JsonTypeInfoAs.WRAPPER_ARRAY:
                    if (!(newObj instanceof Array)) {
                        // eslint-disable-next-line max-len
                        throw new JacksonError_1.JacksonError(`Expected "Array", got "${newObj.constructor.name}": need JSON Array to contain JsonTypeInfoAs.WRAPPER_ARRAY type information for class "${currentMainCreator.name}" at [Source '${JSON.stringify(newObj)}']`);
                    }
                    else if (newObj.length > 2 || newObj.length === 0) {
                        // eslint-disable-next-line max-len
                        throw new JacksonError_1.JacksonError(`Expected "Array" of length 1 or 2, got "Array" of length ${newObj.length}: need JSON Array of length 1 or 2 to contain JsonTypeInfoAs.WRAPPER_ARRAY type information for class "${currentMainCreator.name}" at [Source '${JSON.stringify(newObj)}']`);
                    }
                    else if (newObj[0] == null || newObj[0].constructor !== String) {
                        // eslint-disable-next-line max-len
                        throw new JacksonError_1.JacksonError(`Expected "String", got "${newObj[0] ? newObj[0].constructor.name : newObj[0]}": need JSON String that contains type id (for subtype of "${currentMainCreator.name}") at [Source '${JSON.stringify(newObj)}']`);
                    }
                    jsonTypeInfoProperty = newObj[0];
                    newObj = newObj[1];
                    break;
            }
            const jsonTypeIdResolver = util_1.getMetadata('JsonTypeIdResolver', currentMainCreator, null, context);
            if (jsonTypeIdResolver && jsonTypeIdResolver.resolver) {
                jsonTypeCtor = jsonTypeIdResolver.resolver.typeFromId(jsonTypeInfoProperty, context);
            }
            const jsonSubTypes = util_1.getMetadata('JsonSubTypes', currentMainCreator, null, context);
            if (!jsonTypeCtor && jsonTypeInfoProperty != null) {
                if (jsonSubTypes && jsonSubTypes.types && jsonSubTypes.types.length > 0) {
                    for (const subType of jsonSubTypes.types) {
                        const subTypeClass = subType.class();
                        if ((subType.name != null && jsonTypeInfoProperty === subType.name) ||
                            jsonTypeInfoProperty === subTypeClass.name) {
                            jsonTypeCtor = subTypeClass;
                        }
                    }
                    if (!jsonTypeCtor && context.features.deserialization.FAIL_ON_INVALID_SUBTYPE) {
                        const ids = [(currentMainCreator).name];
                        ids.push(...jsonSubTypes.types.map((subType) => (subType.name) ? subType.name : subType.class().name));
                        // eslint-disable-next-line max-len
                        throw new JacksonError_1.JacksonError(`Could not resolve type id "${jsonTypeInfoProperty}" as a subtype of "${currentMainCreator.name}": known type ids = [${ids.join(', ')}] at [Source '${JSON.stringify(newObj)}']`);
                    }
                }
            }
            if (!jsonTypeCtor) {
                switch (jsonTypeInfo.use) {
                    case decorators_1.JsonTypeInfoId.NAME:
                        if (jsonTypeInfoProperty != null && jsonTypeInfoProperty === currentMainCreator.name) {
                            jsonTypeCtor = currentMainCreator;
                        }
                        break;
                }
            }
            if (!jsonTypeCtor && context.features.deserialization.FAIL_ON_INVALID_SUBTYPE && jsonTypeInfoProperty != null) {
                const ids = [(currentMainCreator).name];
                if (jsonSubTypes && jsonSubTypes.types && jsonSubTypes.types.length > 0) {
                    ids.push(...jsonSubTypes.types.map((subType) => (subType.name) ? subType.name : subType.class().name));
                }
                // eslint-disable-next-line max-len
                throw new JacksonError_1.JacksonError(`Could not resolve type id "${jsonTypeInfoProperty}" as a subtype of "${currentMainCreator.name}": known type ids = [${ids.join(', ')}] at [Source '${JSON.stringify(newObj)}']`);
            }
            else if (!jsonTypeCtor) {
                jsonTypeCtor = currentMainCreator;
            }
            context.mainCreator = [jsonTypeCtor];
            return newObj;
        }
        return obj;
    }
    /**
     *
     * @param context
     * @param key
     */
    parseIsIncludedByJsonViewProperty(context, key) {
        const currentMainCreator = context.mainCreator[0];
        if (context.withViews) {
            let jsonView = util_1.getMetadata('JsonView', currentMainCreator, key, context);
            if (!jsonView) {
                jsonView = util_1.getMetadata('JsonView', currentMainCreator, null, context);
            }
            if (jsonView && jsonView.value) {
                return this.parseIsIncludedByJsonView(jsonView, context);
            }
            return context.features.deserialization.DEFAULT_VIEW_INCLUSION;
        }
        return true;
    }
    /**
     *
     * @param context
     * @param methodName
     * @param argumentIndex
     */
    parseIsIncludedByJsonViewParam(context, methodName, argumentIndex) {
        const currentMainCreator = context.mainCreator[0];
        if (context.withViews) {
            const jsonView = util_1.getMetadata('JsonViewParam:' + argumentIndex, currentMainCreator, methodName, context);
            if (jsonView && jsonView.value) {
                return this.parseIsIncludedByJsonView(jsonView, context);
            }
            return context.features.deserialization.DEFAULT_VIEW_INCLUSION;
        }
        return true;
    }
    /**
     *
     * @param jsonView
     * @param context
     */
    parseIsIncludedByJsonView(jsonView, context) {
        const views = jsonView.value();
        const withViews = context.withViews();
        for (const view of views) {
            for (const withView of withViews) {
                if (util_1.isSameConstructorOrExtensionOf(view, withView)) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     *
     * @param replacement
     * @param context
     */
    parseJsonUnwrapped(replacement, context) {
        const currentMainCreator = context.mainCreator[0];
        const metadataKeys = util_1.getMetadataKeys(currentMainCreator, context);
        for (const metadataKey of metadataKeys) {
            if (metadataKey.includes(':JsonUnwrapped:')) {
                const realKey = metadataKey.split(':JsonUnwrapped:')[1];
                const jsonUnwrapped = util_1.getMetadata(metadataKey, currentMainCreator, null, context);
                if (jsonUnwrapped._descriptor != null &&
                    typeof jsonUnwrapped._descriptor.value === 'function' &&
                    !realKey.startsWith('set')) {
                    continue;
                }
                const jsonClass = util_1.getMetadata('JsonClassType', currentMainCreator, realKey, context);
                if (!jsonClass) {
                    // eslint-disable-next-line max-len
                    throw new JacksonError_1.JacksonError(`@JsonUnwrapped() requires use of @JsonClass() for deserialization at ${currentMainCreator.name}["${realKey}"])`);
                }
                const prefix = (jsonUnwrapped.prefix != null) ? jsonUnwrapped.prefix : '';
                const suffix = (jsonUnwrapped.suffix != null) ? jsonUnwrapped.suffix : '';
                replacement[realKey] = {};
                const properties = util_1.getClassProperties(jsonClass.type()[0], null, context, {
                    withJsonVirtualPropertyValues: true,
                    withJsonAliases: true
                });
                for (const k of properties) {
                    const wrappedKey = prefix + k + suffix;
                    if (Object.hasOwnProperty.call(replacement, wrappedKey)) {
                        replacement[realKey][k] = replacement[wrappedKey];
                        delete replacement[wrappedKey];
                    }
                }
            }
        }
    }
    /**
     *
     * @param replacement
     * @param obj
     * @param context
     * @param globalContext
     */
    parseJsonIdentityInfo(replacement, obj, context, globalContext) {
        const jsonIdentityInfo = util_1.getMetadata('JsonIdentityInfo', context.mainCreator[0], null, context);
        if (jsonIdentityInfo) {
            const id = obj[jsonIdentityInfo.property];
            const scope = jsonIdentityInfo.scope || '';
            const scopedId = this.generateScopedId(scope, id);
            if (!globalContext.globalValueAlreadySeen.has(scopedId)) {
                globalContext.globalValueAlreadySeen.set(scopedId, replacement);
            }
            delete obj[jsonIdentityInfo.property];
        }
    }
    /**
     *
     * @param iterable
     * @param key
     * @param context
     * @param globalContext
     */
    parseIterable(iterable, key, context, globalContext) {
        const jsonDeserialize = util_1.getMetadata('JsonDeserialize', context._propertyParentCreator, key, context);
        const currentCreators = context.mainCreator;
        const currentCreator = currentCreators[0];
        let newIterable;
        const newContext = cloneDeep(context);
        if (currentCreators.length > 1 && currentCreators[1] instanceof Array) {
            newContext.mainCreator = currentCreators[1];
        }
        else {
            newContext.mainCreator = [Object];
        }
        if (util_1.isSameConstructorOrExtensionOfNoObject(currentCreator, Set)) {
            if (util_1.isSameConstructor(currentCreator, Set)) {
                newIterable = new Set();
            }
            else {
                newIterable = new currentCreator();
            }
            for (let value of iterable) {
                if (newContext.mainCreator == null) {
                    newContext.mainCreator = [(value != null) ? value.constructor : Object];
                }
                if (jsonDeserialize && jsonDeserialize.contentUsing) {
                    value = jsonDeserialize.contentUsing(value, newContext);
                }
                if (this.parseJsonIgnoreType(newContext)) {
                    continue;
                }
                newIterable.add(this.deepTransform(key, value, newContext, globalContext));
            }
        }
        else {
            newIterable = [];
            for (let value of iterable) {
                if (newContext.mainCreator == null) {
                    newContext.mainCreator = [(value != null) ? value.constructor : Object];
                }
                if (jsonDeserialize && jsonDeserialize.contentUsing) {
                    value = jsonDeserialize.contentUsing(value, newContext);
                }
                if (this.parseJsonIgnoreType(newContext)) {
                    continue;
                }
                newIterable.push(this.deepTransform(key, value, newContext, globalContext));
            }
            if (!util_1.isSameConstructor(currentCreator, Array)) {
                // @ts-ignore
                newIterable = new currentCreator(...newIterable);
            }
        }
        return newIterable;
    }
    /**
     *
     * @param key
     * @param obj
     * @param context
     * @param globalContext
     */
    parseMapAndObjLiteral(key, obj, context, globalContext) {
        const currentCreators = context.mainCreator;
        const currentCreator = currentCreators[0];
        const jsonDeserialize = util_1.getMetadata('JsonDeserialize', context._propertyParentCreator, key, context);
        let map;
        const newContext = cloneDeep(context);
        if (currentCreators.length > 1 && currentCreators[1] instanceof Array) {
            newContext.mainCreator = currentCreators[1];
        }
        else {
            newContext.mainCreator = [Object];
        }
        if (util_1.isSameConstructorOrExtensionOfNoObject(currentCreator, Map)) {
            map = new currentCreator();
        }
        else {
            map = {};
        }
        const mapCurrentCreators = newContext.mainCreator;
        const mapKeys = Object.keys(obj);
        for (let mapKey of mapKeys) {
            let mapValue = obj[mapKey];
            const keyNewContext = cloneDeep(newContext);
            const valueNewContext = cloneDeep(newContext);
            if (mapCurrentCreators[0] instanceof Array) {
                keyNewContext.mainCreator = mapCurrentCreators[0];
            }
            else {
                keyNewContext.mainCreator = [mapCurrentCreators[0]];
            }
            if (keyNewContext.mainCreator[0] === Object) {
                keyNewContext.mainCreator[0] = mapKey.constructor;
            }
            if (mapCurrentCreators.length > 1) {
                if (mapCurrentCreators[1] instanceof Array) {
                    valueNewContext.mainCreator = mapCurrentCreators[1];
                }
                else {
                    valueNewContext.mainCreator = [mapCurrentCreators[1]];
                }
            }
            else {
                valueNewContext.mainCreator = [Object];
            }
            if (mapValue != null && mapValue.constructor !== Object && valueNewContext.mainCreator[0] === Object) {
                valueNewContext.mainCreator[0] = mapValue.constructor;
            }
            if (jsonDeserialize && (jsonDeserialize.contentUsing || jsonDeserialize.keyUsing)) {
                mapKey = (jsonDeserialize.keyUsing) ? jsonDeserialize.keyUsing(mapKey, keyNewContext) : mapKey;
                mapValue = (jsonDeserialize.contentUsing) ?
                    jsonDeserialize.contentUsing(mapValue, valueNewContext) : mapValue;
                if (mapKey != null && mapKey.constructor !== Object) {
                    keyNewContext.mainCreator[0] = mapKey.constructor;
                }
                if (mapValue != null && mapValue.constructor !== Object) {
                    valueNewContext.mainCreator[0] = mapValue.constructor;
                }
            }
            const mapKeyParsed = this.deepTransform('', mapKey, keyNewContext, globalContext);
            const mapValueParsed = this.deepTransform(mapKey, mapValue, valueNewContext, globalContext);
            if (map instanceof Map) {
                map.set(mapKeyParsed, mapValueParsed);
            }
            else {
                map[mapKeyParsed] = mapValueParsed;
            }
        }
        return map;
    }
    /**
     *
     * @param obj
     * @param context
     */
    parseJsonNaming(obj, context) {
        const jsonNamingOptions = util_1.getMetadata('JsonNaming', context.mainCreator[0], null, context);
        if (jsonNamingOptions && jsonNamingOptions.strategy != null) {
            const keys = Object.keys(obj);
            const classProperties = new Set(util_1.getClassProperties(context.mainCreator[0], null, context, {
                withSetterVirtualProperties: true
            }));
            const keysLength = keys.length;
            for (let i = 0; i < keysLength; i++) {
                const key = keys[i];
                let oldKey = key;
                switch (jsonNamingOptions.strategy) {
                    case decorators_1.PropertyNamingStrategy.KEBAB_CASE:
                        oldKey = key.replace(/-/g, '');
                        break;
                    case decorators_1.PropertyNamingStrategy.LOWER_DOT_CASE:
                        oldKey = key.replace(/\./g, '');
                        break;
                    case decorators_1.PropertyNamingStrategy.LOWER_CAMEL_CASE:
                    case decorators_1.PropertyNamingStrategy.LOWER_CASE:
                    case decorators_1.PropertyNamingStrategy.UPPER_CAMEL_CASE:
                        break;
                }
                let propertyFound = false;
                classProperties.forEach((propertyKey) => {
                    if (propertyKey.toLowerCase() === oldKey.toLowerCase()) {
                        oldKey = propertyKey;
                        propertyFound = true;
                        return;
                    }
                });
                if (!propertyFound && jsonNamingOptions.strategy === decorators_1.PropertyNamingStrategy.SNAKE_CASE) {
                    classProperties.forEach((propertyKey) => {
                        const tokens = propertyKey.split(/(?=[A-Z])/);
                        const tokensLength = tokens.length;
                        let reconstructedKey = '';
                        for (let j = 0; j < tokensLength; j++) {
                            const token = tokens[j].toLowerCase();
                            const separator = (j > 0 && tokens[j - 1].endsWith('_')) ? '' : '_';
                            reconstructedKey += (reconstructedKey !== '' && token.length > 1) ? separator + token : token;
                        }
                        if (key === reconstructedKey) {
                            oldKey = propertyKey;
                            return;
                        }
                    });
                }
                classProperties.delete(oldKey);
                if (oldKey != null && oldKey !== key) {
                    oldKey = util_1.mapVirtualPropertyToClassProperty(context.mainCreator[0], oldKey, context, { checkSetters: true });
                    obj[oldKey] = obj[key];
                    delete obj[key];
                }
            }
        }
    }
    /**
     *
     * @param scope
     * @param id
     */
    generateScopedId(scope, id) {
        return scope + ': ' + id;
    }
}
exports.JsonParser = JsonParser;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(14), exports);
tslib_1.__exportStar(__webpack_require__(5), exports);
tslib_1.__exportStar(__webpack_require__(3), exports);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(1), exports);
tslib_1.__exportStar(__webpack_require__(7), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(8), exports);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonAlias = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator that can be used to define one or more alternative names for a property,
 * accepted during deserialization as alternative to the official name.
 * Has no effect during serialization where primary name is always used.
 *
 * @example
 * ```typescript
 * class Book {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   @JsonAlias({values: ['bkcat', 'mybkcat']})
 *   category: string;
 *
 *   constructor(name: string, category: string) {
 *     this.name = name;
 *     this.category = category;
 *   }
 * }
 * ```
 */
exports.JsonAlias = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        util_1.defineMetadata('JsonAlias', options, target.constructor, propertyKey);
        util_1.defineMetadata('JsonAlias', options, target.constructor, null, {
            suffix: propertyKey.toString()
        });
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        util_1.defineMetadata('JsonAliasParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  const errorMessages = {
      [0]: 'Unexpected token',
      [28]: "Unexpected token: '%0'",
      [1]: 'Octal escape sequences are not allowed in strict mode',
      [2]: 'Octal escape sequences are not allowed in template strings',
      [3]: 'Unexpected token `#`',
      [4]: 'Illegal Unicode escape sequence',
      [5]: 'Invalid code point %0',
      [6]: 'Invalid hexadecimal escape sequence',
      [8]: 'Octal literals are not allowed in strict mode',
      [7]: 'Decimal integer literals with a leading zero are forbidden in strict mode',
      [9]: 'Expected number in radix %0',
      [145]: 'Invalid left-hand side assignment to a destructible right-hand side',
      [10]: 'Non-number found after exponent indicator',
      [11]: 'Invalid BigIntLiteral',
      [12]: 'No identifiers allowed directly after numeric literal',
      [13]: 'Escapes \\8 or \\9 are not syntactically valid escapes',
      [14]: 'Unterminated string literal',
      [15]: 'Unterminated template literal',
      [16]: 'Multiline comment was not closed properly',
      [17]: 'The identifier contained dynamic unicode escape that was not closed',
      [18]: "Illegal character '%0'",
      [19]: 'Missing hexadecimal digits',
      [20]: 'Invalid implicit octal',
      [21]: 'Invalid line break in string literal',
      [22]: 'Only unicode escapes are legal in identifier names',
      [23]: "Expected '%0'",
      [24]: 'Invalid left-hand side in assignment',
      [25]: 'Invalid left-hand side in async arrow',
      [26]: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
      [27]: 'Member access on super must be in a method',
      [29]: 'Await expression not allowed in formal parameter',
      [30]: 'Yield expression not allowed in formal parameter',
      [92]: "Unexpected token: 'escaped keyword'",
      [31]: 'Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses',
      [119]: 'Async functions can only be declared at the top level or inside a block',
      [32]: 'Unterminated regular expression',
      [33]: 'Unexpected regular expression flag',
      [34]: "Duplicate regular expression flag '%0'",
      [35]: '%0 functions must have exactly %1 argument%2',
      [36]: 'Setter function argument must not be a rest parameter',
      [37]: '%0 declaration must have a name in this context',
      [38]: 'Function name may not contain any reserved words or be eval or arguments in strict mode',
      [39]: 'The rest operator is missing an argument',
      [40]: 'A getter cannot be a generator',
      [41]: 'A computed property name must be followed by a colon or paren',
      [130]: 'Object literal keys that are strings or numbers must be a method or have a colon',
      [43]: 'Found `* async x(){}` but this should be `async * x(){}`',
      [42]: 'Getters and setters can not be generators',
      [44]: "'%0' can not be generator method",
      [45]: "No line break is allowed after '=>'",
      [46]: 'The left-hand side of the arrow can only be destructed through assignment',
      [47]: 'The binding declaration is not destructible',
      [48]: 'Async arrow can not be followed by new expression',
      [49]: "Classes may not have a static property named 'prototype'",
      [50]: 'Class constructor may not be a %0',
      [51]: 'Duplicate constructor method in class',
      [52]: 'Invalid increment/decrement operand',
      [53]: 'Invalid use of `new` keyword on an increment/decrement expression',
      [54]: '`=>` is an invalid assignment target',
      [55]: 'Rest element may not have a trailing comma',
      [56]: 'Missing initializer in %0 declaration',
      [57]: "'for-%0' loop head declarations can not have an initializer",
      [58]: 'Invalid left-hand side in for-%0 loop: Must have a single binding',
      [59]: 'Invalid shorthand property initializer',
      [60]: 'Property name __proto__ appears more than once in object literal',
      [61]: 'Let is disallowed as a lexically bound name',
      [62]: "Invalid use of '%0' inside new expression",
      [63]: "Illegal 'use strict' directive in function with non-simple parameter list",
      [64]: 'Identifier "let" disallowed as left-hand side expression in strict mode',
      [65]: 'Illegal continue statement',
      [66]: 'Illegal break statement',
      [67]: 'Cannot have `let[...]` as a var name in strict mode',
      [68]: 'Invalid destructuring assignment target',
      [69]: 'Rest parameter may not have a default initializer',
      [70]: 'The rest argument must the be last parameter',
      [71]: 'Invalid rest argument',
      [73]: 'In strict mode code, functions can only be declared at top level or inside a block',
      [74]: 'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement',
      [75]: 'Without web compability enabled functions can not be declared at top level, inside a block, or as the body of an if statement',
      [76]: "Class declaration can't appear in single-statement context",
      [77]: 'Invalid left-hand side in for-%0',
      [78]: 'Invalid assignment in for-%0',
      [79]: 'for await (... of ...) is only valid in async functions and async generators',
      [80]: 'The first token after the template expression should be a continuation of the template',
      [82]: '`let` declaration not allowed here and `let` cannot be a regular var name in strict mode',
      [81]: '`let \n [` is a restricted production at the start of a statement',
      [83]: 'Catch clause requires exactly one parameter, not more (and no trailing comma)',
      [84]: 'Catch clause parameter does not support default values',
      [85]: 'Missing catch or finally after try',
      [86]: 'More than one default clause in switch statement',
      [87]: 'Illegal newline after throw',
      [88]: 'Strict mode code may not include a with statement',
      [89]: 'Illegal return statement',
      [90]: 'The left hand side of the for-header binding declaration is not destructible',
      [91]: 'new.target only allowed within functions',
      [92]: "'Unexpected token: 'escaped keyword'",
      [93]: "'#' not followed by identifier",
      [99]: 'Invalid keyword',
      [98]: "Can not use 'let' as a class name",
      [97]: "'A lexical declaration can't define a 'let' binding",
      [96]: 'Can not use `let` as variable name in strict mode',
      [94]: "'%0' may not be used as an identifier in this context",
      [95]: 'Await is only valid in async functions',
      [100]: 'The %0 keyword can only be used with the module goal',
      [101]: 'Unicode codepoint must not be greater than 0x10FFFF',
      [102]: '%0 source must be string',
      [103]: 'Only a identifier can be used to indicate alias',
      [104]: "Only '*' or '{...}' can be imported after default",
      [105]: 'Trailing decorator may be followed by method',
      [106]: "Decorators can't be used with a constructor",
      [107]: "'%0' may not be used as an identifier in this context",
      [108]: 'HTML comments are only allowed with web compability (Annex B)',
      [109]: "The identifier 'let' must not be in expression position in strict mode",
      [110]: 'Cannot assign to `eval` and `arguments` in strict mode',
      [111]: "The left-hand side of a for-of loop may not start with 'let'",
      [112]: 'Block body arrows can not be immediately invoked without a group',
      [113]: 'Block body arrows can not be immediately accessed without a group',
      [114]: 'Unexpected strict mode reserved word',
      [115]: 'Unexpected eval or arguments in strict mode',
      [116]: 'Decorators must not be followed by a semicolon',
      [117]: 'Calling delete on expression not allowed in strict mode',
      [118]: 'Pattern can not have a tail',
      [120]: 'Can not have a `yield` expression on the left side of a ternary',
      [121]: 'An arrow function can not have a postfix update operator',
      [122]: 'Invalid object literal key character after generator star',
      [123]: 'Private fields can not be deleted',
      [125]: 'Classes may not have a field called constructor',
      [124]: 'Classes may not have a private element named constructor',
      [126]: 'A class field initializer may not contain arguments',
      [127]: 'Generators can only be declared at the top level or inside a block',
      [128]: 'Async methods are a restricted production and cannot have a newline following it',
      [129]: 'Unexpected character after object literal property name',
      [131]: 'Invalid key token',
      [132]: "Label '%0' has already been declared",
      [133]: 'continue statement must be nested within an iteration statement',
      [134]: "Undefined label '%0'",
      [135]: 'Trailing comma is disallowed inside import(...) arguments',
      [136]: 'import() requires exactly one argument',
      [137]: 'Cannot use new with import(...)',
      [138]: '... is not allowed in import()',
      [139]: "Expected '=>'",
      [140]: "Duplicate binding '%0'",
      [141]: "Cannot export a duplicate name '%0'",
      [144]: 'Duplicate %0 for-binding',
      [142]: "Exported binding '%0' needs to refer to a top-level declared variable",
      [143]: 'Unexpected private field',
      [147]: 'Numeric separators are not allowed at the end of numeric literals',
      [146]: 'Only one underscore is allowed as numeric separator',
      [148]: 'JSX value should be either an expression or a quoted JSX text',
      [149]: 'Expected corresponding JSX closing tag for %0',
      [150]: 'Adjacent JSX elements must be wrapped in an enclosing tag',
      [151]: "JSX attributes must only be assigned a non-empty 'expression'",
      [152]: "'%0' has already been declared",
      [153]: "'%0' shadowed a catch clause binding",
      [154]: 'Dot property must be an identifier',
      [155]: 'Encountered invalid input after spread/rest argument',
      [156]: 'Catch without try',
      [157]: 'Finally without try',
      [158]: 'Expected corresponding closing tag for JSX fragment',
      [159]: 'Coalescing and logical operators used together in the same expression must be disambiguated with parentheses',
      [160]: 'Invalid tagged template on optional chain',
      [161]: 'Invalid optional chain from super property',
      [162]: 'Invalid optional chain from new expression',
      [163]: 'Cannot use "import.meta" outside a module'
  };
  class ParseError extends SyntaxError {
      constructor(startindex, line, column, type, ...params) {
          const message = '[' + line + ':' + column + ']: ' + errorMessages[type].replace(/%(\d+)/g, (_, i) => params[i]);
          super(`${message}`);
          this.index = startindex;
          this.line = line;
          this.column = column;
          this.description = message;
          this.loc = {
              line,
              column
          };
      }
  }
  function report(parser, type, ...params) {
      throw new ParseError(parser.index, parser.line, parser.column, type, ...params);
  }
  function reportScopeError(scope) {
      throw new ParseError(scope.index, scope.line, scope.column, scope.type, scope.params);
  }
  function reportMessageAt(index, line, column, type, ...params) {
      throw new ParseError(index, line, column, type, ...params);
  }
  function reportScannerError(index, line, column, type) {
      throw new ParseError(index, line, column, type);
  }

  const unicodeLookup = ((compressed, lookup) => {
      const result = new Uint32Array(104448);
      let index = 0;
      let subIndex = 0;
      while (index < 3540) {
          const inst = compressed[index++];
          if (inst < 0) {
              subIndex -= inst;
          }
          else {
              let code = compressed[index++];
              if (inst & 2)
                  code = lookup[code];
              if (inst & 1) {
                  result.fill(code, subIndex, subIndex += compressed[index++]);
              }
              else {
                  result[subIndex++] = code;
              }
          }
      }
      return result;
  })([-1, 2, 24, 2, 25, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 57, 2, 58, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 59, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 60, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 61, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 131, 2, 6, 2, 56, -1, 2, 37, 0, 4294443263, 2, 1, 3, 0, 3, 0, 4294901711, 2, 39, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 2, 194, 2, 3, 0, 3825204735, 0, 123747807, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1080049119, 0, 458703, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 66, 0, 4284449919, 0, 851904, 2, 4, 2, 11, 0, 67076095, -1, 2, 67, 0, 1073741743, 0, 4093591391, -1, 0, 50331649, 0, 3265266687, 2, 32, 0, 4294844415, 0, 4278190047, 2, 18, 2, 129, -1, 3, 0, 2, 2, 21, 2, 0, 2, 9, 2, 0, 2, 14, 2, 15, 3, 0, 10, 2, 69, 2, 0, 2, 70, 2, 71, 2, 72, 2, 0, 2, 73, 2, 0, 2, 10, 0, 261632, 2, 23, 3, 0, 2, 2, 12, 2, 4, 3, 0, 18, 2, 74, 2, 5, 3, 0, 2, 2, 75, 0, 2088959, 2, 27, 2, 8, 0, 909311, 3, 0, 2, 0, 814743551, 2, 41, 0, 67057664, 3, 0, 2, 2, 40, 2, 0, 2, 28, 2, 0, 2, 29, 2, 7, 0, 268374015, 2, 26, 2, 49, 2, 0, 2, 76, 0, 134153215, -1, 2, 6, 2, 0, 2, 7, 0, 2684354559, 0, 67044351, 0, 3221160064, 0, 1, -1, 3, 0, 2, 2, 42, 0, 1046528, 3, 0, 3, 2, 8, 2, 0, 2, 51, 0, 4294960127, 2, 9, 2, 38, 2, 10, 0, 4294377472, 2, 11, 3, 0, 7, 0, 4227858431, 3, 0, 8, 2, 12, 2, 0, 2, 78, 2, 9, 2, 0, 2, 79, 2, 80, 2, 81, -1, 2, 124, 0, 1048577, 2, 82, 2, 13, -1, 2, 13, 0, 131042, 2, 83, 2, 84, 2, 85, 2, 0, 2, 33, -83, 2, 0, 2, 53, 2, 7, 3, 0, 4, 0, 1046559, 2, 0, 2, 14, 2, 0, 0, 2147516671, 2, 20, 3, 86, 2, 2, 0, -16, 2, 87, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 2, 0, 2, 15, 2, 77, 2, 16, 3, 0, 2, 2, 47, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 655, 2, 18, 3, 0, 36, 2, 68, -1, 2, 17, 2, 9, 3, 0, 8, 2, 89, 2, 121, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 90, 2, 91, 3, 0, 2, 2, 92, 2, 0, 2, 93, 2, 94, 2, 0, 0, 4351, 2, 0, 2, 8, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 22, 2, 8, 2, 18, 3, 0, 2, 0, 67076097, 2, 7, 2, 0, 2, 20, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 97, 2, 98, 2, 15, 2, 21, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 99, 2, 100, 2, 6, -264, 3, 0, 11, 2, 22, 3, 0, 2, 2, 31, -1, 0, 3774349439, 2, 101, 2, 102, 3, 0, 2, 2, 19, 2, 103, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 45, 2, 0, 2, 30, 2, 104, 2, 23, 0, 1638399, 2, 172, 2, 105, 3, 0, 3, 2, 18, 2, 24, 2, 25, 2, 5, 2, 26, 2, 0, 2, 7, 2, 106, -1, 2, 107, 2, 108, 2, 109, -1, 3, 0, 3, 2, 11, -2, 2, 0, 2, 27, -3, 2, 150, -4, 2, 18, 2, 0, 2, 35, 0, 1, 2, 0, 2, 62, 2, 28, 2, 11, 2, 9, 2, 0, 2, 110, -1, 3, 0, 4, 2, 9, 2, 21, 2, 111, 2, 6, 2, 0, 2, 112, 2, 0, 2, 48, -4, 3, 0, 9, 2, 20, 2, 29, 2, 30, -4, 2, 113, 2, 114, 2, 29, 2, 20, 2, 7, -2, 2, 115, 2, 29, 2, 31, -2, 2, 0, 2, 116, -2, 0, 4277137519, 0, 2269118463, -1, 3, 18, 2, -1, 2, 32, 2, 36, 2, 0, 3, 29, 2, 2, 34, 2, 19, -3, 3, 0, 2, 2, 33, -1, 2, 0, 2, 34, 2, 0, 2, 34, 2, 0, 2, 46, -10, 2, 0, 0, 203775, -2, 2, 18, 2, 43, 2, 35, -2, 2, 17, 2, 117, 2, 20, 3, 0, 2, 2, 36, 0, 2147549120, 2, 0, 2, 11, 2, 17, 2, 135, 2, 0, 2, 37, 2, 52, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 120, 0, 1090519039, -2, 2, 122, 2, 38, 2, 0, 0, 67045375, 2, 39, 0, 4226678271, 0, 3766565279, 0, 2039759, -4, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 40, 2, 41, -1, 2, 10, 2, 42, -6, 2, 0, 2, 11, -3, 3, 0, 2, 0, 2147484671, 2, 125, 0, 4190109695, 2, 50, -2, 2, 126, 0, 4244635647, 0, 27, 2, 0, 2, 7, 2, 43, 2, 0, 2, 63, -1, 2, 0, 2, 40, -8, 2, 54, 2, 44, 0, 67043329, 2, 127, 2, 45, 0, 8388351, -2, 2, 128, 0, 3028287487, 2, 46, 2, 130, 0, 33259519, 2, 41, -9, 2, 20, -5, 2, 64, -2, 3, 0, 28, 2, 31, -3, 3, 0, 3, 2, 47, 3, 0, 6, 2, 48, -85, 3, 0, 33, 2, 47, -126, 3, 0, 18, 2, 36, -269, 3, 0, 17, 2, 40, 2, 7, 2, 41, -2, 2, 17, 2, 49, 2, 0, 2, 20, 2, 50, 2, 132, 2, 23, -21, 3, 0, 2, -4, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 196635, 3, 0, 191, 2, 51, 3, 0, 38, 2, 29, -1, 2, 33, -279, 3, 0, 8, 2, 7, -1, 2, 133, 2, 52, 3, 0, 11, 2, 6, -72, 3, 0, 3, 2, 134, 0, 1677656575, -166, 0, 4161266656, 0, 4071, 0, 15360, -4, 0, 28, -13, 3, 0, 2, 2, 37, 2, 0, 2, 136, 2, 137, 2, 55, 2, 0, 2, 138, 2, 139, 2, 140, 3, 0, 10, 2, 141, 2, 142, 2, 15, 3, 37, 2, 3, 53, 2, 3, 54, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 88, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -42, 0, 4194303871, 0, 2011, -6, 2, 0, 0, 1073684479, 0, 17407, -11, 2, 0, 2, 31, -40, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 42, -37, 2, 55, 2, 144, 2, 145, 2, 146, 2, 147, 2, 148, -105, 2, 24, -32, 3, 0, 1334, 2, 9, -1, 3, 0, 129, 2, 27, 3, 0, 6, 2, 9, 3, 0, 180, 2, 149, 3, 0, 233, 0, 1, -96, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 56, -22381, 3, 0, 7, 2, 23, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 57, 2, 58, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 59, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 60, 2, 0, 2, 33, -1, 2, 17, 2, 61, -1, 2, 0, 2, 56, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 23, 2, 62, 3, 0, 2, 0, 131135, 2, 95, 0, 70256639, 0, 71303167, 0, 272, 2, 40, 2, 56, -1, 2, 37, 2, 30, -1, 2, 96, 2, 63, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 65, 2, 64, 0, 33554435, 2, 123, 2, 65, 2, 151, 0, 131075, 0, 3594373096, 0, 67094296, 2, 64, -1, 0, 4294828000, 0, 603979263, 2, 160, 0, 3, 0, 4294828001, 0, 602930687, 2, 183, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 66, 2, 36, -1, 2, 4, 0, 917503, 2, 36, -1, 2, 67, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 32, 2, 68, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 14, 2, 15, 3, 0, 10, 2, 69, 2, 0, 2, 70, 2, 71, 2, 72, 2, 0, 2, 73, 2, 0, 2, 11, -1, 2, 23, 3, 0, 2, 2, 12, 2, 4, 3, 0, 18, 2, 74, 2, 5, 3, 0, 2, 2, 75, 0, 253951, 3, 19, 2, 0, 122879, 2, 0, 2, 8, 0, 276824064, -2, 3, 0, 2, 2, 40, 2, 0, 0, 4294903295, 2, 0, 2, 29, 2, 7, -1, 2, 17, 2, 49, 2, 0, 2, 76, 2, 41, -1, 2, 20, 2, 0, 2, 27, -2, 0, 128, -2, 2, 77, 2, 8, 0, 4064, -1, 2, 119, 0, 4227907585, 2, 0, 2, 118, 2, 0, 2, 48, 2, 173, 2, 9, 2, 38, 2, 10, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 12, 2, 0, 2, 78, 2, 9, 2, 0, 2, 79, 2, 80, 2, 81, -3, 2, 82, 2, 13, -3, 2, 83, 2, 84, 2, 85, 2, 0, 2, 33, -83, 2, 0, 2, 53, 2, 7, 3, 0, 4, 0, 817183, 2, 0, 2, 14, 2, 0, 0, 33023, 2, 20, 3, 86, 2, -17, 2, 87, 0, 524157950, 2, 4, 2, 0, 2, 88, 2, 4, 2, 0, 2, 15, 2, 77, 2, 16, 3, 0, 2, 2, 47, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 655, 2, 18, 3, 0, 36, 2, 68, -1, 2, 17, 2, 9, 3, 0, 8, 2, 89, 0, 3072, 2, 0, 0, 2147516415, 2, 9, 3, 0, 2, 2, 23, 2, 90, 2, 91, 3, 0, 2, 2, 92, 2, 0, 2, 93, 2, 94, 0, 4294965179, 0, 7, 2, 0, 2, 8, 2, 91, 2, 8, -1, 0, 1761345536, 2, 95, 0, 4294901823, 2, 36, 2, 18, 2, 96, 2, 34, 2, 166, 0, 2080440287, 2, 0, 2, 33, 2, 143, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 97, 2, 98, 2, 15, 2, 21, 3, 0, 3, 0, 7, 3, 0, 349, 2, 99, 2, 100, 2, 6, -264, 3, 0, 11, 2, 22, 3, 0, 2, 2, 31, -1, 0, 2700607615, 2, 101, 2, 102, 3, 0, 2, 2, 19, 2, 103, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 45, 2, 0, 2, 30, 2, 104, -3, 2, 105, 3, 0, 3, 2, 18, -1, 3, 5, 2, 2, 26, 2, 0, 2, 7, 2, 106, -1, 2, 107, 2, 108, 2, 109, -1, 3, 0, 3, 2, 11, -2, 2, 0, 2, 27, -8, 2, 18, 2, 0, 2, 35, -1, 2, 0, 2, 62, 2, 28, 2, 29, 2, 9, 2, 0, 2, 110, -1, 3, 0, 4, 2, 9, 2, 17, 2, 111, 2, 6, 2, 0, 2, 112, 2, 0, 2, 48, -4, 3, 0, 9, 2, 20, 2, 29, 2, 30, -4, 2, 113, 2, 114, 2, 29, 2, 20, 2, 7, -2, 2, 115, 2, 29, 2, 31, -2, 2, 0, 2, 116, -2, 0, 4277075969, 2, 29, -1, 3, 18, 2, -1, 2, 32, 2, 117, 2, 0, 3, 29, 2, 2, 34, 2, 19, -3, 3, 0, 2, 2, 33, -1, 2, 0, 2, 34, 2, 0, 2, 34, 2, 0, 2, 48, -10, 2, 0, 0, 197631, -2, 2, 18, 2, 43, 2, 118, -2, 2, 17, 2, 117, 2, 20, 2, 119, 2, 51, -2, 2, 119, 2, 23, 2, 17, 2, 33, 2, 119, 2, 36, 0, 4294901904, 0, 4718591, 2, 119, 2, 34, 0, 335544350, -1, 2, 120, 2, 121, -2, 2, 122, 2, 38, 2, 7, -1, 2, 123, 2, 65, 0, 3758161920, 0, 3, -4, 2, 0, 2, 27, 0, 2147485568, 0, 3, 2, 0, 2, 23, 0, 176, -5, 2, 0, 2, 47, 2, 186, -1, 2, 0, 2, 23, 2, 197, -1, 2, 0, 0, 16779263, -2, 2, 11, -7, 2, 0, 2, 121, -3, 3, 0, 2, 2, 124, 2, 125, 0, 2147549183, 0, 2, -2, 2, 126, 2, 35, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, -1, 2, 0, 2, 40, -8, 2, 54, 2, 47, 0, 1, 2, 127, 2, 23, -3, 2, 128, 2, 35, 2, 129, 2, 130, 0, 16778239, -10, 2, 34, -5, 2, 64, -2, 3, 0, 28, 2, 31, -3, 3, 0, 3, 2, 47, 3, 0, 6, 2, 48, -85, 3, 0, 33, 2, 47, -126, 3, 0, 18, 2, 36, -269, 3, 0, 17, 2, 40, 2, 7, -3, 2, 17, 2, 131, 2, 0, 2, 23, 2, 48, 2, 132, 2, 23, -21, 3, 0, 2, -4, 3, 0, 2, 0, 67583, -1, 2, 103, -2, 0, 11, 3, 0, 191, 2, 51, 3, 0, 38, 2, 29, -1, 2, 33, -279, 3, 0, 8, 2, 7, -1, 2, 133, 2, 52, 3, 0, 11, 2, 6, -72, 3, 0, 3, 2, 134, 2, 135, -187, 3, 0, 2, 2, 37, 2, 0, 2, 136, 2, 137, 2, 55, 2, 0, 2, 138, 2, 139, 2, 140, 3, 0, 10, 2, 141, 2, 142, 2, 15, 3, 37, 2, 3, 53, 2, 3, 54, 2, 2, 143, -73, 2, 0, 0, 1065361407, 0, 16384, -11, 2, 0, 2, 121, -40, 3, 0, 6, 2, 117, -1, 3, 0, 2, 0, 2063, -37, 2, 55, 2, 144, 2, 145, 2, 146, 2, 147, 2, 148, -138, 3, 0, 1334, 2, 9, -1, 3, 0, 129, 2, 27, 3, 0, 6, 2, 9, 3, 0, 180, 2, 149, 3, 0, 233, 0, 1, -96, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 56, -28517, 2, 0, 0, 1, -1, 2, 124, 2, 0, 0, 8193, -21, 2, 193, 0, 10255, 0, 4, -11, 2, 64, 2, 171, -1, 0, 71680, -1, 2, 161, 0, 4292900864, 0, 805306431, -5, 2, 150, -1, 2, 157, -1, 0, 6144, -2, 2, 127, -1, 2, 154, -1, 0, 2147532800, 2, 151, 2, 165, 2, 0, 2, 164, 0, 524032, 0, 4, -4, 2, 190, 0, 205128192, 0, 1333757536, 0, 2147483696, 0, 423953, 0, 747766272, 0, 2717763192, 0, 4286578751, 0, 278545, 2, 152, 0, 4294886464, 0, 33292336, 0, 417809, 2, 152, 0, 1327482464, 0, 4278190128, 0, 700594195, 0, 1006647527, 0, 4286497336, 0, 4160749631, 2, 153, 0, 469762560, 0, 4171219488, 0, 8323120, 2, 153, 0, 202375680, 0, 3214918176, 0, 4294508592, 2, 153, -1, 0, 983584, 0, 48, 0, 58720273, 0, 3489923072, 0, 10517376, 0, 4293066815, 0, 1, 0, 2013265920, 2, 177, 2, 0, 0, 2089, 0, 3221225552, 0, 201375904, 2, 0, -2, 0, 256, 0, 122880, 0, 16777216, 2, 150, 0, 4160757760, 2, 0, -6, 2, 167, -11, 0, 3263218176, -1, 0, 49664, 0, 2160197632, 0, 8388802, -1, 0, 12713984, -1, 2, 154, 2, 159, 2, 178, -2, 2, 162, -20, 0, 3758096385, -2, 2, 155, 0, 4292878336, 2, 90, 2, 169, 0, 4294057984, -2, 2, 163, 2, 156, 2, 175, -2, 2, 155, -1, 2, 182, -1, 2, 170, 2, 124, 0, 4026593280, 0, 14, 0, 4292919296, -1, 2, 158, 0, 939588608, -1, 0, 805306368, -1, 2, 124, 0, 1610612736, 2, 156, 2, 157, 2, 4, 2, 0, -2, 2, 158, 2, 159, -3, 0, 267386880, -1, 2, 160, 0, 7168, -1, 0, 65024, 2, 154, 2, 161, 2, 179, -7, 2, 168, -8, 2, 162, -1, 0, 1426112704, 2, 163, -1, 2, 164, 0, 271581216, 0, 2149777408, 2, 23, 2, 161, 2, 124, 0, 851967, 2, 180, -1, 2, 23, 2, 181, -4, 2, 158, -20, 2, 195, 2, 165, -56, 0, 3145728, 2, 185, -4, 2, 166, 2, 124, -4, 0, 32505856, -1, 2, 167, -1, 0, 2147385088, 2, 90, 1, 2155905152, 2, -3, 2, 103, 2, 0, 2, 168, -2, 2, 169, -6, 2, 170, 0, 4026597375, 0, 1, -1, 0, 1, -1, 2, 171, -3, 2, 117, 2, 64, -2, 2, 166, -2, 2, 176, 2, 124, -878, 2, 159, -36, 2, 172, -1, 2, 201, -10, 2, 188, -5, 2, 174, -6, 0, 4294965251, 2, 27, -1, 2, 173, -1, 2, 174, -2, 0, 4227874752, -3, 0, 2146435072, 2, 159, -2, 0, 1006649344, 2, 124, -1, 2, 90, 0, 201375744, -3, 0, 134217720, 2, 90, 0, 4286677377, 0, 32896, -1, 2, 158, -3, 2, 175, -349, 2, 176, 0, 1920, 2, 177, 3, 0, 264, -11, 2, 157, -2, 2, 178, 2, 0, 0, 520617856, 0, 2692743168, 0, 36, -3, 0, 524284, -11, 2, 23, -1, 2, 187, -1, 2, 184, 0, 3221291007, 2, 178, -1, 2, 202, 0, 2158720, -3, 2, 159, 0, 1, -4, 2, 124, 0, 3808625411, 0, 3489628288, 2, 200, 0, 1207959680, 0, 3221274624, 2, 0, -3, 2, 179, 0, 120, 0, 7340032, -2, 2, 180, 2, 4, 2, 23, 2, 163, 3, 0, 4, 2, 159, -1, 2, 181, 2, 177, -1, 0, 8176, 2, 182, 2, 179, 2, 183, -1, 0, 4290773232, 2, 0, -4, 2, 163, 2, 189, 0, 15728640, 2, 177, -1, 2, 161, -1, 0, 4294934512, 3, 0, 4, -9, 2, 90, 2, 170, 2, 184, 3, 0, 4, 0, 704, 0, 1849688064, 2, 185, -1, 2, 124, 0, 4294901887, 2, 0, 0, 130547712, 0, 1879048192, 2, 199, 3, 0, 2, -1, 2, 186, 2, 187, -1, 0, 17829776, 0, 2025848832, 0, 4261477888, -2, 2, 0, -1, 0, 4286580608, -1, 0, 29360128, 2, 192, 0, 16252928, 0, 3791388672, 2, 38, 3, 0, 2, -2, 2, 196, 2, 0, -1, 2, 103, -1, 0, 66584576, -1, 2, 191, 3, 0, 9, 2, 124, -1, 0, 4294755328, 3, 0, 2, -1, 2, 161, 2, 178, 3, 0, 2, 2, 23, 2, 188, 2, 90, -2, 0, 245760, 0, 2147418112, -1, 2, 150, 2, 203, 0, 4227923456, -1, 2, 164, 2, 161, 2, 90, -3, 0, 4292870145, 0, 262144, 2, 124, 3, 0, 2, 0, 1073758848, 2, 189, -1, 0, 4227921920, 2, 190, 0, 68289024, 0, 528402016, 0, 4292927536, 3, 0, 4, -2, 0, 268435456, 2, 91, -2, 2, 191, 3, 0, 5, -1, 2, 192, 2, 163, 2, 0, -2, 0, 4227923936, 2, 62, -1, 2, 155, 2, 95, 2, 0, 2, 154, 2, 158, 3, 0, 6, -1, 2, 177, 3, 0, 3, -2, 0, 2146959360, 0, 9440640, 0, 104857600, 0, 4227923840, 3, 0, 2, 0, 768, 2, 193, 2, 77, -2, 2, 161, -2, 2, 119, -1, 2, 155, 3, 0, 8, 0, 512, 0, 8388608, 2, 194, 2, 172, 2, 187, 0, 4286578944, 3, 0, 2, 0, 1152, 0, 1266679808, 2, 191, 0, 576, 0, 4261707776, 2, 95, 3, 0, 9, 2, 155, 3, 0, 5, 2, 16, -1, 0, 2147221504, -28, 2, 178, 3, 0, 3, -3, 0, 4292902912, -6, 2, 96, 3, 0, 85, -33, 0, 4294934528, 3, 0, 126, -18, 2, 195, 3, 0, 269, -17, 2, 155, 2, 124, 2, 198, 3, 0, 2, 2, 23, 0, 4290822144, -2, 0, 67174336, 0, 520093700, 2, 17, 3, 0, 21, -2, 2, 179, 3, 0, 3, -2, 0, 30720, -1, 0, 32512, 3, 0, 2, 0, 4294770656, -191, 2, 174, -38, 2, 170, 2, 0, 2, 196, 3, 0, 279, -8, 2, 124, 2, 0, 0, 4294508543, 0, 65295, -11, 2, 177, 3, 0, 72, -3, 0, 3758159872, 0, 201391616, 3, 0, 155, -7, 2, 170, -1, 0, 384, -1, 0, 133693440, -3, 2, 196, -2, 2, 26, 3, 0, 4, 2, 169, -2, 2, 90, 2, 155, 3, 0, 4, -2, 2, 164, -1, 2, 150, 0, 335552923, 2, 197, -1, 0, 538974272, 0, 2214592512, 0, 132000, -10, 0, 192, -8, 0, 12288, -21, 0, 134213632, 0, 4294901761, 3, 0, 42, 0, 100663424, 0, 4294965284, 3, 0, 6, -1, 0, 3221282816, 2, 198, 3, 0, 11, -1, 2, 199, 3, 0, 40, -6, 0, 4286578784, 2, 0, -2, 0, 1006694400, 3, 0, 24, 2, 35, -1, 2, 94, 3, 0, 2, 0, 1, 2, 163, 3, 0, 6, 2, 197, 0, 4110942569, 0, 1432950139, 0, 2701658217, 0, 4026532864, 0, 4026532881, 2, 0, 2, 45, 3, 0, 8, -1, 2, 158, -2, 2, 169, 0, 98304, 0, 65537, 2, 170, -5, 0, 4294950912, 2, 0, 2, 118, 0, 65528, 2, 177, 0, 4294770176, 2, 26, 3, 0, 4, -30, 2, 174, 0, 3758153728, -3, 2, 169, -2, 2, 155, 2, 188, 2, 158, -1, 2, 191, -1, 2, 161, 0, 4294754304, 3, 0, 2, -3, 0, 33554432, -2, 2, 200, -3, 2, 169, 0, 4175478784, 2, 201, 0, 4286643712, 0, 4286644216, 2, 0, -4, 2, 202, -1, 2, 165, 0, 4227923967, 3, 0, 32, -1334, 2, 163, 2, 0, -129, 2, 94, -6, 2, 163, -180, 2, 203, -233, 2, 4, 3, 0, 96, -16, 2, 163, 3, 0, 47, -154, 2, 165, 3, 0, 22381, -7, 2, 17, 3, 0, 6128], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 268435455, 2147483647, 1048575, 1073741823, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4160749567, 4294901759, 4294901760, 536870911, 262143, 8388607, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967232, 2097151, 4294903807, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 127, 4292870143, 4294902271, 4294549487, 33554431, 1023, 67047423, 4294901888, 4286578687, 4294770687, 67043583, 32767, 15, 2047999, 67043343, 16777215, 4294902000, 4294934527, 4294966783, 4294967279, 2047, 262083, 20511, 4290772991, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 4294967264, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 2044, 4292870144, 4294966272, 4294967280, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4294966591, 2445279231, 3670015, 3238002687, 31, 63, 4294967288, 4294705151, 4095, 3221208447, 4294549472, 2147483648, 4285526655, 4294966527, 4294705152, 4294966143, 64, 4294966719, 16383, 3774873592, 458752, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4087, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901763, 536870912, 2952790016, 202506752, 139264, 402653184, 4261412864, 4227922944, 49152, 61440, 3758096384, 117440512, 65280, 3233808384, 3221225472, 2097152, 4294965248, 32768, 57152, 67108864, 4293918720, 4290772992, 25165824, 57344, 4227915776, 4278190080, 4227907584, 65520, 4026531840, 4227858432, 4160749568, 3758129152, 4294836224, 63488, 1073741824, 4294967040, 4194304, 251658240, 196608, 4294963200, 64512, 417808, 4227923712, 12582912, 50331648, 65472, 4294967168, 4294966784, 16, 4294917120, 2080374784, 4096, 65408, 524288, 65532]);

  const TokenLookup = [
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      125,
      133,
      125,
      125,
      127,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      126,
      125,
      16842797,
      134283267,
      128,
      208897,
      8457012,
      8455748,
      134283267,
      67174411,
      16,
      8457011,
      25233967,
      1073741842,
      25233968,
      67108877,
      8457013,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      21,
      1074790417,
      8456255,
      1077936157,
      8456256,
      22,
      130,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      69271571,
      134,
      20,
      8455494,
      208897,
      129,
      4096,
      4096,
      4096,
      4096,
      4096,
      4096,
      4096,
      208897,
      4096,
      208897,
      208897,
      4096,
      208897,
      4096,
      208897,
      4096,
      208897,
      4096,
      4096,
      4096,
      208897,
      4096,
      4096,
      208897,
      4096,
      4096,
      2162700,
      8455237,
      1074790415,
      16842798,
      126
  ];
  function nextToken(parser, context) {
      parser.flags = (parser.flags | 1) ^ 1;
      parser.startPos = parser.index;
      parser.startColumn = parser.column;
      parser.startLine = parser.line;
      parser.token = scanSingleToken(parser, context, 0);
      if (parser.onToken && parser.token !== 1048576)
          parser.onToken(convertTokenType(parser.token), parser.startPos, parser.index);
  }
  function scanSingleToken(parser, context, state) {
      const isStartOfLine = parser.index === 0;
      const source = parser.source;
      while (parser.index < parser.end) {
          parser.tokenPos = parser.index;
          parser.colPos = parser.column;
          parser.linePos = parser.line;
          let char = parser.currentChar;
          if (char <= 0x7e) {
              const token = TokenLookup[char];
              switch (token) {
                  case 67174411:
                  case 16:
                  case 2162700:
                  case 1074790415:
                  case 69271571:
                  case 20:
                  case 21:
                  case 1074790417:
                  case 1073741842:
                  case 16842798:
                  case 130:
                  case 126:
                      advanceChar(parser);
                      return token;
                  case 8456255:
                      let ch = advanceChar(parser);
                      if (parser.index < parser.end) {
                          if (ch === 60) {
                              if (parser.index < parser.end && advanceChar(parser) === 61) {
                                  advanceChar(parser);
                                  return 4194334;
                              }
                              return 8456513;
                          }
                          else if (ch === 61) {
                              advanceChar(parser);
                              return 8455997;
                          }
                          if (ch === 33) {
                              const index = parser.index + 1;
                              if (index + 1 < parser.end &&
                                  source.charCodeAt(index) === 45 &&
                                  source.charCodeAt(index + 1) == 45) {
                                  parser.column += 3;
                                  parser.currentChar = source.charCodeAt((parser.index += 3));
                                  state = skipSingleHTMLComment(parser, source, state, context, 2);
                                  continue;
                              }
                              return 8456255;
                          }
                          if (ch === 47) {
                              if ((context & 16) < 1)
                                  return 8456255;
                              const index = parser.index + 1;
                              if (index < parser.end) {
                                  ch = source.charCodeAt(index);
                                  if (ch === 42 || ch === 47)
                                      break;
                              }
                              advanceChar(parser);
                              return 25;
                          }
                      }
                      return 8456255;
                  case 1077936157: {
                      advanceChar(parser);
                      if (parser.index >= parser.end)
                          return 1077936157;
                      const ch = parser.currentChar;
                      if (ch === 61) {
                          if (advanceChar(parser) === 61) {
                              advanceChar(parser);
                              return 8455993;
                          }
                          return 8455995;
                      }
                      if (ch === 62) {
                          advanceChar(parser);
                          return 10;
                      }
                      return 1077936157;
                  }
                  case 16842797:
                      if (advanceChar(parser) !== 61) {
                          return 16842797;
                      }
                      if (advanceChar(parser) !== 61) {
                          return 8455996;
                      }
                      advanceChar(parser);
                      return 8455994;
                  case 8457012:
                      if (advanceChar(parser) !== 61)
                          return 8457012;
                      advanceChar(parser);
                      return 4194342;
                  case 8457011: {
                      advanceChar(parser);
                      if (parser.index >= parser.end)
                          return 8457011;
                      const ch = parser.currentChar;
                      if (ch === 61) {
                          advanceChar(parser);
                          return 4194340;
                      }
                      if (ch !== 42)
                          return 8457011;
                      if (advanceChar(parser) !== 61)
                          return 8457270;
                      advanceChar(parser);
                      return 4194337;
                  }
                  case 8455494:
                      if (advanceChar(parser) !== 61)
                          return 8455494;
                      advanceChar(parser);
                      return 4194343;
                  case 25233967: {
                      advanceChar(parser);
                      const ch = parser.currentChar;
                      if (ch === 43) {
                          advanceChar(parser);
                          return 33619995;
                      }
                      if (ch === 61) {
                          advanceChar(parser);
                          return 4194338;
                      }
                      return 25233967;
                  }
                  case 25233968: {
                      advanceChar(parser);
                      if (parser.index >= parser.end)
                          return 25233968;
                      const ch = parser.currentChar;
                      if (ch === 45) {
                          advanceChar(parser);
                          if ((state & 1 || isStartOfLine) && parser.currentChar === 62) {
                              if ((context & 256) === 0)
                                  report(parser, 108);
                              advanceChar(parser);
                              state = skipSingleHTMLComment(parser, source, state, context, 3);
                              continue;
                          }
                          return 33619996;
                      }
                      if (ch === 61) {
                          advanceChar(parser);
                          return 4194339;
                      }
                      return 25233968;
                  }
                  case 8457013: {
                      advanceChar(parser);
                      if (parser.index < parser.end) {
                          const ch = parser.currentChar;
                          if (ch === 47) {
                              advanceChar(parser);
                              state = skipSingleLineComment(parser, source, state, 0);
                              continue;
                          }
                          if (ch === 42) {
                              advanceChar(parser);
                              state = skipMultiLineComment(parser, source, state);
                              continue;
                          }
                          if (context & 32768) {
                              return scanRegularExpression(parser, context);
                          }
                          if (ch === 61) {
                              advanceChar(parser);
                              return 4259877;
                          }
                      }
                      return 8457013;
                  }
                  case 8455237: {
                      advanceChar(parser);
                      if (parser.index >= parser.end)
                          return 8455237;
                      const ch = parser.currentChar;
                      if (ch === 124) {
                          advanceChar(parser);
                          return 8979000;
                      }
                      if (ch === 61) {
                          advanceChar(parser);
                          return 4194344;
                      }
                      return 8455237;
                  }
                  case 8456256: {
                      advanceChar(parser);
                      if (parser.index >= parser.end)
                          return 8456256;
                      const ch = parser.currentChar;
                      if (ch === 61) {
                          advanceChar(parser);
                          return 8455998;
                      }
                      if (ch !== 62)
                          return 8456256;
                      advanceChar(parser);
                      if (parser.index < parser.end) {
                          const ch = parser.currentChar;
                          if (ch === 62) {
                              if (advanceChar(parser) === 61) {
                                  advanceChar(parser);
                                  return 4194336;
                              }
                              return 8456515;
                          }
                          if (ch === 61) {
                              advanceChar(parser);
                              return 4194335;
                          }
                      }
                      return 8456514;
                  }
                  case 8455748: {
                      advanceChar(parser);
                      if (parser.index >= parser.end)
                          return 8455748;
                      const ch = parser.currentChar;
                      if (ch === 38) {
                          advanceChar(parser);
                          return 8979255;
                      }
                      if (ch === 61) {
                          advanceChar(parser);
                          return 4194345;
                      }
                      return 8455748;
                  }
                  case 67108877:
                      const next = advanceChar(parser);
                      if (next >= 48 && next <= 57)
                          return scanNumber(parser, context, 64 | 16);
                      if (next === 46) {
                          const index = parser.index + 1;
                          if (index < parser.end && source.charCodeAt(index) === 46) {
                              parser.column += 2;
                              parser.currentChar = source.charCodeAt((parser.index += 2));
                              return 14;
                          }
                      }
                      return 67108877;
                  case 22: {
                      let ch = advanceChar(parser);
                      if ((context & 1) < 1)
                          return 22;
                      if (ch === 63) {
                          advanceChar(parser);
                          return 276889979;
                      }
                      if (ch === 46) {
                          const index = parser.index + 1;
                          if (index < parser.end) {
                              ch = source.charCodeAt(index);
                              if (!(ch >= 48 && ch <= 57)) {
                                  advanceChar(parser);
                                  return 67108988;
                              }
                          }
                      }
                      return 22;
                  }
                  case 4096:
                      return scanIdentifier(parser, context, 1);
                  case 208897:
                      return scanIdentifier(parser, context, 0);
                  case 134283266:
                      return scanNumber(parser, context, 16 | 128);
                  case 134283267:
                      return scanString(parser, context, char);
                  case 129:
                      return scanTemplate(parser, context);
                  case 134:
                      return scanUnicodeIdentifier(parser, context);
                  case 128:
                      return scanPrivateName(parser);
                  case 125:
                      advanceChar(parser);
                      break;
                  case 127:
                      state |= 1 | 4;
                      scanNewLine(parser);
                      break;
                  case 133:
                      consumeLineFeed(parser, state);
                      state = (state & ~4) | 1;
                      break;
              }
          }
          else {
              if ((char ^ 8232) <= 1) {
                  state = (state & ~4) | 1;
                  scanNewLine(parser);
                  continue;
              }
              if ((char & 0xfc00) === 0xd800 || ((unicodeLookup[(char >>> 5) + 34816] >>> char) & 31 & 1) !== 0) {
                  if ((char & 0xfc00) === 0xdc00) {
                      char = ((char & 0x3ff) << 10) | (char & 0x3ff) | 0x10000;
                      if (((unicodeLookup[(char >>> 5) + 0] >>> char) & 31 & 1) === 0) {
                          report(parser, 18, fromCodePoint(char));
                      }
                      parser.index++;
                      parser.currentChar = char;
                  }
                  parser.column++;
                  parser.tokenValue = '';
                  return scanIdentifierSlowCase(parser, context, 0, 0);
              }
              if (isExoticECMAScriptWhitespace(char)) {
                  advanceChar(parser);
                  continue;
              }
              report(parser, 18, fromCodePoint(char));
          }
      }
      return 1048576;
  }

  const CommentTypes = ['SingleLine', 'MultiLine', 'HTMLOpen', 'HTMLClose', 'HashbangComment'];
  function skipHashBang(parser) {
      const source = parser.source;
      if (parser.currentChar === 35 && source.charCodeAt(parser.index + 1) === 33) {
          skipSingleLineComment(parser, source, 0, 4);
      }
  }
  function skipSingleHTMLComment(parser, source, state, context, type) {
      if (context & 2048)
          report(parser, 0);
      return skipSingleLineComment(parser, source, state, type);
  }
  function skipSingleLineComment(parser, source, state, type) {
      const { index } = parser;
      while (parser.index < parser.end) {
          if (CharTypes[parser.currentChar] & 8) {
              const isCR = parser.currentChar === 13;
              scanNewLine(parser);
              if (isCR && parser.index < parser.end && parser.currentChar === 10)
                  parser.currentChar = source.charCodeAt(++parser.index);
              break;
          }
          else if ((parser.currentChar ^ 8232) <= 1) {
              scanNewLine(parser);
              break;
          }
          advanceChar(parser);
      }
      if (parser.onComment)
          parser.onComment(CommentTypes[type & 0xff], source.slice(index, parser.index), index, parser.index);
      return state | 1;
  }
  function skipMultiLineComment(parser, source, state) {
      const { index } = parser;
      while (parser.index < parser.end) {
          if (parser.currentChar < 0x2b) {
              let skippedOneAsterisk = false;
              while (parser.currentChar === 42) {
                  if (!skippedOneAsterisk) {
                      state &= ~4;
                      skippedOneAsterisk = true;
                  }
                  if (advanceChar(parser) === 47) {
                      advanceChar(parser);
                      if (parser.onComment)
                          parser.onComment(CommentTypes[1 & 0xff], source.slice(index, parser.index - 2), index, parser.index);
                      return state;
                  }
              }
              if (skippedOneAsterisk) {
                  continue;
              }
              if (CharTypes[parser.currentChar] & 8) {
                  if (parser.currentChar === 13) {
                      state |= 1 | 4;
                      scanNewLine(parser);
                  }
                  else {
                      consumeLineFeed(parser, state);
                      state = (state & ~4) | 1;
                  }
              }
              else {
                  advanceChar(parser);
              }
          }
          else if ((parser.currentChar ^ 8232) <= 1) {
              state = (state & ~4) | 1;
              scanNewLine(parser);
          }
          else {
              state &= ~4;
              advanceChar(parser);
          }
      }
      report(parser, 16);
  }

  function advanceChar(parser) {
      parser.column++;
      return (parser.currentChar = parser.source.charCodeAt(++parser.index));
  }
  function consumeMultiUnitCodePoint(parser, hi) {
      if ((hi & 0xfc00) !== 55296)
          return 0;
      const lo = parser.source.charCodeAt(parser.index + 1);
      if ((lo & 0xfc00) !== 0xdc00)
          return 0;
      hi = parser.currentChar = 65536 + ((hi & 0x3ff) << 10) + (lo & 0x3ff);
      if (((unicodeLookup[(hi >>> 5) + 0] >>> hi) & 31 & 1) === 0) {
          report(parser, 18, fromCodePoint(hi));
      }
      parser.index++;
      parser.column++;
      return 1;
  }
  function consumeLineFeed(parser, state) {
      parser.currentChar = parser.source.charCodeAt(++parser.index);
      parser.flags |= 1;
      if ((state & 4) === 0) {
          parser.column = 0;
          parser.line++;
      }
  }
  function scanNewLine(parser) {
      parser.flags |= 1;
      parser.currentChar = parser.source.charCodeAt(++parser.index);
      parser.column = 0;
      parser.line++;
  }
  function isExoticECMAScriptWhitespace(ch) {
      return (ch === 160 ||
          ch === 65279 ||
          ch === 133 ||
          ch === 5760 ||
          (ch >= 8192 && ch <= 8203) ||
          ch === 8239 ||
          ch === 8287 ||
          ch === 12288 ||
          ch === 8201 ||
          ch === 65519);
  }
  function fromCodePoint(codePoint) {
      return codePoint <= 65535
          ? String.fromCharCode(codePoint)
          : String.fromCharCode(codePoint >>> 10) + String.fromCharCode(codePoint & 0x3ff);
  }
  function toHex(code) {
      return code < 65 ? code - 48 : (code - 65 + 10) & 0xf;
  }
  function convertTokenType(t) {
      switch (t) {
          case 134283266:
              return 'NumericLiteral';
          case 134283267:
              return 'StringLiteral';
          case 86021:
          case 86022:
              return 'BooleanLiteral';
          case 86023:
              return 'NullLiteral';
          case 65540:
              return 'RegularExpression';
          case 67174408:
          case 67174409:
          case 129:
              return 'TemplateLiteral';
          default:
              if ((t & 143360) === 143360)
                  return 'Identifier';
              if ((t & 4096) === 4096)
                  return 'Keyword';
              return 'Punctuator';
      }
  }

  const CharTypes = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      8 | 1024,
      0,
      0,
      8 | 2048,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      8192,
      0,
      1 | 2,
      0,
      0,
      8192,
      0,
      0,
      0,
      256,
      0,
      256 | 32768,
      0,
      0,
      2 | 16 | 128 | 32 | 64,
      2 | 16 | 128 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 512 | 64,
      2 | 16 | 512 | 64,
      0,
      0,
      16384,
      0,
      0,
      0,
      0,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      0,
      1,
      0,
      0,
      1 | 2 | 4096,
      0,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      16384,
      0,
      0,
      0,
      0
  ];
  const isIdStart = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0
  ];
  const isIdPart = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0
  ];
  function isIdentifierStart(code) {
      return code <= 0x7F
          ? isIdStart[code]
          : (unicodeLookup[(code >>> 5) + 34816] >>> code) & 31 & 1;
  }
  function isIdentifierPart(code) {
      return code <= 0x7F
          ? isIdPart[code]
          : (unicodeLookup[(code >>> 5) + 0] >>> code) & 31 & 1 || (code === 8204 || code === 8205);
  }

  const KeywordDescTable = [
      'end of source',
      'identifier', 'number', 'string', 'regular expression',
      'false', 'true', 'null',
      'template continuation', 'template tail',
      '=>', '(', '{', '.', '...', '}', ')', ';', ',', '[', ']', ':', '?', '\'', '"', '</', '/>',
      '++', '--',
      '=', '<<=', '>>=', '>>>=', '**=', '+=', '-=', '*=', '/=', '%=', '^=', '|=',
      '&=',
      'typeof', 'delete', 'void', '!', '~', '+', '-', 'in', 'instanceof', '*', '%', '/', '**', '&&',
      '||', '===', '!==', '==', '!=', '<=', '>=', '<', '>', '<<', '>>', '>>>', '&', '|', '^',
      'var', 'let', 'const',
      'break', 'case', 'catch', 'class', 'continue', 'debugger', 'default', 'do', 'else', 'export',
      'extends', 'finally', 'for', 'function', 'if', 'import', 'new', 'return', 'super', 'switch',
      'this', 'throw', 'try', 'while', 'with',
      'implements', 'interface', 'package', 'private', 'protected', 'public', 'static', 'yield',
      'as', 'async', 'await', 'constructor', 'get', 'set', 'from', 'of',
      'enum', 'eval', 'arguments', 'escaped keyword', 'escaped future reserved keyword', 'reserved if strict', '#',
      'BigIntLiteral', '??', '?.', 'WhiteSpace', 'Illegal', 'LineTerminator', 'PrivateField',
      'Template', '@', 'target', 'meta', 'LineFeed', 'Escaped', 'JSXText'
  ];
  const descKeywordTable = Object.create(null, {
      this: { value: 86110 },
      function: { value: 86103 },
      if: { value: 20568 },
      return: { value: 20571 },
      var: { value: 86087 },
      else: { value: 20562 },
      for: { value: 20566 },
      new: { value: 86106 },
      in: { value: 8738865 },
      typeof: { value: 16863274 },
      while: { value: 20577 },
      case: { value: 20555 },
      break: { value: 20554 },
      try: { value: 20576 },
      catch: { value: 20556 },
      delete: { value: 16863275 },
      throw: { value: 86111 },
      switch: { value: 86109 },
      continue: { value: 20558 },
      default: { value: 20560 },
      instanceof: { value: 8476722 },
      do: { value: 20561 },
      void: { value: 16863276 },
      finally: { value: 20565 },
      async: { value: 143468 },
      await: { value: 209005 },
      class: { value: 86093 },
      const: { value: 86089 },
      constructor: { value: 12398 },
      debugger: { value: 20559 },
      export: { value: 20563 },
      extends: { value: 20564 },
      false: { value: 86021 },
      from: { value: 12401 },
      get: { value: 12399 },
      implements: { value: 36963 },
      import: { value: 86105 },
      interface: { value: 36964 },
      let: { value: 241736 },
      null: { value: 86023 },
      of: { value: 274546 },
      package: { value: 36965 },
      private: { value: 36966 },
      protected: { value: 36967 },
      public: { value: 36968 },
      set: { value: 12400 },
      static: { value: 36969 },
      super: { value: 86108 },
      true: { value: 86022 },
      with: { value: 20578 },
      yield: { value: 241770 },
      enum: { value: 20595 },
      eval: { value: 537079924 },
      as: { value: 12395 },
      arguments: { value: 537079925 },
      target: { value: 143491 },
      meta: { value: 143492 },
  });

  function scanIdentifier(parser, context, isValidAsKeyword) {
      while (isIdPart[advanceChar(parser)]) { }
      parser.tokenValue = parser.source.slice(parser.tokenPos, parser.index);
      return parser.currentChar !== 92 && parser.currentChar < 0x7e
          ? descKeywordTable[parser.tokenValue] || 208897
          : scanIdentifierSlowCase(parser, context, 0, isValidAsKeyword);
  }
  function scanUnicodeIdentifier(parser, context) {
      const cookedChar = scanIdentifierUnicodeEscape(parser);
      if (!isIdentifierPart(cookedChar))
          report(parser, 4);
      parser.tokenValue = fromCodePoint(cookedChar);
      return scanIdentifierSlowCase(parser, context, 1, CharTypes[cookedChar] & 4);
  }
  function scanIdentifierSlowCase(parser, context, hasEscape, isValidAsKeyword) {
      let start = parser.index;
      while (parser.index < parser.end) {
          if (parser.currentChar === 92) {
              parser.tokenValue += parser.source.slice(start, parser.index);
              hasEscape = 1;
              const code = scanIdentifierUnicodeEscape(parser);
              if (!isIdentifierPart(code))
                  report(parser, 4);
              isValidAsKeyword = isValidAsKeyword && CharTypes[code] & 4;
              parser.tokenValue += fromCodePoint(code);
              start = parser.index;
          }
          else if (isIdentifierPart(parser.currentChar) || consumeMultiUnitCodePoint(parser, parser.currentChar)) {
              advanceChar(parser);
          }
          else {
              break;
          }
      }
      if (parser.index <= parser.end) {
          parser.tokenValue += parser.source.slice(start, parser.index);
      }
      const length = parser.tokenValue.length;
      if (isValidAsKeyword && (length >= 2 && length <= 11)) {
          const token = descKeywordTable[parser.tokenValue];
          if (token === void 0)
              return 208897;
          if (!hasEscape)
              return token;
          if (context & 1024) {
              return token === 209005 && (context & (2048 | 4194304)) === 0
                  ? token
                  : token === 36969
                      ? 119
                      : (token & 36864) === 36864
                          ? 119
                          : 118;
          }
          if (context & 1073741824 &&
              (context & 8192) === 0 &&
              (token & 20480) === 20480)
              return token;
          if (token === 241770) {
              return context & 1073741824
                  ? 143480
                  : context & 2097152
                      ? 118
                      : token;
          }
          return token === 143468 && context & 1073741824
              ? 143480
              : (token & 36864) === 36864
                  ? token
                  : token === 209005 && (context & 4194304) === 0
                      ? token
                      : 118;
      }
      return 208897;
  }
  function scanPrivateName(parser) {
      if (!isIdentifierStart(advanceChar(parser)))
          report(parser, 93);
      return 128;
  }
  function scanIdentifierUnicodeEscape(parser) {
      if (parser.source.charCodeAt(parser.index + 1) !== 117) {
          report(parser, 4);
      }
      parser.currentChar = parser.source.charCodeAt((parser.index += 2));
      return scanUnicodeEscape(parser);
  }
  function scanUnicodeEscape(parser) {
      let codePoint = 0;
      const char = parser.currentChar;
      if (char === 123) {
          const begin = parser.index - 2;
          while (CharTypes[advanceChar(parser)] & 64) {
              codePoint = (codePoint << 4) | toHex(parser.currentChar);
              if (codePoint > 1114111)
                  reportScannerError(begin, parser.line, parser.index + 1, 101);
          }
          if (parser.currentChar !== 125) {
              reportScannerError(begin, parser.line, parser.index - 1, 6);
          }
          advanceChar(parser);
          return codePoint;
      }
      if ((CharTypes[char] & 64) === 0)
          report(parser, 6);
      const char2 = parser.source.charCodeAt(parser.index + 1);
      if ((CharTypes[char2] & 64) === 0)
          report(parser, 6);
      const char3 = parser.source.charCodeAt(parser.index + 2);
      if ((CharTypes[char3] & 64) === 0)
          report(parser, 6);
      const char4 = parser.source.charCodeAt(parser.index + 3);
      if ((CharTypes[char4] & 64) === 0)
          report(parser, 6);
      codePoint = (toHex(char) << 12) | (toHex(char2) << 8) | (toHex(char3) << 4) | toHex(char4);
      parser.currentChar = parser.source.charCodeAt((parser.index += 4));
      return codePoint;
  }

  function scanString(parser, context, quote) {
      const { index: start } = parser;
      let ret = '';
      let char = advanceChar(parser);
      let marker = parser.index;
      while ((CharTypes[char] & 8) === 0) {
          if (char === quote) {
              ret += parser.source.slice(marker, parser.index);
              advanceChar(parser);
              if (context & 512)
                  parser.tokenRaw = parser.source.slice(start, parser.index);
              parser.tokenValue = ret;
              return 134283267;
          }
          if ((char & 8) === 8 && char === 92) {
              ret += parser.source.slice(marker, parser.index);
              char = advanceChar(parser);
              if (char > 0x7e) {
                  ret += fromCodePoint(char);
              }
              else {
                  const code = parseEscape(parser, context, char);
                  if (code >= 0)
                      ret += fromCodePoint(code);
                  else
                      handleStringError(parser, code, 0);
              }
              marker = parser.index + 1;
          }
          if (parser.index >= parser.end)
              report(parser, 14);
          char = advanceChar(parser);
      }
      report(parser, 14);
  }
  function parseEscape(parser, context, first) {
      switch (first) {
          case 98:
              return 8;
          case 102:
              return 12;
          case 114:
              return 13;
          case 110:
              return 10;
          case 116:
              return 9;
          case 118:
              return 11;
          case 13: {
              if (parser.index < parser.end) {
                  if (parser.currentChar === 10) {
                      parser.index = parser.index + 1;
                      parser.currentChar = parser.source.charCodeAt(parser.index);
                  }
              }
          }
          case 10:
          case 8232:
          case 8233:
              parser.column = -1;
              parser.line++;
              return -1;
          case 48:
          case 49:
          case 50:
          case 51: {
              let code = first - 48;
              let index = parser.index + 1;
              let column = parser.column + 1;
              if (index < parser.end) {
                  const next = parser.source.charCodeAt(index);
                  if ((CharTypes[next] & 32) === 0) {
                      if ((code !== 0 || CharTypes[next] & 512) && context & 1024)
                          return -2;
                  }
                  else if (context & 1024) {
                      return -2;
                  }
                  else {
                      parser.currentChar = next;
                      code = (code << 3) | (next - 48);
                      index++;
                      column++;
                      if (index < parser.end) {
                          const next = parser.source.charCodeAt(index);
                          if (CharTypes[next] & 32) {
                              parser.currentChar = next;
                              code = (code << 3) | (next - 48);
                              index++;
                              column++;
                          }
                      }
                      parser.flags |= 64;
                      parser.index = index - 1;
                      parser.column = column - 1;
                  }
              }
              return code;
          }
          case 52:
          case 53:
          case 54:
          case 55: {
              if (context & 1024)
                  return -2;
              let code = first - 48;
              const index = parser.index + 1;
              const column = parser.column + 1;
              if (index < parser.end) {
                  const next = parser.source.charCodeAt(index);
                  if (CharTypes[next] & 32) {
                      code = (code << 3) | (next - 48);
                      parser.currentChar = next;
                      parser.index = index;
                      parser.column = column;
                  }
              }
              parser.flags |= 64;
              return code;
          }
          case 56:
          case 57:
              return -3;
          case 120: {
              const ch1 = advanceChar(parser);
              if ((CharTypes[ch1] & 64) === 0)
                  return -4;
              const hi = toHex(ch1);
              const ch2 = advanceChar(parser);
              if ((CharTypes[ch2] & 64) === 0)
                  return -4;
              const lo = toHex(ch2);
              return (hi << 4) | lo;
          }
          case 117: {
              const ch = advanceChar(parser);
              if (parser.currentChar === 123) {
                  let code = 0;
                  while ((CharTypes[advanceChar(parser)] & 64) !== 0) {
                      code = (code << 4) | toHex(parser.currentChar);
                      if (code > 1114111)
                          return -5;
                  }
                  if (parser.currentChar < 1 || parser.currentChar !== 125) {
                      return -4;
                  }
                  return code;
              }
              else {
                  if ((CharTypes[ch] & 64) === 0)
                      return -4;
                  const ch2 = parser.source.charCodeAt(parser.index + 1);
                  if ((CharTypes[ch2] & 64) === 0)
                      return -4;
                  const ch3 = parser.source.charCodeAt(parser.index + 2);
                  if ((CharTypes[ch3] & 64) === 0)
                      return -4;
                  const ch4 = parser.source.charCodeAt(parser.index + 3);
                  if ((CharTypes[ch4] & 64) === 0)
                      return -4;
                  parser.index += 3;
                  parser.column += 3;
                  parser.currentChar = parser.source.charCodeAt(parser.index);
                  return (toHex(ch) << 12) | (toHex(ch2) << 8) | (toHex(ch3) << 4) | toHex(ch4);
              }
          }
          default:
              return first;
      }
  }
  function handleStringError(state, code, isTemplate) {
      switch (code) {
          case -1:
              return;
          case -2:
              report(state, isTemplate ? 2 : 1);
          case -3:
              report(state, 13);
          case -4:
              report(state, 6);
          case -5:
              report(state, 101);
      }
  }

  function scanNumber(parser, context, kind) {
      let char = parser.currentChar;
      let value = 0;
      let digit = 9;
      let atStart = kind & 64 ? 0 : 1;
      let digits = 0;
      let allowSeparator = 0;
      if (kind & 64) {
          value = '.' + scanDecimalDigitsOrSeparator(parser, char);
          char = parser.currentChar;
          if (char === 110)
              report(parser, 11);
      }
      else {
          if (char === 48) {
              char = advanceChar(parser);
              if ((char | 32) === 120) {
                  kind = 8 | 128;
                  char = advanceChar(parser);
                  while (CharTypes[char] & (64 | 4096)) {
                      if (char === 95) {
                          if (!allowSeparator)
                              report(parser, 146);
                          allowSeparator = 0;
                          char = advanceChar(parser);
                          continue;
                      }
                      allowSeparator = 1;
                      value = value * 0x10 + toHex(char);
                      digits++;
                      char = advanceChar(parser);
                  }
                  if (digits < 1 || !allowSeparator) {
                      report(parser, digits < 1 ? 19 : 147);
                  }
              }
              else if ((char | 32) === 111) {
                  kind = 4 | 128;
                  char = advanceChar(parser);
                  while (CharTypes[char] & (32 | 4096)) {
                      if (char === 95) {
                          if (!allowSeparator) {
                              report(parser, 146);
                          }
                          allowSeparator = 0;
                          char = advanceChar(parser);
                          continue;
                      }
                      allowSeparator = 1;
                      value = value * 8 + (char - 48);
                      digits++;
                      char = advanceChar(parser);
                  }
                  if (digits < 1 || !allowSeparator) {
                      report(parser, digits < 1 ? 0 : 147);
                  }
              }
              else if ((char | 32) === 98) {
                  kind = 2 | 128;
                  char = advanceChar(parser);
                  while (CharTypes[char] & (128 | 4096)) {
                      if (char === 95) {
                          if (!allowSeparator) {
                              report(parser, 146);
                          }
                          allowSeparator = 0;
                          char = advanceChar(parser);
                          continue;
                      }
                      allowSeparator = 1;
                      value = value * 2 + (char - 48);
                      digits++;
                      char = advanceChar(parser);
                  }
                  if (digits < 1 || !allowSeparator) {
                      report(parser, digits < 1 ? 0 : 147);
                  }
              }
              else if (CharTypes[char] & 32) {
                  if (context & 1024)
                      report(parser, 1);
                  kind = 1;
                  while (CharTypes[char] & 16) {
                      if (CharTypes[char] & 512) {
                          kind = 32;
                          atStart = 0;
                          break;
                      }
                      value = value * 8 + (char - 48);
                      char = advanceChar(parser);
                  }
              }
              else if (CharTypes[char] & 512) {
                  if (context & 1024)
                      report(parser, 1);
                  parser.flags |= 64;
                  kind = 32;
              }
              else if (char === 95) {
                  report(parser, 0);
              }
          }
          if (kind & 48) {
              if (atStart) {
                  while (digit >= 0 && CharTypes[char] & (16 | 4096)) {
                      if (char === 95) {
                          char = advanceChar(parser);
                          if (char === 95 || kind & 32) {
                              reportScannerError(parser.index, parser.line, parser.index + 1, 146);
                          }
                          allowSeparator = 1;
                          continue;
                      }
                      allowSeparator = 0;
                      value = 10 * value + (char - 48);
                      char = advanceChar(parser);
                      --digit;
                  }
                  if (allowSeparator) {
                      reportScannerError(parser.index, parser.line, parser.index + 1, 147);
                  }
                  if (digit >= 0 && !isIdentifierStart(char) && char !== 46) {
                      parser.tokenValue = value;
                      if (context & 512)
                          parser.tokenRaw = parser.source.slice(parser.tokenPos, parser.index);
                      return 134283266;
                  }
              }
              value += scanDecimalDigitsOrSeparator(parser, char);
              char = parser.currentChar;
              if (char === 46) {
                  if (advanceChar(parser) === 95)
                      report(parser, 0);
                  kind = 64;
                  value += '.' + scanDecimalDigitsOrSeparator(parser, parser.currentChar);
                  char = parser.currentChar;
              }
          }
      }
      const end = parser.index;
      let isBigInt = 0;
      if (char === 110 && kind & 128) {
          isBigInt = 1;
          char = advanceChar(parser);
      }
      else {
          if ((char | 32) === 101) {
              char = advanceChar(parser);
              if (CharTypes[char] & 256)
                  char = advanceChar(parser);
              const { index } = parser;
              if ((CharTypes[char] & 16) < 1)
                  report(parser, 10);
              value += parser.source.substring(end, index) + scanDecimalDigitsOrSeparator(parser, char);
              char = parser.currentChar;
          }
      }
      if ((parser.index < parser.end && CharTypes[char] & 16) || isIdentifierStart(char)) {
          report(parser, 12);
      }
      if (isBigInt) {
          parser.tokenRaw = parser.source.slice(parser.tokenPos, parser.index);
          parser.tokenValue = parseInt(value, 0xa);
          return 122;
      }
      parser.tokenValue =
          kind & (1 | 2 | 8 | 4)
              ? value
              : kind & 32
                  ? parseFloat(parser.source.substring(parser.tokenPos, parser.index))
                  : +value;
      if (context & 512)
          parser.tokenRaw = parser.source.slice(parser.tokenPos, parser.index);
      return 134283266;
  }
  function scanDecimalDigitsOrSeparator(parser, char) {
      let allowSeparator = 0;
      let start = parser.index;
      let ret = '';
      while (CharTypes[char] & (16 | 4096)) {
          if (char === 95) {
              const { index } = parser;
              char = advanceChar(parser);
              if (char === 95) {
                  reportScannerError(parser.index, parser.line, parser.index + 1, 146);
              }
              allowSeparator = 1;
              ret += parser.source.substring(start, index);
              start = parser.index;
              continue;
          }
          allowSeparator = 0;
          char = advanceChar(parser);
      }
      if (allowSeparator) {
          reportScannerError(parser.index, parser.line, parser.index + 1, 147);
      }
      return ret + parser.source.substring(start, parser.index);
  }

  function scanTemplate(parser, context) {
      const { index: start } = parser;
      let token = 67174409;
      let ret = '';
      let char = advanceChar(parser);
      while (char !== 96) {
          if (char === 36 && parser.source.charCodeAt(parser.index + 1) === 123) {
              advanceChar(parser);
              token = 67174408;
              break;
          }
          else if ((char & 8) === 8 && char === 92) {
              char = advanceChar(parser);
              if (char > 0x7e) {
                  ret += fromCodePoint(char);
              }
              else {
                  const code = parseEscape(parser, context | 1024, char);
                  if (code >= 0) {
                      ret += fromCodePoint(code);
                  }
                  else if (code !== -1 && context & 65536) {
                      ret = undefined;
                      char = scanBadTemplate(parser, char);
                      if (char < 0)
                          token = 67174408;
                      break;
                  }
                  else {
                      handleStringError(parser, code, 1);
                  }
              }
          }
          else {
              if (parser.index < parser.end &&
                  char === 13 &&
                  parser.source.charCodeAt(parser.index) === 10) {
                  ret += fromCodePoint(char);
                  parser.currentChar = parser.source.charCodeAt(++parser.index);
              }
              if (((char & 83) < 3 && char === 10) || (char ^ 8232) <= 1) {
                  parser.column = -1;
                  parser.line++;
              }
              ret += fromCodePoint(char);
          }
          if (parser.index >= parser.end)
              report(parser, 15);
          char = advanceChar(parser);
      }
      advanceChar(parser);
      parser.tokenValue = ret;
      parser.tokenRaw = parser.source.slice(start + 1, parser.index - (token === 67174409 ? 1 : 2));
      return token;
  }
  function scanBadTemplate(parser, ch) {
      while (ch !== 96) {
          switch (ch) {
              case 36: {
                  const index = parser.index + 1;
                  if (index < parser.end && parser.source.charCodeAt(index) === 123) {
                      parser.index = index;
                      parser.column++;
                      return -ch;
                  }
                  break;
              }
              case 10:
              case 8232:
              case 8233:
                  parser.column = -1;
                  parser.line++;
          }
          if (parser.index >= parser.end)
              report(parser, 15);
          ch = advanceChar(parser);
      }
      return ch;
  }
  function scanTemplateTail(parser, context) {
      if (parser.index >= parser.end)
          report(parser, 0);
      parser.index--;
      parser.column--;
      return scanTemplate(parser, context);
  }

  function scanRegularExpression(parser, context) {
      const bodyStart = parser.index;
      let preparseState = 0;
      loop: while (true) {
          const ch = parser.currentChar;
          advanceChar(parser);
          if (preparseState & 1) {
              preparseState &= ~1;
          }
          else {
              switch (ch) {
                  case 47:
                      if (!preparseState)
                          break loop;
                      else
                          break;
                  case 92:
                      preparseState |= 1;
                      break;
                  case 91:
                      preparseState |= 2;
                      break;
                  case 93:
                      preparseState &= 1;
                      break;
                  case 13:
                  case 10:
                  case 8232:
                  case 8233:
                      report(parser, 32);
              }
          }
          if (parser.index >= parser.source.length) {
              return report(parser, 32);
          }
      }
      const bodyEnd = parser.index - 1;
      let mask = 0;
      let char = parser.currentChar;
      const { index: flagStart } = parser;
      while (isIdentifierPart(char)) {
          switch (char) {
              case 103:
                  if (mask & 2)
                      report(parser, 34, 'g');
                  mask |= 2;
                  break;
              case 105:
                  if (mask & 1)
                      report(parser, 34, 'i');
                  mask |= 1;
                  break;
              case 109:
                  if (mask & 4)
                      report(parser, 34, 'm');
                  mask |= 4;
                  break;
              case 117:
                  if (mask & 16)
                      report(parser, 34, 'g');
                  mask |= 16;
                  break;
              case 121:
                  if (mask & 8)
                      report(parser, 34, 'y');
                  mask |= 8;
                  break;
              case 115:
                  if (mask & 12)
                      report(parser, 34, 's');
                  mask |= 12;
                  break;
              default:
                  report(parser, 33);
          }
          char = advanceChar(parser);
      }
      const flags = parser.source.slice(flagStart, parser.index);
      const pattern = parser.source.slice(bodyStart, bodyEnd);
      parser.tokenRegExp = { pattern, flags };
      if (context & 512)
          parser.tokenRaw = parser.source.slice(parser.tokenPos, parser.index);
      parser.tokenValue = validate(parser, pattern, flags);
      return 65540;
  }
  function validate(parser, pattern, flags) {
      try {
          RegExp(pattern);
      }
      catch (e) {
          report(parser, 32);
      }
      try {
          return new RegExp(pattern, flags);
      }
      catch (e) {
          return null;
      }
  }

  function scanJSXAttributeValue(parser, context) {
      parser.startPos = parser.index;
      parser.startColumn = parser.column;
      parser.startLine = parser.line;
      parser.token =
          CharTypes[parser.currentChar] & 8192
              ? scanJSXString(parser)
              : scanSingleToken(parser, context, 0);
      return parser.token;
  }
  function scanJSXString(parser) {
      const quote = parser.currentChar;
      let char = advanceChar(parser);
      const start = parser.index;
      while (char !== quote) {
          if (parser.index >= parser.end)
              report(parser, 14);
          char = advanceChar(parser);
      }
      if (char !== quote)
          report(parser, 14);
      parser.tokenValue = parser.source.slice(start, parser.index);
      advanceChar(parser);
      return 134283267;
  }
  function scanJSXToken(parser) {
      parser.startPos = parser.tokenPos = parser.index;
      parser.startColumn = parser.colPos = parser.column;
      parser.startLine = parser.linePos = parser.line;
      if (parser.index >= parser.end)
          return (parser.token = 1048576);
      const token = TokenLookup[parser.source.charCodeAt(parser.index)];
      switch (token) {
          case 8456255: {
              advanceChar(parser);
              if (parser.currentChar === 47) {
                  advanceChar(parser);
                  parser.token = 25;
              }
              else {
                  parser.token = 8456255;
              }
              break;
          }
          case 2162700: {
              advanceChar(parser);
              parser.token = 2162700;
              break;
          }
          default:
              while (parser.index < parser.end && (CharTypes[advanceChar(parser)] & 16384) === 0) { }
              parser.tokenValue = parser.source.slice(parser.tokenPos, parser.index);
              parser.token = 135;
      }
      return parser.token;
  }
  function scanJSXIdentifier(parser) {
      if ((parser.token & 143360) === 143360) {
          const { index } = parser;
          let char = parser.currentChar;
          while (CharTypes[char] & (32768 | 2)) {
              char = advanceChar(parser);
          }
          parser.tokenValue += parser.source.slice(index, parser.index);
      }
      parser.token = 208897;
      return parser.token;
  }

  function matchOrInsertSemicolon(parser, context, specDeviation) {
      if ((parser.flags & 1) === 0 &&
          (parser.token & 1048576) !== 1048576 &&
          !specDeviation) {
          report(parser, 28, KeywordDescTable[parser.token & 255]);
      }
      consumeOpt(parser, context, 1074790417);
  }
  function isValidStrictMode(parser, index, tokenPos, tokenValue) {
      if (index - tokenPos < 13 && tokenValue === 'use strict') {
          if ((parser.token & 1048576) === 1048576 || parser.flags & 1) {
              return 1;
          }
      }
      return 0;
  }
  function optionalBit(parser, context, t) {
      if (parser.token !== t)
          return 0;
      nextToken(parser, context);
      return 1;
  }
  function consumeOpt(parser, context, t) {
      if (parser.token !== t)
          return false;
      nextToken(parser, context);
      return true;
  }
  function consume(parser, context, t) {
      if (parser.token !== t)
          report(parser, 23, KeywordDescTable[t & 255]);
      nextToken(parser, context);
  }
  function reinterpretToPattern(state, node) {
      switch (node.type) {
          case 'ArrayExpression':
              node.type = 'ArrayPattern';
              const elements = node.elements;
              for (let i = 0, n = elements.length; i < n; ++i) {
                  const element = elements[i];
                  if (element)
                      reinterpretToPattern(state, element);
              }
              return;
          case 'ObjectExpression':
              node.type = 'ObjectPattern';
              const properties = node.properties;
              for (let i = 0, n = properties.length; i < n; ++i) {
                  reinterpretToPattern(state, properties[i]);
              }
              return;
          case 'AssignmentExpression':
              node.type = 'AssignmentPattern';
              if (node.operator !== '=')
                  report(state, 68);
              delete node.operator;
              reinterpretToPattern(state, node.left);
              return;
          case 'Property':
              reinterpretToPattern(state, node.value);
              return;
          case 'SpreadElement':
              node.type = 'RestElement';
              reinterpretToPattern(state, node.argument);
      }
  }
  function validateBindingIdentifier(parser, context, kind, t, skipEvalArgCheck) {
      if (context & 1024) {
          if ((t & 36864) === 36864) {
              report(parser, 114);
          }
          if (!skipEvalArgCheck && (t & 537079808) === 537079808) {
              report(parser, 115);
          }
      }
      if ((t & 20480) === 20480) {
          report(parser, 99);
      }
      if (kind & (8 | 16) && t === 241736) {
          report(parser, 97);
      }
      if (context & (4194304 | 2048) && t === 209005) {
          report(parser, 95);
      }
      if (context & (2097152 | 1024) && t === 241770) {
          report(parser, 94, 'yield');
      }
  }
  function validateFunctionName(parser, context, t) {
      if (context & 1024) {
          if ((t & 36864) === 36864) {
              report(parser, 114);
          }
          if ((t & 537079808) === 537079808) {
              report(parser, 115);
          }
          if (t === 119) {
              report(parser, 92);
          }
          if (t === 118) {
              report(parser, 92);
          }
      }
      if ((t & 20480) === 20480) {
          report(parser, 99);
      }
      if (context & (4194304 | 2048) && t === 209005) {
          report(parser, 95);
      }
      if (context & (2097152 | 1024) && t === 241770) {
          report(parser, 94, 'yield');
      }
  }
  function isStrictReservedWord(parser, context, t) {
      if (t === 209005) {
          if (context & (4194304 | 2048))
              report(parser, 95);
          parser.destructible |= 128;
      }
      if (t === 241770 && context & 2097152)
          report(parser, 94, 'yield');
      return ((t & 20480) === 20480 ||
          (t & 36864) === 36864 ||
          t == 119);
  }
  function isPropertyWithPrivateFieldKey(expr) {
      return !expr.property ? false : expr.property.type === 'PrivateName';
  }
  function isValidLabel(parser, labels, name, isIterationStatement) {
      while (labels) {
          if (labels['$' + name]) {
              if (isIterationStatement)
                  report(parser, 133);
              return 1;
          }
          if (isIterationStatement && labels.loop)
              isIterationStatement = 0;
          labels = labels['$'];
      }
      return 0;
  }
  function validateAndDeclareLabel(parser, labels, name) {
      let set = labels;
      while (set) {
          if (set['$' + name])
              report(parser, 132, name);
          set = set['$'];
      }
      labels['$' + name] = 1;
  }
  function finishNode(parser, context, start, line, column, node) {
      if (context & 2) {
          node.start = start;
          node.end = parser.startPos;
      }
      if (context & 4) {
          node.loc = {
              start: {
                  line,
                  column
              },
              end: {
                  line: parser.startLine,
                  column: parser.startColumn
              }
          };
          if (parser.sourceFile) {
              node.loc.source = parser.sourceFile;
          }
      }
      return node;
  }
  function isEqualTagName(elementName) {
      switch (elementName.type) {
          case 'JSXIdentifier':
              return elementName.name;
          case 'JSXNamespacedName':
              return elementName.namespace + ':' + elementName.name;
          case 'JSXMemberExpression':
              return isEqualTagName(elementName.object) + '.' + isEqualTagName(elementName.property);
      }
  }
  function createArrowHeadParsingScope(parser, context, value) {
      const scope = addChildScope(createScope(), 1024);
      addBlockName(parser, context, scope, value, 1, 0);
      return scope;
  }
  function recordScopeError(parser, type, ...params) {
      const { index, line, column } = parser;
      return {
          type,
          params,
          index,
          line,
          column
      };
  }
  function createScope() {
      return {
          parent: void 0,
          type: 2
      };
  }
  function addChildScope(parent, type) {
      return {
          parent,
          type,
          scopeError: void 0
      };
  }
  function addVarOrBlock(parser, context, scope, name, kind, origin) {
      if (kind & 4) {
          addVarName(parser, context, scope, name, kind);
      }
      else {
          addBlockName(parser, context, scope, name, kind, origin);
      }
      if (origin & 64) {
          declareUnboundVariable(parser, name);
      }
  }
  function addBlockName(parser, context, scope, name, kind, origin) {
      const value = scope['#' + name];
      if (value && (value & 2) === 0) {
          if (kind & 1) {
              scope.scopeError = recordScopeError(parser, 140, name);
          }
          else if (context & 256 &&
              value & 64 &&
              origin & 2) ;
          else {
              report(parser, 140, name);
          }
      }
      if (scope.type & 128 &&
          (scope.parent['#' + name] && (scope.parent['#' + name] & 2) === 0)) {
          report(parser, 140, name);
      }
      if (scope.type & 1024 && value && (value & 2) === 0) {
          if (kind & 1) {
              scope.scopeError = recordScopeError(parser, 140, name);
          }
      }
      if (scope.type & 64) {
          if (scope.parent['#' + name] & 768)
              report(parser, 153, name);
      }
      scope['#' + name] = kind;
  }
  function addVarName(parser, context, scope, name, kind) {
      let currentScope = scope;
      while (currentScope && (currentScope.type & 256) === 0) {
          const value = currentScope['#' + name];
          if (value & 248) {
              if (context & 256 &&
                  (context & 1024) === 0 &&
                  ((kind & 128 && value & 68) ||
                      (value & 128 && kind & 68))) ;
              else {
                  report(parser, 140, name);
              }
          }
          if (currentScope === scope) {
              if (value & 1 && kind & 1) {
                  currentScope.scopeError = recordScopeError(parser, 140, name);
              }
          }
          if (value & (512 | 256)) {
              if ((value & 512) === 0 ||
                  (context & 256) === 0 ||
                  context & 1024) {
                  report(parser, 140, name);
              }
          }
          currentScope['#' + name] = kind;
          currentScope = currentScope.parent;
      }
  }
  function declareUnboundVariable(parser, name) {
      if (parser.exportedNames !== void 0 && name !== '') {
          if (parser.exportedNames['#' + name]) {
              report(parser, 141, name);
          }
          parser.exportedNames['#' + name] = 1;
      }
  }
  function addBindingToExports(parser, name) {
      if (parser.exportedBindings !== void 0 && name !== '') {
          parser.exportedBindings['#' + name] = 1;
      }
  }
  function pushComment(context, array) {
      return function (type, value, start, end) {
          const comment = {
              type,
              value
          };
          if (context & 2) {
              comment.start = start;
              comment.end = end;
          }
          array.push(comment);
      };
  }
  function pushToken(context, array) {
      return function (token, start, end) {
          const tokens = {
              token
          };
          if (context & 4) {
              tokens.start = start;
              tokens.end = end;
          }
          array.push(tokens);
      };
  }
  function isValidIdentifier(context, t) {
      if (context & (1024 | 2097152)) {
          if (context & 2048 && t === 209005)
              return false;
          if (context & 2097152 && t === 241770)
              return false;
          return (t & 143360) === 143360 || (t & 12288) === 12288;
      }
      return ((t & 143360) === 143360 ||
          (t & 12288) === 12288 ||
          (t & 36864) === 36864);
  }
  function classifyIdentifier(parser, context, t, isArrow) {
      if ((t & 537079808) === 537079808) {
          if (context & 1024)
              report(parser, 115);
          if (isArrow)
              parser.flags |= 512;
      }
      if (!isValidIdentifier(context, t))
          report(parser, 0);
  }

  function create(source, sourceFile, onComment, onToken) {
      return {
          source,
          flags: 0,
          index: 0,
          line: 1,
          column: 0,
          startPos: 0,
          end: source.length,
          tokenPos: 0,
          startColumn: 0,
          colPos: 0,
          linePos: 0,
          startLine: 1,
          sourceFile,
          tokenValue: '',
          token: 1048576,
          tokenRaw: '',
          tokenRegExp: void 0,
          currentChar: source.charCodeAt(0),
          exportedNames: [],
          exportedBindings: [],
          assignable: 1,
          destructible: 0,
          onComment,
          onToken
      };
  }
  function parseSource(source, options, context) {
      let sourceFile = '';
      let onComment;
      let onToken;
      if (options != null) {
          if (options.module)
              context |= 2048 | 1024;
          if (options.next)
              context |= 1;
          if (options.loc)
              context |= 4;
          if (options.ranges)
              context |= 2;
          if (options.uniqueKeyInPattern)
              context |= -2147483648;
          if (options.lexical)
              context |= 64;
          if (options.webcompat)
              context |= 256;
          if (options.directives)
              context |= 8 | 512;
          if (options.globalReturn)
              context |= 32;
          if (options.raw)
              context |= 512;
          if (options.preserveParens)
              context |= 128;
          if (options.impliedStrict)
              context |= 1024;
          if (options.jsx)
              context |= 16;
          if (options.identifierPattern)
              context |= 268435456;
          if (options.specDeviation)
              context |= 536870912;
          if (options.source)
              sourceFile = options.source;
          if (options.onComment != null) {
              onComment = Array.isArray(options.onComment) ? pushComment(context, options.onComment) : options.onComment;
          }
          if (options.onToken != null) {
              onToken = Array.isArray(options.onToken) ? pushToken(context, options.onToken) : options.onToken;
          }
      }
      const parser = create(source, sourceFile, onComment, onToken);
      if (context & 1)
          skipHashBang(parser);
      const scope = context & 64 ? createScope() : void 0;
      let body = [];
      let sourceType = 'script';
      if (context & 2048) {
          sourceType = 'module';
          body = parseModuleItemList(parser, context | 8192, scope);
          if (scope) {
              for (const key in parser.exportedBindings) {
                  if (key[0] === '#' && !scope[key])
                      report(parser, 142, key.slice(1));
              }
          }
      }
      else {
          body = parseStatementList(parser, context | 8192, scope);
      }
      const node = {
          type: 'Program',
          sourceType,
          body
      };
      if (context & 2) {
          node.start = 0;
          node.end = source.length;
      }
      if (context & 4) {
          node.loc = {
              start: { line: 1, column: 0 },
              end: { line: parser.line, column: parser.column }
          };
          if (parser.sourceFile)
              node.loc.source = sourceFile;
      }
      return node;
  }
  function parseStatementList(parser, context, scope) {
      nextToken(parser, context | 32768 | 1073741824);
      const statements = [];
      while (parser.token === 134283267) {
          const { index, tokenPos, tokenValue, linePos, colPos, token } = parser;
          const expr = parseLiteral(parser, context);
          if (isValidStrictMode(parser, index, tokenPos, tokenValue))
              context |= 1024;
          statements.push(parseDirective(parser, context, expr, token, tokenPos, linePos, colPos));
      }
      while (parser.token !== 1048576) {
          statements.push(parseStatementListItem(parser, context, scope, 4, {}, parser.tokenPos, parser.linePos, parser.colPos));
      }
      return statements;
  }
  function parseModuleItemList(parser, context, scope) {
      nextToken(parser, context | 32768);
      const statements = [];
      if (context & 8) {
          while (parser.token === 134283267) {
              const { tokenPos, linePos, colPos, token } = parser;
              statements.push(parseDirective(parser, context, parseLiteral(parser, context), token, tokenPos, linePos, colPos));
          }
      }
      while (parser.token !== 1048576) {
          statements.push(parseModuleItem(parser, context, scope, parser.tokenPos, parser.linePos, parser.colPos));
      }
      return statements;
  }
  function parseModuleItem(parser, context, scope, start, line, column) {
      switch (parser.token) {
          case 20563:
              return parseExportDeclaration(parser, context, scope, start, line, column);
          case 86105:
              return parseImportDeclaration(parser, context, scope, start, line, column);
          case 130:
              return parseDecorators(parser, context);
          default:
              return parseStatementListItem(parser, context, scope, 4, {}, start, line, column);
      }
  }
  function parseStatementListItem(parser, context, scope, origin, labels, start, line, column) {
      switch (parser.token) {
          case 86103:
              return parseFunctionDeclaration(parser, context, scope, origin, 1, 0, 0, start, line, column);
          case 130:
          case 86093:
              return parseClassDeclaration(parser, context, scope, 0, start, line, column);
          case 86089:
              return parseLexicalDeclaration(parser, context, scope, 16, 0, start, line, column);
          case 241736:
              return parseLetIdentOrVarDeclarationStatement(parser, context, scope, origin, start, line, column);
          case 20563:
              report(parser, 100, 'export');
          case 86105:
              nextToken(parser, context);
              switch (parser.token) {
                  case 67174411:
                      return parseImportCallDeclaration(parser, context, start, line, column);
                  case 67108877:
                      return parseImportMetaDeclaration(parser, context, start, line, column);
                  default:
                      report(parser, 100, 'import');
              }
          case 143468:
              return parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, origin, labels, 1, start, line, column);
          default:
              return parseStatement(parser, context, scope, origin, labels, 1, start, line, column);
      }
  }
  function parseStatement(parser, context, scope, origin, labels, allowFuncDecl, start, line, column) {
      switch (parser.token) {
          case 86087:
              return parseVariableStatement(parser, context, scope, 0, start, line, column);
          case 20571:
              return parseReturnStatement(parser, context, start, line, column);
          case 20568:
              return parseIfStatement(parser, context, scope, labels, start, line, column);
          case 20566:
              return parseForStatement(parser, context, scope, labels, start, line, column);
          case 20561:
              return parseDoWhileStatement(parser, context, scope, labels, start, line, column);
          case 20577:
              return parseWhileStatement(parser, context, scope, labels, start, line, column);
          case 86109:
              return parseSwitchStatement(parser, context, scope, labels, start, line, column);
          case 1074790417:
              return parseEmptyStatement(parser, context, start, line, column);
          case 2162700:
              return parseBlock(parser, context, scope ? addChildScope(scope, 2) : scope, labels, start, line, column);
          case 86111:
              return parseThrowStatement(parser, context, start, line, column);
          case 20554:
              return parseBreakStatement(parser, context, labels, start, line, column);
          case 20558:
              return parseContinueStatement(parser, context, labels, start, line, column);
          case 20576:
              return parseTryStatement(parser, context, scope, labels, start, line, column);
          case 20578:
              return parseWithStatement(parser, context, scope, labels, start, line, column);
          case 20559:
              return parseDebuggerStatement(parser, context, start, line, column);
          case 143468:
              return parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, origin, labels, 0, start, line, column);
          case 20556:
              report(parser, 156);
          case 20565:
              report(parser, 157);
          case 86103:
              report(parser, context & 1024
                  ? 73
                  : (context & 256) < 1
                      ? 75
                      : 74);
          case 86093:
              report(parser, 76);
          default:
              return parseExpressionOrLabelledStatement(parser, context, scope, origin, labels, allowFuncDecl, start, line, column);
      }
  }
  function parseExpressionOrLabelledStatement(parser, context, scope, origin, labels, allowFuncDecl, start, line, column) {
      const { tokenValue, token } = parser;
      let expr;
      switch (token) {
          case 241736:
              expr = parseIdentifier(parser, context, 0);
              if (context & 1024)
                  report(parser, 82);
              if (parser.token === 69271571)
                  report(parser, 81);
              break;
          default:
              expr = parsePrimaryExpression(parser, context, 2, 0, 1, 0, 0, 1, parser.tokenPos, parser.linePos, parser.colPos);
      }
      if (token & 143360 && parser.token === 21) {
          return parseLabelledStatement(parser, context, scope, origin, labels, tokenValue, expr, token, allowFuncDecl, start, line, column);
      }
      expr = parseMemberOrUpdateExpression(parser, context, expr, 0, start, line, column);
      expr = parseAssignmentExpression(parser, context, 0, 0, start, line, column, expr);
      if (parser.token === 1073741842) {
          expr = parseSequenceExpression(parser, context, 0, start, line, column, expr);
      }
      return parseExpressionStatement(parser, context, expr, start, line, column);
  }
  function parseBlock(parser, context, scope, labels, start, line, column) {
      const body = [];
      consume(parser, context | 32768, 2162700);
      while (parser.token !== 1074790415) {
          body.push(parseStatementListItem(parser, context, scope, 2, { $: labels }, parser.tokenPos, parser.linePos, parser.colPos));
      }
      consume(parser, context | 32768, 1074790415);
      return finishNode(parser, context, start, line, column, {
          type: 'BlockStatement',
          body
      });
  }
  function parseReturnStatement(parser, context, start, line, column) {
      if ((context & 32) < 1 && context & 8192)
          report(parser, 89);
      nextToken(parser, context | 32768);
      const argument = parser.flags & 1 || parser.token & 1048576
          ? null
          : parseExpressions(parser, context, 0, 1, parser.tokenPos, parser.line, parser.column);
      matchOrInsertSemicolon(parser, context | 32768);
      return finishNode(parser, context, start, line, column, {
          type: 'ReturnStatement',
          argument
      });
  }
  function parseExpressionStatement(parser, context, expression, start, line, column) {
      matchOrInsertSemicolon(parser, context | 32768);
      return finishNode(parser, context, start, line, column, {
          type: 'ExpressionStatement',
          expression
      });
  }
  function parseLabelledStatement(parser, context, scope, origin, labels, value, expr, token, allowFuncDecl, start, line, column) {
      validateBindingIdentifier(parser, context, 0, token, 1);
      validateAndDeclareLabel(parser, labels, value);
      nextToken(parser, context | 32768);
      const body = allowFuncDecl &&
          (context & 1024) < 1 &&
          context & 256 &&
          parser.token === 86103
          ? parseFunctionDeclaration(parser, context, addChildScope(scope, 2), origin, 0, 0, 0, parser.tokenPos, parser.linePos, parser.colPos)
          : parseStatement(parser, context, scope, origin, labels, allowFuncDecl, parser.tokenPos, parser.linePos, parser.colPos);
      return finishNode(parser, context, start, line, column, {
          type: 'LabeledStatement',
          label: expr,
          body
      });
  }
  function parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, origin, labels, allowFuncDecl, start, line, column) {
      const { token, tokenValue } = parser;
      let expr = parseIdentifier(parser, context, 0);
      if (parser.token === 21) {
          return parseLabelledStatement(parser, context, scope, origin, labels, tokenValue, expr, token, 1, start, line, column);
      }
      const asyncNewLine = parser.flags & 1;
      if (!asyncNewLine) {
          if (parser.token === 86103) {
              if (!allowFuncDecl)
                  report(parser, 119);
              return parseFunctionDeclaration(parser, context, scope, origin, 1, 0, 1, start, line, column);
          }
          if ((parser.token & 143360) === 143360) {
              expr = parseAsyncArrowAfterIdent(parser, context, 1, start, line, column);
              if (parser.token === 1073741842)
                  expr = parseSequenceExpression(parser, context, 0, start, line, column, expr);
              return parseExpressionStatement(parser, context, expr, start, line, column);
          }
      }
      if (parser.token === 67174411) {
          expr = parseAsyncArrowOrCallExpression(parser, context, expr, 1, 1, 0, asyncNewLine, start, line, column);
      }
      else {
          if (parser.token === 10) {
              classifyIdentifier(parser, context, token, 1);
              expr = parseArrowFromIdentifier(parser, context, parser.tokenValue, expr, 0, 1, 0, start, line, column);
          }
          parser.assignable = 1;
      }
      expr = parseMemberOrUpdateExpression(parser, context, expr, 0, start, line, column);
      if (parser.token === 1073741842)
          expr = parseSequenceExpression(parser, context, 0, start, line, column, expr);
      expr = parseAssignmentExpression(parser, context, 0, 0, start, line, column, expr);
      parser.assignable = 1;
      return parseExpressionStatement(parser, context, expr, start, line, column);
  }
  function parseDirective(parser, context, expression, token, start, line, column) {
      const { tokenRaw } = parser;
      if (token !== 1074790417) {
          parser.assignable = 2;
          expression = parseMemberOrUpdateExpression(parser, context, expression, 0, start, line, column);
          if (parser.token !== 1074790417) {
              expression = parseAssignmentExpression(parser, context, 0, 0, start, line, column, expression);
              if (parser.token === 1073741842) {
                  expression = parseSequenceExpression(parser, context, 0, start, line, column, expression);
              }
          }
          matchOrInsertSemicolon(parser, context | 32768);
      }
      return context & 8
          ? finishNode(parser, context, start, line, column, {
              type: 'ExpressionStatement',
              expression,
              directive: tokenRaw.slice(1, -1)
          })
          : finishNode(parser, context, start, line, column, {
              type: 'ExpressionStatement',
              expression
          });
  }
  function parseEmptyStatement(parser, context, start, line, column) {
      nextToken(parser, context | 32768);
      return finishNode(parser, context, start, line, column, {
          type: 'EmptyStatement'
      });
  }
  function parseThrowStatement(parser, context, start, line, column) {
      nextToken(parser, context | 32768);
      if (parser.flags & 1)
          report(parser, 87);
      const argument = parseExpressions(parser, context, 0, 1, parser.tokenPos, parser.linePos, parser.colPos);
      matchOrInsertSemicolon(parser, context | 32768);
      return finishNode(parser, context, start, line, column, {
          type: 'ThrowStatement',
          argument
      });
  }
  function parseIfStatement(parser, context, scope, labels, start, line, column) {
      nextToken(parser, context);
      consume(parser, context | 32768, 67174411);
      parser.assignable = 1;
      const test = parseExpressions(parser, context, 0, 1, parser.tokenPos, parser.line, parser.colPos);
      consume(parser, context | 32768, 16);
      const consequent = parseConsequentOrAlternative(parser, context, scope, labels, parser.tokenPos, parser.linePos, parser.colPos);
      let alternate = null;
      if (parser.token === 20562) {
          nextToken(parser, context | 32768);
          alternate = parseConsequentOrAlternative(parser, context, scope, labels, parser.tokenPos, parser.linePos, parser.colPos);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'IfStatement',
          test,
          consequent,
          alternate
      });
  }
  function parseConsequentOrAlternative(parser, context, scope, labels, start, line, column) {
      return context & 1024 ||
          (context & 256) < 1 ||
          parser.token !== 86103
          ? parseStatement(parser, context, scope, 0, { $: labels }, 0, parser.tokenPos, parser.linePos, parser.colPos)
          : parseFunctionDeclaration(parser, context, addChildScope(scope, 2), 0, 0, 0, 0, start, line, column);
  }
  function parseSwitchStatement(parser, context, scope, labels, start, line, column) {
      nextToken(parser, context);
      consume(parser, context | 32768, 67174411);
      const discriminant = parseExpressions(parser, context, 0, 1, parser.tokenPos, parser.linePos, parser.colPos);
      consume(parser, context, 16);
      consume(parser, context, 2162700);
      const cases = [];
      let seenDefault = 0;
      if (scope)
          scope = addChildScope(scope, 8);
      while (parser.token !== 1074790415) {
          const { tokenPos, linePos, colPos } = parser;
          let test = null;
          const consequent = [];
          if (consumeOpt(parser, context | 32768, 20555)) {
              test = parseExpressions(parser, context, 0, 1, parser.tokenPos, parser.linePos, parser.colPos);
          }
          else {
              consume(parser, context | 32768, 20560);
              if (seenDefault)
                  report(parser, 86);
              seenDefault = 1;
          }
          consume(parser, context | 32768, 21);
          while (parser.token !== 20555 &&
              parser.token !== 1074790415 &&
              parser.token !== 20560) {
              consequent.push(parseStatementListItem(parser, context | 4096, scope, 2, {
                  $: labels
              }, parser.tokenPos, parser.linePos, parser.colPos));
          }
          cases.push(finishNode(parser, context, tokenPos, linePos, colPos, {
              type: 'SwitchCase',
              test,
              consequent
          }));
      }
      consume(parser, context | 32768, 1074790415);
      return finishNode(parser, context, start, line, column, {
          type: 'SwitchStatement',
          discriminant,
          cases
      });
  }
  function parseWhileStatement(parser, context, scope, labels, start, line, column) {
      nextToken(parser, context);
      consume(parser, context | 32768, 67174411);
      const test = parseExpressions(parser, context, 0, 1, parser.tokenPos, parser.linePos, parser.colPos);
      consume(parser, context | 32768, 16);
      const body = parseIterationStatementBody(parser, context, scope, labels);
      return finishNode(parser, context, start, line, column, {
          type: 'WhileStatement',
          test,
          body
      });
  }
  function parseIterationStatementBody(parser, context, scope, labels) {
      return parseStatement(parser, ((context | 134217728) ^ 134217728) | 131072, scope, 0, { loop: 1, $: labels }, 0, parser.tokenPos, parser.linePos, parser.colPos);
  }
  function parseContinueStatement(parser, context, labels, start, line, column) {
      if ((context & 131072) < 1)
          report(parser, 65);
      nextToken(parser, context);
      let label = null;
      if ((parser.flags & 1) < 1 && parser.token & 143360) {
          const { tokenValue } = parser;
          label = parseIdentifier(parser, context | 32768, 0);
          if (!isValidLabel(parser, labels, tokenValue, 1))
              report(parser, 134, tokenValue);
      }
      matchOrInsertSemicolon(parser, context | 32768);
      return finishNode(parser, context, start, line, column, {
          type: 'ContinueStatement',
          label
      });
  }
  function parseBreakStatement(parser, context, labels, start, line, column) {
      nextToken(parser, context | 32768);
      let label = null;
      if ((parser.flags & 1) < 1 && parser.token & 143360) {
          const { tokenValue } = parser;
          label = parseIdentifier(parser, context | 32768, 0);
          if (!isValidLabel(parser, labels, tokenValue, 0))
              report(parser, 134, tokenValue);
      }
      else if ((context & (4096 | 131072)) < 1) {
          report(parser, 66);
      }
      matchOrInsertSemicolon(parser, context | 32768);
      return finishNode(parser, context, start, line, column, {
          type: 'BreakStatement',
          label
      });
  }
  function parseWithStatement(parser, context, scope, labels, start, line, column) {
      nextToken(parser, context);
      if (context & 1024)
          report(parser, 88);
      consume(parser, context | 32768, 67174411);
      const object = parseExpressions(parser, context, 0, 1, parser.tokenPos, parser.linePos, parser.colPos);
      consume(parser, context | 32768, 16);
      const body = parseStatement(parser, context, scope, 2, labels, 0, parser.tokenPos, parser.linePos, parser.colPos);
      return finishNode(parser, context, start, line, column, {
          type: 'WithStatement',
          object,
          body
      });
  }
  function parseDebuggerStatement(parser, context, start, line, column) {
      nextToken(parser, context | 32768);
      matchOrInsertSemicolon(parser, context | 32768);
      return finishNode(parser, context, start, line, column, {
          type: 'DebuggerStatement'
      });
  }
  function parseTryStatement(parser, context, scope, labels, start, line, column) {
      nextToken(parser, context | 32768);
      const firstScope = scope ? addChildScope(scope, 32) : void 0;
      const block = parseBlock(parser, context, firstScope, { $: labels }, parser.tokenPos, parser.linePos, parser.colPos);
      const { tokenPos, linePos, colPos } = parser;
      const handler = consumeOpt(parser, context | 32768, 20556)
          ? parseCatchBlock(parser, context, scope, labels, tokenPos, linePos, colPos)
          : null;
      let finalizer = null;
      if (parser.token === 20565) {
          nextToken(parser, context | 32768);
          const finalizerScope = firstScope ? addChildScope(scope, 4) : void 0;
          finalizer = parseBlock(parser, context, finalizerScope, { $: labels }, tokenPos, linePos, colPos);
      }
      if (!handler && !finalizer) {
          report(parser, 85);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'TryStatement',
          block,
          handler,
          finalizer
      });
  }
  function parseCatchBlock(parser, context, scope, labels, start, line, column) {
      let param = null;
      let additionalScope = scope;
      if (consumeOpt(parser, context, 67174411)) {
          if (scope)
              scope = addChildScope(scope, 4);
          param = parseBindingPattern(parser, context, scope, (parser.token & 2097152) === 2097152
              ? 256
              : 512, 0, parser.tokenPos, parser.linePos, parser.colPos);
          if (parser.token === 1073741842) {
              report(parser, 83);
          }
          else if (parser.token === 1077936157) {
              report(parser, 84);
          }
          consume(parser, context | 32768, 16);
          if (scope)
              additionalScope = addChildScope(scope, 64);
      }
      const body = parseBlock(parser, context, additionalScope, { $: labels }, parser.tokenPos, parser.linePos, parser.colPos);
      return finishNode(parser, context, start, line, column, {
          type: 'CatchClause',
          param,
          body
      });
  }
  function parseDoWhileStatement(parser, context, scope, labels, start, line, column) {
      nextToken(parser, context | 32768);
      const body = parseIterationStatementBody(parser, context, scope, labels);
      consume(parser, context, 20577);
      consume(parser, context | 32768, 67174411);
      const test = parseExpressions(parser, context, 0, 1, parser.tokenPos, parser.linePos, parser.colPos);
      consume(parser, context | 32768, 16);
      matchOrInsertSemicolon(parser, context | 32768, context & 536870912);
      return finishNode(parser, context, start, line, column, {
          type: 'DoWhileStatement',
          body,
          test
      });
  }
  function parseLetIdentOrVarDeclarationStatement(parser, context, scope, origin, start, line, column) {
      const { token, tokenValue } = parser;
      let expr = parseIdentifier(parser, context, 0);
      if (parser.token & (143360 | 2097152)) {
          const declarations = parseVariableDeclarationList(parser, context, scope, 8, 0);
          matchOrInsertSemicolon(parser, context | 32768);
          return finishNode(parser, context, start, line, column, {
              type: 'VariableDeclaration',
              kind: 'let',
              declarations
          });
      }
      parser.assignable = 1;
      if (context & 1024)
          report(parser, 82);
      if (parser.token === 21) {
          return parseLabelledStatement(parser, context, scope, origin, {}, tokenValue, expr, token, 0, start, line, column);
      }
      if (parser.token === 10) {
          let scope = void 0;
          if (context & 64)
              scope = createArrowHeadParsingScope(parser, context, tokenValue);
          parser.flags = (parser.flags | 128) ^ 128;
          expr = parseArrowFunctionExpression(parser, context, scope, [expr], 0, start, line, column);
      }
      else {
          expr = parseMemberOrUpdateExpression(parser, context, expr, 0, start, line, column);
          expr = parseAssignmentExpression(parser, context, 0, 0, start, line, column, expr);
      }
      if (parser.token === 1073741842) {
          expr = parseSequenceExpression(parser, context, 0, start, line, column, expr);
      }
      return parseExpressionStatement(parser, context, expr, start, line, column);
  }
  function parseLexicalDeclaration(parser, context, scope, kind, origin, start, line, column) {
      nextToken(parser, context);
      const declarations = parseVariableDeclarationList(parser, context, scope, kind, origin);
      matchOrInsertSemicolon(parser, context | 32768);
      return finishNode(parser, context, start, line, column, {
          type: 'VariableDeclaration',
          kind: kind & 8 ? 'let' : 'const',
          declarations
      });
  }
  function parseVariableStatement(parser, context, scope, origin, start, line, column) {
      nextToken(parser, context);
      const declarations = parseVariableDeclarationList(parser, context, scope, 4, origin);
      matchOrInsertSemicolon(parser, context | 32768);
      return finishNode(parser, context, start, line, column, {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations
      });
  }
  function parseVariableDeclarationList(parser, context, scope, kind, origin) {
      let bindingCount = 1;
      const list = [parseVariableDeclaration(parser, context, scope, kind, origin)];
      while (consumeOpt(parser, context, 1073741842)) {
          bindingCount++;
          list.push(parseVariableDeclaration(parser, context, scope, kind, origin));
      }
      if (bindingCount > 1 && origin & 32 && parser.token & 262144) {
          report(parser, 58, KeywordDescTable[parser.token & 255]);
      }
      return list;
  }
  function parseVariableDeclaration(parser, context, scope, kind, origin) {
      const { token, tokenPos, linePos, colPos } = parser;
      let init = null;
      const id = parseBindingPattern(parser, context, scope, kind, origin, tokenPos, linePos, colPos);
      if (parser.token === 1077936157) {
          nextToken(parser, context | 32768);
          init = parseExpression(parser, context, 1, 0, 0, parser.tokenPos, parser.linePos, parser.colPos);
          if (origin & 32 || (token & 2097152) < 1) {
              if (parser.token === 274546 ||
                  (parser.token === 8738865 &&
                      (token & 2097152 ||
                          (kind & 4) < 1 ||
                          (context & 256) < 1 ||
                          context & 1024))) {
                  reportMessageAt(tokenPos, parser.line, parser.index - 3, 57, parser.token === 274546 ? 'of' : 'in');
              }
          }
      }
      else if ((kind & 16 || (token & 2097152) > 0) &&
          (parser.token & 262144) !== 262144) {
          report(parser, 56, kind & 16 ? 'const' : 'destructuring');
      }
      return finishNode(parser, context, tokenPos, linePos, colPos, {
          type: 'VariableDeclarator',
          id,
          init
      });
  }
  function parseForStatement(parser, context, scope, labels, start, line, column) {
      nextToken(parser, context);
      const forAwait = (context & 4194304) > 0 && consumeOpt(parser, context, 209005);
      consume(parser, context | 32768, 67174411);
      if (scope)
          scope = addChildScope(scope, 1);
      let test = null;
      let update = null;
      let destructible = 0;
      let init = null;
      let isVarDecl = parser.token === 86087 || parser.token === 241736 || parser.token === 86089;
      let right;
      const { token, tokenPos, linePos, colPos } = parser;
      if (isVarDecl) {
          if (token === 241736) {
              init = parseIdentifier(parser, context, 0);
              if (parser.token & (143360 | 2097152)) {
                  if (parser.token === 8738865) {
                      if (context & 1024)
                          report(parser, 64);
                  }
                  else {
                      init = finishNode(parser, context, tokenPos, linePos, colPos, {
                          type: 'VariableDeclaration',
                          kind: 'let',
                          declarations: parseVariableDeclarationList(parser, context | 134217728, scope, 8, 32)
                      });
                  }
                  parser.assignable = 1;
              }
              else if (context & 1024) {
                  report(parser, 64);
              }
              else {
                  isVarDecl = false;
                  parser.assignable = 1;
                  init = parseMemberOrUpdateExpression(parser, context, init, 0, tokenPos, linePos, colPos);
                  if (parser.token === 274546)
                      report(parser, 111);
              }
          }
          else {
              nextToken(parser, context);
              init = finishNode(parser, context, tokenPos, linePos, colPos, token === 86087
                  ? {
                      type: 'VariableDeclaration',
                      kind: 'var',
                      declarations: parseVariableDeclarationList(parser, context | 134217728, scope, 4, 32)
                  }
                  : {
                      type: 'VariableDeclaration',
                      kind: 'const',
                      declarations: parseVariableDeclarationList(parser, context | 134217728, scope, 16, 32)
                  });
              parser.assignable = 1;
          }
      }
      else if (token === 1074790417) {
          if (forAwait)
              report(parser, 79);
      }
      else if ((token & 2097152) === 2097152) {
          init =
              token === 2162700
                  ? parseObjectLiteralOrPattern(parser, context, void 0, 1, 0, 0, 2, 32, tokenPos, linePos, colPos)
                  : parseArrayExpressionOrPattern(parser, context, void 0, 1, 0, 0, 2, 32, tokenPos, linePos, colPos);
          destructible = parser.destructible;
          if (context & 256 && destructible & 64) {
              report(parser, 60);
          }
          parser.assignable =
              destructible & 16 ? 2 : 1;
          init = parseMemberOrUpdateExpression(parser, context | 134217728, init, 0, parser.tokenPos, parser.linePos, parser.colPos);
      }
      else {
          init = parseLeftHandSideExpression(parser, context | 134217728, 1, 0, 1, tokenPos, linePos, colPos);
      }
      if ((parser.token & 262144) === 262144) {
          if (parser.token === 274546) {
              if (parser.assignable & 2)
                  report(parser, 77, forAwait ? 'await' : 'of');
              reinterpretToPattern(parser, init);
              nextToken(parser, context | 32768);
              right = parseExpression(parser, context, 1, 0, 0, parser.tokenPos, parser.linePos, parser.colPos);
              consume(parser, context | 32768, 16);
              const body = parseIterationStatementBody(parser, context, scope, labels);
              return finishNode(parser, context, start, line, column, {
                  type: 'ForOfStatement',
                  left: init,
                  right,
                  body,
                  await: forAwait
              });
          }
          if (parser.assignable & 2)
              report(parser, 77, 'in');
          reinterpretToPattern(parser, init);
          nextToken(parser, context | 32768);
          if (forAwait)
              report(parser, 79);
          right = parseExpressions(parser, context, 0, 1, parser.tokenPos, parser.linePos, parser.colPos);
          consume(parser, context | 32768, 16);
          const body = parseIterationStatementBody(parser, context, scope, labels);
          return finishNode(parser, context, start, line, column, {
              type: 'ForInStatement',
              body,
              left: init,
              right
          });
      }
      if (forAwait)
          report(parser, 79);
      if (!isVarDecl) {
          if (destructible & 8 && parser.token !== 1077936157) {
              report(parser, 77, 'loop');
          }
          init = parseAssignmentExpression(parser, context | 134217728, 0, 0, tokenPos, linePos, colPos, init);
      }
      if (parser.token === 1073741842)
          init = parseSequenceExpression(parser, context, 0, parser.tokenPos, parser.linePos, parser.colPos, init);
      consume(parser, context | 32768, 1074790417);
      if (parser.token !== 1074790417)
          test = parseExpressions(parser, context, 0, 1, parser.tokenPos, parser.linePos, parser.colPos);
      consume(parser, context | 32768, 1074790417);
      if (parser.token !== 16)
          update = parseExpressions(parser, context, 0, 1, parser.tokenPos, parser.linePos, parser.colPos);
      consume(parser, context | 32768, 16);
      const body = parseIterationStatementBody(parser, context, scope, labels);
      return finishNode(parser, context, start, line, column, {
          type: 'ForStatement',
          init,
          test,
          update,
          body
      });
  }
  function parseRestrictedIdentifier(parser, context, scope) {
      if (!isValidIdentifier(context, parser.token))
          report(parser, 114);
      if ((parser.token & 537079808) === 537079808)
          report(parser, 115);
      if (scope)
          addBlockName(parser, context, scope, parser.tokenValue, 8, 0);
      return parseIdentifier(parser, context, 0);
  }
  function parseImportDeclaration(parser, context, scope, start, line, column) {
      nextToken(parser, context);
      let source = null;
      const { tokenPos, linePos, colPos } = parser;
      let specifiers = [];
      if (parser.token === 134283267) {
          source = parseLiteral(parser, context);
      }
      else {
          if (parser.token & 143360) {
              const local = parseRestrictedIdentifier(parser, context, scope);
              specifiers = [
                  finishNode(parser, context, tokenPos, linePos, colPos, {
                      type: 'ImportDefaultSpecifier',
                      local
                  })
              ];
              if (consumeOpt(parser, context, 1073741842)) {
                  switch (parser.token) {
                      case 8457011:
                          specifiers.push(parseImportNamespaceSpecifier(parser, context, scope));
                          break;
                      case 2162700:
                          parseImportSpecifierOrNamedImports(parser, context, scope, specifiers);
                          break;
                      default:
                          report(parser, 104);
                  }
              }
          }
          else {
              switch (parser.token) {
                  case 8457011:
                      specifiers = [parseImportNamespaceSpecifier(parser, context, scope)];
                      break;
                  case 2162700:
                      parseImportSpecifierOrNamedImports(parser, context, scope, specifiers);
                      break;
                  case 67174411:
                      return parseImportCallDeclaration(parser, context, start, line, column);
                  case 67108877:
                      if (context & 1) {
                          return parseImportMetaDeclaration(parser, context, start, line, column);
                      }
                  default:
                      report(parser, 28, KeywordDescTable[parser.token & 255]);
              }
          }
          source = parseModuleSpecifier(parser, context);
      }
      matchOrInsertSemicolon(parser, context | 32768);
      return finishNode(parser, context, start, line, column, {
          type: 'ImportDeclaration',
          specifiers,
          source
      });
  }
  function parseImportNamespaceSpecifier(parser, context, scope) {
      const { tokenPos, linePos, colPos } = parser;
      nextToken(parser, context);
      consume(parser, context, 12395);
      if ((parser.token & 134217728) === 134217728) {
          reportMessageAt(tokenPos, parser.line, parser.index, 28, KeywordDescTable[parser.token & 255]);
      }
      return finishNode(parser, context, tokenPos, linePos, colPos, {
          type: 'ImportNamespaceSpecifier',
          local: parseRestrictedIdentifier(parser, context, scope)
      });
  }
  function parseModuleSpecifier(parser, context) {
      consumeOpt(parser, context, 12401);
      if (parser.token !== 134283267)
          report(parser, 102, 'Import');
      return parseLiteral(parser, context);
  }
  function parseImportSpecifierOrNamedImports(parser, context, scope, specifiers) {
      nextToken(parser, context);
      while (parser.token & 143360) {
          let { token, tokenValue, tokenPos, linePos, colPos } = parser;
          const imported = parseIdentifier(parser, context, 0);
          let local;
          if (consumeOpt(parser, context, 12395)) {
              if ((parser.token & 134217728) === 134217728 || parser.token === 1073741842) {
                  report(parser, 103);
              }
              else {
                  validateBindingIdentifier(parser, context, 16, parser.token, 0);
              }
              tokenValue = parser.tokenValue;
              local = parseIdentifier(parser, context, 0);
          }
          else {
              validateBindingIdentifier(parser, context, 16, token, 0);
              local = imported;
          }
          if (scope)
              addBlockName(parser, context, scope, tokenValue, 8, 0);
          specifiers.push(finishNode(parser, context, tokenPos, linePos, colPos, {
              type: 'ImportSpecifier',
              local,
              imported
          }));
          if (parser.token !== 1074790415)
              consume(parser, context, 1073741842);
      }
      consume(parser, context, 1074790415);
      return specifiers;
  }
  function parseImportMetaDeclaration(parser, context, start, line, column) {
      let expr = parseImportMetaExpression(parser, context, finishNode(parser, context, start, line, column, {
          type: 'Identifier',
          name: 'import'
      }), start, line, column);
      expr = parseMemberOrUpdateExpression(parser, context, expr, 0, start, line, column);
      expr = parseAssignmentExpression(parser, context, 0, 0, start, line, column, expr);
      return parseExpressionStatement(parser, context, expr, start, line, column);
  }
  function parseImportCallDeclaration(parser, context, start, line, column) {
      let expr = parseImportExpression(parser, context, 0, start, line, column);
      expr = parseMemberOrUpdateExpression(parser, context, expr, 0, start, line, column);
      return parseExpressionStatement(parser, context, expr, start, line, column);
  }
  function parseExportDeclaration(parser, context, scope, start, line, column) {
      nextToken(parser, context | 32768);
      let specifiers = [];
      let declaration = null;
      let source = null;
      let key;
      if (consumeOpt(parser, context | 32768, 20560)) {
          switch (parser.token) {
              case 86103: {
                  declaration = parseFunctionDeclaration(parser, context, scope, 4, 1, 1, 0, parser.tokenPos, parser.linePos, parser.colPos);
                  break;
              }
              case 130:
              case 86093:
                  declaration = parseClassDeclaration(parser, context, scope, 1, parser.tokenPos, parser.linePos, parser.colPos);
                  break;
              case 143468:
                  const { tokenPos, linePos, colPos } = parser;
                  declaration = parseIdentifier(parser, context, 0);
                  const { flags } = parser;
                  if ((flags & 1) < 1) {
                      if (parser.token === 86103) {
                          declaration = parseFunctionDeclaration(parser, context, scope, 4, 1, 1, 1, tokenPos, linePos, colPos);
                      }
                      else {
                          if (parser.token === 67174411) {
                              declaration = parseAsyncArrowOrCallExpression(parser, context, declaration, 1, 1, 0, flags, tokenPos, linePos, colPos);
                              declaration = parseMemberOrUpdateExpression(parser, context, declaration, 0, tokenPos, linePos, colPos);
                              declaration = parseAssignmentExpression(parser, context, 0, 0, tokenPos, linePos, colPos, declaration);
                          }
                          else if (parser.token & 143360) {
                              if (scope)
                                  scope = createArrowHeadParsingScope(parser, context, parser.tokenValue);
                              declaration = parseIdentifier(parser, context, 0);
                              declaration = parseArrowFunctionExpression(parser, context, scope, [declaration], 1, tokenPos, linePos, colPos);
                          }
                      }
                  }
                  break;
              default:
                  declaration = parseExpression(parser, context, 1, 0, 0, parser.tokenPos, parser.linePos, parser.colPos);
                  matchOrInsertSemicolon(parser, context | 32768);
          }
          if (scope)
              declareUnboundVariable(parser, 'default');
          return finishNode(parser, context, start, line, column, {
              type: 'ExportDefaultDeclaration',
              declaration
          });
      }
      switch (parser.token) {
          case 8457011: {
              nextToken(parser, context);
              const isNamedDeclaration = consumeOpt(parser, context, 12395);
              if (isNamedDeclaration) {
                  if (scope)
                      declareUnboundVariable(parser, parser.tokenValue);
                  specifiers = [
                      finishNode(parser, context, parser.tokenPos, parser.linePos, parser.colPos, {
                          type: 'ExportNamespaceSpecifier',
                          specifier: parseIdentifier(parser, context, 0)
                      })
                  ];
              }
              consume(parser, context, 12401);
              if (parser.token !== 134283267)
                  report(parser, 102, 'Export');
              source = parseLiteral(parser, context);
              matchOrInsertSemicolon(parser, context | 32768);
              return isNamedDeclaration
                  ? finishNode(parser, context, start, line, column, {
                      type: 'ExportNamedDeclaration',
                      source,
                      specifiers
                  })
                  : finishNode(parser, context, start, line, column, {
                      type: 'ExportAllDeclaration',
                      source
                  });
          }
          case 2162700: {
              nextToken(parser, context);
              const tmpExportedNames = [];
              const tmpExportedBindings = [];
              while (parser.token & 143360) {
                  const { tokenPos, tokenValue, linePos, colPos } = parser;
                  const local = parseIdentifier(parser, context, 0);
                  let exported;
                  if (parser.token === 12395) {
                      nextToken(parser, context);
                      if ((parser.token & 134217728) === 134217728) {
                          report(parser, 103);
                      }
                      if (scope) {
                          tmpExportedNames.push(parser.tokenValue);
                          tmpExportedBindings.push(tokenValue);
                      }
                      exported = parseIdentifier(parser, context, 0);
                  }
                  else {
                      if (scope) {
                          tmpExportedNames.push(parser.tokenValue);
                          tmpExportedBindings.push(parser.tokenValue);
                      }
                      exported = local;
                  }
                  specifiers.push(finishNode(parser, context, tokenPos, linePos, colPos, {
                      type: 'ExportSpecifier',
                      local,
                      exported
                  }));
                  if (parser.token !== 1074790415)
                      consume(parser, context, 1073741842);
              }
              consume(parser, context, 1074790415);
              if (consumeOpt(parser, context, 12401)) {
                  if (parser.token !== 134283267)
                      report(parser, 102, 'Export');
                  source = parseLiteral(parser, context);
              }
              else if (scope) {
                  let i = 0;
                  let iMax = tmpExportedNames.length;
                  for (; i < iMax; i++) {
                      declareUnboundVariable(parser, tmpExportedNames[i]);
                  }
                  i = 0;
                  iMax = tmpExportedBindings.length;
                  for (; i < iMax; i++) {
                      addBindingToExports(parser, tmpExportedBindings[i]);
                  }
              }
              matchOrInsertSemicolon(parser, context | 32768);
              break;
          }
          case 86093:
              declaration = parseClassDeclaration(parser, context, scope, 2, parser.tokenPos, parser.linePos, parser.colPos);
              break;
          case 86103:
              declaration = parseFunctionDeclaration(parser, context, scope, 4, 1, 2, 0, parser.tokenPos, parser.linePos, parser.colPos);
              break;
          case 241736:
              declaration = parseLexicalDeclaration(parser, context, scope, 8, 64, parser.tokenPos, parser.linePos, parser.colPos);
              break;
          case 86089:
              declaration = parseLexicalDeclaration(parser, context, scope, 16, 64, parser.tokenPos, parser.linePos, parser.colPos);
              break;
          case 86087:
              declaration = parseVariableStatement(parser, context, scope, 64, parser.tokenPos, parser.linePos, parser.colPos);
              break;
          case 143468:
              const { tokenPos, linePos, colPos } = parser;
              nextToken(parser, context);
              if ((parser.flags & 1) < 1 && parser.token === 86103) {
                  declaration = parseFunctionDeclaration(parser, context, scope, 4, 1, 2, 1, tokenPos, linePos, colPos);
                  if (scope) {
                      key = declaration.id ? declaration.id.name : '';
                      declareUnboundVariable(parser, key);
                  }
                  break;
              }
          default:
              report(parser, 28, KeywordDescTable[parser.token & 255]);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'ExportNamedDeclaration',
          declaration,
          specifiers,
          source
      });
  }
  function parseExpression(parser, context, canAssign, isPattern, inGroup, start, line, column) {
      let expr = parsePrimaryExpression(parser, context, 2, 0, canAssign, isPattern, inGroup, 1, start, line, column);
      expr = parseMemberOrUpdateExpression(parser, context, expr, inGroup, start, line, column);
      return parseAssignmentExpression(parser, context, inGroup, 0, start, line, column, expr);
  }
  function parseSequenceExpression(parser, context, inGroup, start, line, column, expr) {
      const expressions = [expr];
      while (consumeOpt(parser, context | 32768, 1073741842)) {
          expressions.push(parseExpression(parser, context, 1, 0, inGroup, parser.tokenPos, parser.linePos, parser.colPos));
      }
      return finishNode(parser, context, start, line, column, {
          type: 'SequenceExpression',
          expressions
      });
  }
  function parseExpressions(parser, context, inGroup, canAssign, start, line, column) {
      const expr = parseExpression(parser, context, canAssign, 0, inGroup, start, line, column);
      return parser.token === 1073741842
          ? parseSequenceExpression(parser, context, inGroup, start, line, column, expr)
          : expr;
  }
  function parseAssignmentExpression(parser, context, inGroup, isPattern, start, line, column, left) {
      const { token } = parser;
      if ((token & 4194304) === 4194304) {
          if (parser.assignable & 2)
              report(parser, 24);
          if ((!isPattern && (token === 1077936157 && left.type === 'ArrayExpression')) ||
              left.type === 'ObjectExpression') {
              reinterpretToPattern(parser, left);
          }
          nextToken(parser, context | 32768);
          const right = parseExpression(parser, context, 1, 1, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
          parser.assignable = 2;
          return finishNode(parser, context, start, line, column, isPattern
              ? {
                  type: 'AssignmentPattern',
                  left,
                  right
              }
              : {
                  type: 'AssignmentExpression',
                  left,
                  operator: KeywordDescTable[token & 255],
                  right
              });
      }
      if ((token & 8454144) === 8454144) {
          left = parseBinaryExpression(parser, context, inGroup, start, line, column, 4, token, left);
      }
      if (consumeOpt(parser, context | 32768, 22)) {
          left = parseConditionalExpression(parser, context, left, start, line, column);
      }
      return left;
  }
  function parseAssignmentExpressionOrPattern(parser, context, inGroup, isPattern, start, line, column, left) {
      const { token } = parser;
      nextToken(parser, context | 32768);
      const right = parseExpression(parser, context, 1, 1, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
      left = finishNode(parser, context, start, line, column, isPattern
          ? {
              type: 'AssignmentPattern',
              left,
              right
          }
          : {
              type: 'AssignmentExpression',
              left,
              operator: KeywordDescTable[token & 255],
              right
          });
      parser.assignable = 2;
      return left;
  }
  function parseConditionalExpression(parser, context, test, start, line, column) {
      const consequent = parseExpression(parser, (context | 134217728) ^ 134217728, 1, 0, 0, parser.tokenPos, parser.linePos, parser.colPos);
      consume(parser, context | 32768, 21);
      parser.assignable = 1;
      const alternate = parseExpression(parser, context, 1, 0, 0, parser.tokenPos, parser.linePos, parser.colPos);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'ConditionalExpression',
          test,
          consequent,
          alternate
      });
  }
  function parseBinaryExpression(parser, context, inGroup, start, line, column, minPrec, operator, left) {
      const bit = -((context & 134217728) > 0) & 8738865;
      let t;
      let prec;
      parser.assignable = 2;
      while (parser.token & 8454144) {
          t = parser.token;
          prec = t & 3840;
          if ((t & 524288 && operator & 268435456) || (operator & 524288 && t & 268435456)) {
              report(parser, 159);
          }
          if (prec + ((t === 8457270) << 8) - ((bit === t) << 12) <= minPrec)
              break;
          nextToken(parser, context | 32768);
          left = finishNode(parser, context, start, line, column, {
              type: t & 524288 ? 'LogicalExpression' : t & 268435456 ? 'CoalesceExpression' : 'BinaryExpression',
              left,
              right: parseBinaryExpression(parser, context, inGroup, parser.tokenPos, parser.linePos, parser.colPos, prec, t, parseLeftHandSideExpression(parser, context, 0, inGroup, 1, parser.tokenPos, parser.linePos, parser.colPos)),
              operator: KeywordDescTable[t & 255]
          });
      }
      if (parser.token === 1077936157)
          report(parser, 24);
      return left;
  }
  function parseUnaryExpression(parser, context, isLHS, start, line, column, inGroup) {
      if (!isLHS)
          report(parser, 0);
      const unaryOperator = parser.token;
      nextToken(parser, context | 32768);
      const arg = parseLeftHandSideExpression(parser, context, 0, inGroup, 1, parser.tokenPos, parser.linePos, parser.colPos);
      if (parser.token === 8457270)
          report(parser, 31);
      if (context & 1024 && unaryOperator === 16863275) {
          if (arg.type === 'Identifier') {
              report(parser, 117);
          }
          else if (isPropertyWithPrivateFieldKey(arg)) {
              report(parser, 123);
          }
      }
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'UnaryExpression',
          operator: KeywordDescTable[unaryOperator & 255],
          argument: arg,
          prefix: true
      });
  }
  function parseAsyncExpression(parser, context, inGroup, isLHS, canAssign, isPattern, inNew, start, line, column) {
      const { token } = parser;
      const expr = parseIdentifier(parser, context, isPattern);
      const { flags } = parser;
      if ((flags & 1) < 1) {
          if (parser.token === 86103) {
              return parseFunctionExpression(parser, context, 1, inGroup, start, line, column);
          }
          if ((parser.token & 143360) === 143360) {
              if (!isLHS)
                  report(parser, 0);
              return parseAsyncArrowAfterIdent(parser, context, canAssign, start, line, column);
          }
      }
      if (!inNew && parser.token === 67174411) {
          return parseAsyncArrowOrCallExpression(parser, context, expr, canAssign, 1, 0, flags, start, line, column);
      }
      if (parser.token === 10) {
          classifyIdentifier(parser, context, token, 1);
          if (inNew)
              report(parser, 48);
          return parseArrowFromIdentifier(parser, context, parser.tokenValue, expr, inNew, canAssign, 0, start, line, column);
      }
      return expr;
  }
  function parseYieldExpression(parser, context, inGroup, canAssign, start, line, column) {
      if (inGroup)
          parser.destructible |= 256;
      if (context & 2097152) {
          nextToken(parser, context | 32768);
          if (context & 8388608)
              report(parser, 30);
          if (!canAssign)
              report(parser, 24);
          if (parser.token === 22)
              report(parser, 120);
          let argument = null;
          let delegate = false;
          if ((parser.flags & 1) < 1) {
              delegate = consumeOpt(parser, context | 32768, 8457011);
              if (parser.token & 65536 || delegate) {
                  argument = parseExpression(parser, context, 1, 0, 0, parser.tokenPos, parser.linePos, parser.colPos);
              }
          }
          parser.assignable = 2;
          return finishNode(parser, context, start, line, column, {
              type: 'YieldExpression',
              argument,
              delegate
          });
      }
      if (context & 1024)
          report(parser, 94, 'yield');
      return parseIdentifierOrArrow(parser, context, start, line, column);
  }
  function parseAwaitExpression(parser, context, inNew, inGroup, start, line, column) {
      if (inGroup)
          parser.destructible |= 128;
      if (context & 4194304) {
          if (inNew)
              report(parser, 0);
          if (context & 8388608) {
              reportMessageAt(parser.index, parser.line, parser.index, 29);
          }
          nextToken(parser, context | 32768);
          const argument = parseLeftHandSideExpression(parser, context, 0, 0, 1, parser.tokenPos, parser.linePos, parser.colPos);
          parser.assignable = 2;
          return finishNode(parser, context, start, line, column, {
              type: 'AwaitExpression',
              argument
          });
      }
      if (context & 2048)
          report(parser, 107, 'Await');
      return parseIdentifierOrArrow(parser, context, start, line, column);
  }
  function parseFunctionBody(parser, context, scope, origin, firstRestricted, scopeError) {
      const { tokenPos, linePos, colPos } = parser;
      consume(parser, context | 32768, 2162700);
      const body = [];
      const prevContext = context;
      if (parser.token !== 1074790415) {
          while (parser.token === 134283267) {
              const { index, tokenPos, tokenValue, token } = parser;
              const expr = parseLiteral(parser, context);
              if (isValidStrictMode(parser, index, tokenPos, tokenValue)) {
                  context |= 1024;
                  if (parser.flags & 128) {
                      reportMessageAt(parser.index, parser.line, parser.tokenPos, 63);
                  }
                  if (parser.flags & 64) {
                      reportMessageAt(parser.index, parser.line, parser.tokenPos, 8);
                  }
              }
              body.push(parseDirective(parser, context, expr, token, tokenPos, parser.linePos, parser.colPos));
          }
          if (context & 1024) {
              if (firstRestricted) {
                  if ((firstRestricted & 537079808) === 537079808) {
                      report(parser, 115);
                  }
                  if ((firstRestricted & 36864) === 36864) {
                      report(parser, 38);
                  }
              }
              if (parser.flags & 512)
                  report(parser, 115);
              if (parser.flags & 256)
                  report(parser, 114);
          }
          if (context & 64 &&
              scope &&
              (scopeError !== void 0 && (prevContext & 1024) < 1 && (context & 8192) < 1)) {
              reportScopeError(scopeError);
          }
      }
      parser.flags =
          (parser.flags | 512 | 256 | 64) ^
              (512 | 256 | 64);
      parser.destructible = (parser.destructible | 256) ^ 256;
      while (parser.token !== 1074790415) {
          body.push(parseStatementListItem(parser, context, scope, 4, {}, parser.tokenPos, parser.linePos, parser.colPos));
      }
      consume(parser, origin & (16 | 8) ? context | 32768 : context, 1074790415);
      parser.flags &= ~(128 | 64);
      if (parser.token === 1077936157)
          report(parser, 24);
      return finishNode(parser, context, tokenPos, linePos, colPos, {
          type: 'BlockStatement',
          body
      });
  }
  function parseSuperExpression(parser, context, start, line, column) {
      nextToken(parser, context);
      switch (parser.token) {
          case 67108988:
              report(parser, 161);
          case 67174411: {
              if ((context & 524288) < 1)
                  report(parser, 26);
              if (context & 16384)
                  report(parser, 143);
              parser.assignable = 2;
              break;
          }
          case 69271571:
          case 67108877: {
              if ((context & 262144) < 1)
                  report(parser, 27);
              if (context & 16384)
                  report(parser, 143);
              parser.assignable = 1;
              break;
          }
          default:
              report(parser, 28, 'super');
      }
      return finishNode(parser, context, start, line, column, { type: 'Super' });
  }
  function parseLeftHandSideExpression(parser, context, canAssign, inGroup, isLHS, start, line, column) {
      const expression = parsePrimaryExpression(parser, context, 2, 0, canAssign, 0, inGroup, isLHS, start, line, column);
      return parseMemberOrUpdateExpression(parser, context, expression, inGroup, start, line, column);
  }
  function parseUpdateExpression(parser, context, expr, start, line, column) {
      if (parser.assignable & 2)
          report(parser, 52);
      const { token } = parser;
      nextToken(parser, context);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'UpdateExpression',
          argument: expr,
          operator: KeywordDescTable[token & 255],
          prefix: false
      });
  }
  function parseMemberOrUpdateExpression(parser, context, expr, inGroup, start, line, column) {
      if ((parser.token & 33619968) === 33619968 && (parser.flags & 1) < 1) {
          return parseUpdateExpression(parser, context, expr, start, line, column);
      }
      if ((parser.token & 67108864) === 67108864) {
          context = (context | 134217728 | 8192) ^ (134217728 | 8192);
          switch (parser.token) {
              case 67108877: {
                  nextToken(parser, context | 1073741824);
                  parser.assignable = 1;
                  const property = parsePropertyOrPrivatePropertyName(parser, context);
                  expr = finishNode(parser, context, start, line, column, {
                      type: 'MemberExpression',
                      object: expr,
                      computed: false,
                      property
                  });
                  break;
              }
              case 69271571: {
                  nextToken(parser, context | 32768);
                  const { tokenPos, linePos, colPos } = parser;
                  const property = parseExpressions(parser, context, inGroup, 1, tokenPos, linePos, colPos);
                  consume(parser, context, 20);
                  parser.assignable = 1;
                  expr = finishNode(parser, context, start, line, column, {
                      type: 'MemberExpression',
                      object: expr,
                      computed: true,
                      property
                  });
                  break;
              }
              case 67174411: {
                  if ((parser.flags & 1024) === 1024) {
                      parser.flags = (parser.flags | 1024) ^ 1024;
                      return expr;
                  }
                  const args = parseArguments(parser, context, inGroup);
                  parser.assignable = 2;
                  expr = finishNode(parser, context, start, line, column, {
                      type: 'CallExpression',
                      callee: expr,
                      arguments: args
                  });
                  break;
              }
              case 67108988: {
                  nextToken(parser, context);
                  parser.assignable = 2;
                  expr = finishNode(parser, context, start, line, column, {
                      type: 'OptionalExpression',
                      object: expr,
                      chain: parseOptionalChain(parser, context, start, line, column)
                  });
                  break;
              }
              default:
                  parser.assignable = 2;
                  expr = finishNode(parser, context, parser.tokenPos, parser.linePos, parser.colPos, {
                      type: 'TaggedTemplateExpression',
                      tag: expr,
                      quasi: parser.token === 67174408
                          ? parseTemplate(parser, context | 65536, start, line, column)
                          : parseTemplateLiteral(parser, context, start, line, column)
                  });
          }
          return parseMemberOrUpdateExpression(parser, context, expr, 0, start, line, column);
      }
      return expr;
  }
  function parseOptionalChain(parser, context, start, line, column) {
      let base = null;
      if (parser.token === 69271571) {
          nextToken(parser, context | 32768);
          const { tokenPos, linePos, colPos } = parser;
          const property = parseExpressions(parser, context, 0, 1, tokenPos, linePos, colPos);
          consume(parser, context, 20);
          parser.assignable = 2;
          base = finishNode(parser, context, tokenPos, linePos, colPos, {
              type: 'OptionalChain',
              base: null,
              computed: true,
              property
          });
      }
      else if (parser.token === 67174411) {
          const args = parseArguments(parser, context, 0);
          parser.assignable = 2;
          base = finishNode(parser, context, start, line, column, {
              type: 'OptionalChain',
              base: null,
              arguments: args
          });
      }
      else {
          if ((parser.token & (143360 | 4096)) < 1)
              report(parser, 154);
          const property = parseIdentifier(parser, context, 0);
          parser.assignable = 2;
          base = finishNode(parser, context, start, line, column, {
              type: 'OptionalChain',
              base: null,
              computed: false,
              property
          });
      }
      while ((parser.token & 67108864) === 67108864) {
          if (parser.token === 67108877) {
              nextToken(parser, context);
              parser.assignable = 1;
              if ((parser.token & (143360 | 4096)) < 1)
                  report(parser, 154);
              const property = parseIdentifier(parser, context, 0);
              base = finishNode(parser, context, parser.tokenPos, parser.linePos, parser.colPos, {
                  type: 'OptionalChain',
                  base,
                  computed: false,
                  property
              });
          }
          else if (parser.token === 69271571) {
              nextToken(parser, context | 32768);
              const { tokenPos, linePos, colPos } = parser;
              const property = parseExpressions(parser, context, 0, 1, tokenPos, linePos, colPos);
              consume(parser, context, 20);
              parser.assignable = 2;
              base = finishNode(parser, context, parser.tokenPos, parser.linePos, parser.colPos, {
                  type: 'OptionalChain',
                  base,
                  computed: true,
                  property
              });
          }
          else if (parser.token === 67174411) {
              const args = parseArguments(parser, context, 0);
              parser.assignable = 2;
              base = finishNode(parser, context, parser.tokenPos, parser.linePos, parser.colPos, {
                  type: 'OptionalChain',
                  base,
                  arguments: args
              });
          }
          else if (parser.token === 67174408 || parser.token === 67174409) {
              report(parser, 160);
          }
          else {
              break;
          }
      }
      return base;
  }
  function parsePropertyOrPrivatePropertyName(parser, context) {
      if ((parser.token & (143360 | 4096)) < 1 && parser.token !== 128) {
          report(parser, 154);
      }
      return context & 1 && parser.token === 128
          ? parsePrivateName(parser, context, parser.tokenPos, parser.linePos, parser.colPos)
          : parseIdentifier(parser, context, 0);
  }
  function parseUpdateExpressionPrefixed(parser, context, inNew, isLHS, start, line, column) {
      if (inNew)
          report(parser, 53);
      if (!isLHS)
          report(parser, 0);
      const { token } = parser;
      nextToken(parser, context | 32768);
      const arg = parseLeftHandSideExpression(parser, context, 0, 0, 1, parser.tokenPos, parser.linePos, parser.colPos);
      if (parser.assignable & 2) {
          report(parser, 52);
      }
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'UpdateExpression',
          argument: arg,
          operator: KeywordDescTable[token & 255],
          prefix: true
      });
  }
  function parsePrimaryExpression(parser, context, kind, inNew, canAssign, isPattern, inGroup, isLHS, start, line, column) {
      if ((parser.token & 143360) === 143360) {
          switch (parser.token) {
              case 209005:
                  return parseAwaitExpression(parser, context, inNew, inGroup, start, line, column);
              case 241770:
                  return parseYieldExpression(parser, context, inGroup, canAssign, start, line, column);
              case 143468:
                  return parseAsyncExpression(parser, context, inGroup, isLHS, canAssign, isPattern, inNew, start, line, column);
          }
          const { token, tokenValue } = parser;
          const expr = parseIdentifier(parser, context | 65536, isPattern);
          if (parser.token === 10) {
              if (!isLHS)
                  report(parser, 0);
              classifyIdentifier(parser, context, token, 1);
              return parseArrowFromIdentifier(parser, context, tokenValue, expr, inNew, canAssign, 0, start, line, column);
          }
          if (context & 16384 && token === 537079925)
              report(parser, 126);
          if (token === 241736) {
              if (context & 1024)
                  report(parser, 109);
              if (kind & (8 | 16))
                  report(parser, 97);
          }
          parser.assignable =
              context & 1024 && (token & 537079808) === 537079808
                  ? 2
                  : 1;
          return expr;
      }
      if ((parser.token & 134217728) === 134217728) {
          return parseLiteral(parser, context);
      }
      switch (parser.token) {
          case 33619995:
          case 33619996:
              return parseUpdateExpressionPrefixed(parser, context, inNew, isLHS, start, line, column);
          case 16863275:
          case 16842797:
          case 16842798:
          case 25233967:
          case 25233968:
          case 16863274:
          case 16863276:
              return parseUnaryExpression(parser, context, isLHS, start, line, column, inGroup);
          case 86103:
              return parseFunctionExpression(parser, context, 0, inGroup, start, line, column);
          case 2162700:
              return parseObjectLiteral(parser, context, canAssign ? 0 : 1, inGroup, start, line, column);
          case 69271571:
              return parseArrayLiteral(parser, context, canAssign ? 0 : 1, inGroup, start, line, column);
          case 67174411:
              return parseParenthesizedExpression(parser, context, canAssign, 1, 0, start, line, column);
          case 86021:
          case 86022:
          case 86023:
              return parseNullOrTrueOrFalseLiteral(parser, context, start, line, column);
          case 86110:
              return parseThisExpression(parser, context);
          case 65540:
              return parseRegExpLiteral(parser, context, start, line, column);
          case 130:
          case 86093:
              return parseClassExpression(parser, context, inGroup, start, line, column);
          case 86108:
              return parseSuperExpression(parser, context, start, line, column);
          case 67174409:
              return parseTemplateLiteral(parser, context, start, line, column);
          case 67174408:
              return parseTemplate(parser, context, start, line, column);
          case 86106:
              return parseNewExpression(parser, context, inGroup, start, line, column);
          case 122:
              return parseBigIntLiteral(parser, context, start, line, column);
          case 128:
              return parsePrivateName(parser, context, start, line, column);
          case 86105:
              return parseImportCallOrMetaExpression(parser, context, inNew, inGroup, start, line, column);
          case 8456255:
              if (context & 16)
                  return parseJSXRootElementOrFragment(parser, context, 1, start, line, column);
          default:
              if (isValidIdentifier(context, parser.token))
                  return parseIdentifierOrArrow(parser, context, start, line, column);
              report(parser, 28, KeywordDescTable[parser.token & 255]);
      }
  }
  function parseImportCallOrMetaExpression(parser, context, inNew, inGroup, start, line, column) {
      let expr = parseIdentifier(parser, context, 0);
      if (context & 1 && parser.token === 67108877) {
          return parseImportMetaExpression(parser, context, expr, start, line, column);
      }
      if (inNew)
          report(parser, 137);
      expr = parseImportExpression(parser, context, inGroup, start, line, column);
      parser.assignable = 2;
      return parseMemberOrUpdateExpression(parser, context, expr, inGroup, start, line, column);
  }
  function parseImportMetaExpression(parser, context, meta, start, line, column) {
      if ((context & 2048) === 0)
          report(parser, 163);
      nextToken(parser, context);
      if (parser.token !== 143492 && parser.tokenValue !== 'meta')
          report(parser, 28, KeywordDescTable[parser.token & 255]);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'MetaProperty',
          meta,
          property: parseIdentifier(parser, context, 0)
      });
  }
  function parseImportExpression(parser, context, inGroup, start, line, column) {
      consume(parser, context | 32768, 67174411);
      if (parser.token === 14)
          report(parser, 138);
      const source = parseExpression(parser, context, 1, 0, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
      consume(parser, context, 16);
      return finishNode(parser, context, start, line, column, {
          type: 'ImportExpression',
          source
      });
  }
  function parseBigIntLiteral(parser, context, start, line, column) {
      const { tokenRaw, tokenValue } = parser;
      nextToken(parser, context);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, context & 512
          ? {
              type: 'BigIntLiteral',
              value: tokenValue,
              bigint: tokenRaw,
              raw: tokenRaw
          }
          : {
              type: 'BigIntLiteral',
              value: tokenValue,
              bigint: tokenRaw
          });
  }
  function parseTemplateLiteral(parser, context, start, line, column) {
      parser.assignable = 2;
      consume(parser, context, 67174409);
      return finishNode(parser, context, start, line, column, {
          type: 'TemplateLiteral',
          expressions: [],
          quasis: [parseTemplateElement(parser, context, true)]
      });
  }
  function parseTemplate(parser, context, start, line, column) {
      context = (context | 134217728) ^ 134217728;
      const quasis = [parseTemplateElement(parser, context, false)];
      consume(parser, context | 32768, 67174408);
      const expressions = [parseExpressions(parser, context, 0, 1, parser.tokenPos, parser.linePos, parser.colPos)];
      if (parser.token !== 1074790415)
          report(parser, 80);
      while ((parser.token = scanTemplateTail(parser, context)) !== 67174409) {
          const { tokenPos, linePos, colPos } = parser;
          quasis.push(parseTemplateElement(parser, context, false));
          consume(parser, context | 32768, 67174408);
          expressions.push(parseExpressions(parser, context, 0, 1, tokenPos, linePos, colPos));
          if (parser.token !== 1074790415)
              report(parser, 80);
      }
      quasis.push(parseTemplateElement(parser, context, true));
      consume(parser, context, 67174409);
      return finishNode(parser, context, start, line, column, {
          type: 'TemplateLiteral',
          expressions,
          quasis
      });
  }
  function parseTemplateElement(parser, context, tail) {
      const { tokenPos, linePos, colPos } = parser;
      return finishNode(parser, context, tokenPos, linePos, colPos, {
          type: 'TemplateElement',
          value: {
              cooked: parser.tokenValue,
              raw: parser.tokenRaw
          },
          tail
      });
  }
  function parseSpreadElement(parser, context, start, line, column) {
      context = (context | 134217728) ^ 134217728;
      consume(parser, context | 32768, 14);
      const argument = parseExpression(parser, context, 1, 0, 0, parser.tokenPos, parser.linePos, parser.colPos);
      parser.assignable = 1;
      return finishNode(parser, context, start, line, column, {
          type: 'SpreadElement',
          argument
      });
  }
  function parseArguments(parser, context, inGroup) {
      nextToken(parser, context | 32768);
      const args = [];
      if (parser.token === 16) {
          nextToken(parser, context);
          return args;
      }
      while (parser.token !== 16) {
          if (parser.token === 14) {
              args.push(parseSpreadElement(parser, context, parser.tokenPos, parser.linePos, parser.colPos));
          }
          else {
              args.push(parseExpression(parser, context, 1, 0, inGroup, parser.tokenPos, parser.linePos, parser.colPos));
          }
          if (parser.token !== 1073741842)
              break;
          nextToken(parser, context | 32768);
          if (parser.token === 16)
              break;
      }
      consume(parser, context, 16);
      return args;
  }
  function parseIdentifier(parser, context, isPattern) {
      const { tokenValue, tokenPos, linePos, colPos } = parser;
      nextToken(parser, context);
      return finishNode(parser, context, tokenPos, linePos, colPos, context & 268435456
          ? {
              type: 'Identifier',
              name: tokenValue,
              pattern: isPattern === 1
          }
          : {
              type: 'Identifier',
              name: tokenValue
          });
  }
  function parseLiteral(parser, context) {
      const { tokenValue, tokenRaw, tokenPos, linePos, colPos } = parser;
      nextToken(parser, context);
      parser.assignable = 2;
      return finishNode(parser, context, tokenPos, linePos, colPos, context & 512
          ? {
              type: 'Literal',
              value: tokenValue,
              raw: tokenRaw
          }
          : {
              type: 'Literal',
              value: tokenValue
          });
  }
  function parseNullOrTrueOrFalseLiteral(parser, context, start, line, column) {
      const raw = KeywordDescTable[parser.token & 255];
      const value = parser.token === 86023 ? null : raw === 'true';
      nextToken(parser, context);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, context & 512
          ? {
              type: 'Literal',
              value,
              raw
          }
          : {
              type: 'Literal',
              value
          });
  }
  function parseThisExpression(parser, context) {
      const { tokenPos, linePos, colPos } = parser;
      nextToken(parser, context);
      parser.assignable = 2;
      return finishNode(parser, context, tokenPos, linePos, colPos, {
          type: 'ThisExpression'
      });
  }
  function parseFunctionDeclaration(parser, context, scope, origin, allowGen, flags, isAsync, start, line, column) {
      nextToken(parser, context | 32768);
      const isGenerator = allowGen ? optionalBit(parser, context, 8457011) : 0;
      let id = null;
      let firstRestricted;
      let functionScope = scope ? createScope() : void 0;
      if (parser.token === 67174411) {
          if ((flags & 1) < 1)
              report(parser, 37, 'Function');
      }
      else {
          const kind = origin & 4 && ((context & 8192) < 1 || (context & 2048) < 1)
              ? 4
              : 64;
          validateFunctionName(parser, context | ((context & 3072) << 11), parser.token);
          if (scope) {
              if (kind & 4) {
                  addVarName(parser, context, scope, parser.tokenValue, kind);
              }
              else {
                  addBlockName(parser, context, scope, parser.tokenValue, kind, origin);
              }
              functionScope = addChildScope(functionScope, 256);
              if (flags) {
                  if (flags & 2) {
                      declareUnboundVariable(parser, parser.tokenValue);
                  }
              }
          }
          firstRestricted = parser.token;
          id = parseIdentifier(parser, context, 0);
      }
      context =
          ((context | 32243712) ^ 32243712) |
              67108864 |
              ((isAsync * 2 + isGenerator) << 21) |
              (isGenerator ? 0 : 1073741824);
      if (scope)
          functionScope = addChildScope(functionScope, 512);
      const params = parseFormalParametersOrFormalList(parser, context | 8388608, functionScope, 0, 1);
      const body = parseFunctionBody(parser, (context | 8192 | 4096 | 131072) ^
          (8192 | 4096 | 131072), scope ? addChildScope(functionScope, 128) : functionScope, 8, firstRestricted, scope ? functionScope.scopeError : void 0);
      return finishNode(parser, context, start, line, column, {
          type: 'FunctionDeclaration',
          id,
          params,
          body,
          async: isAsync === 1,
          generator: isGenerator === 1
      });
  }
  function parseFunctionExpression(parser, context, isAsync, inGroup, start, line, column) {
      nextToken(parser, context | 32768);
      const isGenerator = optionalBit(parser, context, 8457011);
      const generatorAndAsyncFlags = (isAsync * 2 + isGenerator) << 21;
      let id = null;
      let firstRestricted;
      let scope = context & 64 ? createScope() : void 0;
      if ((parser.token & (143360 | 4096 | 36864)) > 0) {
          validateFunctionName(parser, ((context | 0x1ec0000) ^ 0x1ec0000) | generatorAndAsyncFlags, parser.token);
          if (scope)
              scope = addChildScope(scope, 256);
          firstRestricted = parser.token;
          id = parseIdentifier(parser, context, 0);
      }
      context =
          ((context | 32243712) ^ 32243712) |
              67108864 |
              generatorAndAsyncFlags |
              (isGenerator ? 0 : 1073741824);
      if (scope)
          scope = addChildScope(scope, 512);
      const params = parseFormalParametersOrFormalList(parser, context | 8388608, scope, inGroup, 1);
      const body = parseFunctionBody(parser, context & ~(0x8001000 | 8192 | 4096 | 131072 | 16384), scope ? addChildScope(scope, 128) : scope, 0, firstRestricted, void 0);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'FunctionExpression',
          id,
          params,
          body,
          async: isAsync === 1,
          generator: isGenerator === 1
      });
  }
  function parseArrayLiteral(parser, context, skipInitializer, inGroup, start, line, column) {
      const expr = parseArrayExpressionOrPattern(parser, context, void 0, skipInitializer, inGroup, 0, 2, 0, start, line, column);
      if (context & 256 && parser.destructible & 64) {
          report(parser, 60);
      }
      if (parser.destructible & 8) {
          report(parser, 59);
      }
      return expr;
  }
  function parseArrayExpressionOrPattern(parser, context, scope, skipInitializer, inGroup, isPattern, kind, origin, start, line, column) {
      nextToken(parser, context | 32768);
      const elements = [];
      let destructible = 0;
      context = (context | 134217728) ^ 134217728;
      while (parser.token !== 20) {
          if (consumeOpt(parser, context | 32768, 1073741842)) {
              elements.push(null);
          }
          else {
              let left;
              const { token, tokenPos, linePos, colPos, tokenValue } = parser;
              if (token & 143360) {
                  left = parsePrimaryExpression(parser, context, kind, 0, 1, 0, inGroup, 1, tokenPos, linePos, colPos);
                  if (parser.token === 1077936157) {
                      if (parser.assignable & 2)
                          report(parser, 24);
                      nextToken(parser, context | 32768);
                      if (scope)
                          addVarOrBlock(parser, context, scope, tokenValue, kind, origin);
                      const right = parseExpression(parser, context, 1, 1, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
                      left = finishNode(parser, context, tokenPos, linePos, colPos, isPattern
                          ? {
                              type: 'AssignmentPattern',
                              left,
                              right
                          }
                          : {
                              type: 'AssignmentExpression',
                              operator: '=',
                              left,
                              right
                          });
                      destructible |=
                          parser.destructible & 256
                              ? 256
                              : 0 | (parser.destructible & 128)
                                  ? 128
                                  : 0;
                  }
                  else if (parser.token === 1073741842 || parser.token === 20) {
                      if (parser.assignable & 2) {
                          destructible |= 16;
                      }
                      else if (scope) {
                          addVarOrBlock(parser, context, scope, tokenValue, kind, origin);
                      }
                      destructible |=
                          parser.destructible & 256
                              ? 256
                              : 0 | (parser.destructible & 128)
                                  ? 128
                                  : 0;
                  }
                  else {
                      destructible |=
                          kind & 1
                              ? 32
                              : (kind & 2) < 1
                                  ? 16
                                  : 0;
                      left = parseMemberOrUpdateExpression(parser, context, left, inGroup, tokenPos, linePos, colPos);
                      if (parser.token !== 1073741842 && parser.token !== 20) {
                          if (parser.token !== 1077936157)
                              destructible |= 16;
                          left = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, left);
                      }
                      else if (parser.token !== 1077936157) {
                          destructible |=
                              parser.assignable & 2
                                  ? 16
                                  : 32;
                      }
                  }
              }
              else if (token & 2097152) {
                  left =
                      parser.token === 2162700
                          ? parseObjectLiteralOrPattern(parser, context, scope, 0, inGroup, isPattern, kind, origin, tokenPos, linePos, colPos)
                          : parseArrayExpressionOrPattern(parser, context, scope, 0, inGroup, isPattern, kind, origin, tokenPos, linePos, colPos);
                  destructible |= parser.destructible;
                  parser.assignable =
                      parser.destructible & 16
                          ? 2
                          : 1;
                  if (parser.token === 1073741842 || parser.token === 20) {
                      if (parser.assignable & 2) {
                          destructible |= 16;
                      }
                  }
                  else if (parser.destructible & 8) {
                      report(parser, 68);
                  }
                  else {
                      left = parseMemberOrUpdateExpression(parser, context, left, inGroup, tokenPos, linePos, colPos);
                      destructible = parser.assignable & 2 ? 16 : 0;
                      if (parser.token !== 1073741842 && parser.token !== 20) {
                          left = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, left);
                      }
                      else if (parser.token !== 1077936157) {
                          destructible |=
                              parser.assignable & 2
                                  ? 16
                                  : 32;
                      }
                  }
              }
              else if (token === 14) {
                  left = parseSpreadOrRestElement(parser, context, scope, 20, kind, origin, 0, inGroup, isPattern, tokenPos, linePos, colPos);
                  destructible |= parser.destructible;
                  if (parser.token !== 1073741842 && parser.token !== 20)
                      report(parser, 28, KeywordDescTable[parser.token & 255]);
              }
              else {
                  left = parseLeftHandSideExpression(parser, context, 1, 0, 1, tokenPos, linePos, colPos);
                  if (parser.token !== 1073741842 && parser.token !== 20) {
                      left = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, left);
                      if ((kind & (2 | 1)) < 1 && token === 67174411)
                          destructible |= 16;
                  }
                  else if (parser.assignable & 2) {
                      destructible |= 16;
                  }
                  else if (token === 67174411) {
                      destructible |=
                          parser.assignable & 1 && kind & (2 | 1)
                              ? 32
                              : 16;
                  }
              }
              elements.push(left);
              if (consumeOpt(parser, context | 32768, 1073741842)) {
                  if (parser.token === 20)
                      break;
              }
              else
                  break;
          }
      }
      consume(parser, context, 20);
      const node = finishNode(parser, context, start, line, column, {
          type: isPattern ? 'ArrayPattern' : 'ArrayExpression',
          elements
      });
      if (!skipInitializer && parser.token & 4194304) {
          return parseArrayOrObjectAssignmentPattern(parser, context, destructible, inGroup, isPattern, start, line, column, node);
      }
      parser.destructible = destructible;
      return node;
  }
  function parseArrayOrObjectAssignmentPattern(parser, context, destructible, inGroup, isPattern, start, line, column, node) {
      if (parser.token !== 1077936157)
          report(parser, 24);
      nextToken(parser, context | 32768);
      if (destructible & 16)
          report(parser, 24);
      if (!isPattern)
          reinterpretToPattern(parser, node);
      const { tokenPos, linePos, colPos } = parser;
      const right = parseExpression(parser, context, 1, 1, inGroup, tokenPos, linePos, colPos);
      parser.destructible =
          ((destructible | 64 | 8) ^
              (8 | 64)) |
              (parser.destructible & 128 ? 128 : 0) |
              (parser.destructible & 256 ? 256 : 0);
      return finishNode(parser, context, start, line, column, isPattern
          ? {
              type: 'AssignmentPattern',
              left: node,
              right
          }
          : {
              type: 'AssignmentExpression',
              left: node,
              operator: '=',
              right
          });
  }
  function parseSpreadOrRestElement(parser, context, scope, closingToken, kind, origin, isAsync, inGroup, isPattern, start, line, column) {
      nextToken(parser, context | 32768);
      let argument = null;
      let destructible = 0;
      let { token, tokenValue, tokenPos, linePos, colPos } = parser;
      if (token & (4096 | 143360)) {
          parser.assignable = 1;
          argument = parsePrimaryExpression(parser, context, kind, 0, 1, 0, inGroup, 1, tokenPos, linePos, colPos);
          token = parser.token;
          argument = parseMemberOrUpdateExpression(parser, context, argument, inGroup, tokenPos, linePos, colPos);
          if (parser.token !== 1073741842 && parser.token !== closingToken) {
              if (parser.assignable & 2 && parser.token === 1077936157)
                  report(parser, 68);
              destructible |= 16;
              argument = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, argument);
          }
          if (parser.assignable & 2) {
              destructible |= 16;
          }
          else if (token === closingToken || token === 1073741842) {
              if (scope)
                  addVarOrBlock(parser, context, scope, tokenValue, kind, origin);
          }
          else {
              destructible |= 32;
          }
          destructible |= parser.destructible & 128 ? 128 : 0;
      }
      else if (token === closingToken) {
          report(parser, 39);
      }
      else if (token & 2097152) {
          argument =
              parser.token === 2162700
                  ? parseObjectLiteralOrPattern(parser, context, scope, 1, inGroup, isPattern, kind, origin, tokenPos, linePos, colPos)
                  : parseArrayExpressionOrPattern(parser, context, scope, 1, inGroup, isPattern, kind, origin, tokenPos, linePos, colPos);
          token = parser.token;
          if (token !== 1077936157 && token !== closingToken && token !== 1073741842) {
              if (parser.destructible & 8)
                  report(parser, 68);
              argument = parseMemberOrUpdateExpression(parser, context, argument, inGroup, tokenPos, linePos, colPos);
              destructible |= parser.assignable & 2 ? 16 : 0;
              if ((parser.token & 4194304) === 4194304) {
                  if (parser.token !== 1077936157)
                      destructible |= 16;
                  argument = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, argument);
              }
              else {
                  if ((parser.token & 8454144) === 8454144) {
                      argument = parseBinaryExpression(parser, context, 1, tokenPos, linePos, colPos, 4, token, argument);
                  }
                  if (consumeOpt(parser, context | 32768, 22)) {
                      argument = parseConditionalExpression(parser, context, argument, tokenPos, linePos, colPos);
                  }
                  destructible |=
                      parser.assignable & 2
                          ? 16
                          : 32;
              }
          }
          else {
              destructible |=
                  closingToken === 1074790415 && token !== 1077936157
                      ? 16
                      : parser.destructible;
          }
      }
      else {
          destructible |= 32;
          argument = parseLeftHandSideExpression(parser, context, 1, inGroup, 1, parser.tokenPos, parser.linePos, parser.colPos);
          const { token, tokenPos, linePos, colPos } = parser;
          if (token === 1077936157 && token !== closingToken && token !== 1073741842) {
              if (parser.assignable & 2)
                  report(parser, 24);
              argument = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, argument);
              destructible |= 16;
          }
          else {
              if (token === 1073741842) {
                  destructible |= 16;
              }
              else if (token !== closingToken) {
                  argument = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, argument);
              }
              destructible |=
                  parser.assignable & 1 ? 32 : 16;
          }
          parser.destructible = destructible;
          if (parser.token !== closingToken && parser.token !== 1073741842)
              report(parser, 155);
          return finishNode(parser, context, start, line, column, {
              type: isPattern ? 'RestElement' : 'SpreadElement',
              argument: argument
          });
      }
      if (parser.token !== closingToken) {
          if (kind & 1)
              destructible |= isAsync ? 16 : 32;
          if (consumeOpt(parser, context | 32768, 1077936157)) {
              if (destructible & 16)
                  report(parser, 24);
              reinterpretToPattern(parser, argument);
              const right = parseExpression(parser, context, 1, 1, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
              argument = finishNode(parser, context, tokenPos, linePos, colPos, isPattern
                  ? {
                      type: 'AssignmentPattern',
                      left: argument,
                      right
                  }
                  : {
                      type: 'AssignmentExpression',
                      left: argument,
                      operator: '=',
                      right
                  });
              destructible = 16;
          }
          else {
              destructible |= 16;
          }
      }
      parser.destructible = destructible;
      return finishNode(parser, context, start, line, column, {
          type: isPattern ? 'RestElement' : 'SpreadElement',
          argument: argument
      });
  }
  function parseMethodDefinition(parser, context, kind, inGroup, start, line, column) {
      const modifierFlags = (kind & 64) < 1 ? 31981568 : 14680064;
      context =
          ((context | modifierFlags) ^ modifierFlags) |
              ((kind & 88) << 18) |
              100925440;
      let scope = context & 64 ? addChildScope(createScope(), 512) : void 0;
      const params = parseMethodFormals(parser, context | 8388608, scope, kind, 1, inGroup);
      if (scope)
          scope = addChildScope(scope, 128);
      const body = parseFunctionBody(parser, context & ~(0x8001000 | 8192), scope, 0, void 0, void 0);
      return finishNode(parser, context, start, line, column, {
          type: 'FunctionExpression',
          params,
          body,
          async: (kind & 16) > 0,
          generator: (kind & 8) > 0,
          id: null
      });
  }
  function parseObjectLiteral(parser, context, skipInitializer, inGroup, start, line, column) {
      const expr = parseObjectLiteralOrPattern(parser, context, void 0, skipInitializer, inGroup, 0, 2, 0, start, line, column);
      if (context & 256 && parser.destructible & 64) {
          report(parser, 60);
      }
      if (parser.destructible & 8) {
          report(parser, 59);
      }
      return expr;
  }
  function parseObjectLiteralOrPattern(parser, context, scope, skipInitializer, inGroup, isPattern, kind, origin, start, line, column) {
      nextToken(parser, context);
      const properties = [];
      let destructible = 0;
      let prototypeCount = 0;
      context = (context | 134217728) ^ 134217728;
      while (parser.token !== 1074790415) {
          const { token, tokenValue, linePos, colPos, tokenPos } = parser;
          if (token === 14) {
              properties.push(parseSpreadOrRestElement(parser, context, scope, 1074790415, kind, origin, 0, inGroup, isPattern, tokenPos, linePos, colPos));
          }
          else {
              let state = 0;
              let key = null;
              let value;
              const t = parser.token;
              if (parser.token & (143360 | 4096) || parser.token === 118) {
                  key = parseIdentifier(parser, context, 0);
                  if (parser.token === 1073741842 || parser.token === 1074790415 || parser.token === 1077936157) {
                      state |= 4;
                      if (context & 1024 && (token & 537079808) === 537079808) {
                          destructible |= 16;
                      }
                      else {
                          validateBindingIdentifier(parser, context, kind, token, 0);
                      }
                      if (scope)
                          addVarOrBlock(parser, context, scope, tokenValue, kind, origin);
                      if (consumeOpt(parser, context | 32768, 1077936157)) {
                          destructible |= 8;
                          const right = parseExpression(parser, context, 1, 1, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
                          destructible |=
                              parser.destructible & 256
                                  ? 256
                                  : 0 | (parser.destructible & 128)
                                      ? 128
                                      : 0;
                          value = finishNode(parser, context, tokenPos, linePos, colPos, {
                              type: 'AssignmentPattern',
                              left: context & -2147483648 ? Object.assign({}, key) : key,
                              right
                          });
                      }
                      else {
                          destructible |=
                              (token === 209005 ? 128 : 0) |
                                  (token === 118 ? 16 : 0);
                          value = context & -2147483648 ? Object.assign({}, key) : key;
                      }
                  }
                  else if (consumeOpt(parser, context | 32768, 21)) {
                      const { tokenPos, linePos, colPos } = parser;
                      if (tokenValue === '__proto__')
                          prototypeCount++;
                      if (parser.token & 143360) {
                          const tokenAfterColon = parser.token;
                          const valueAfterColon = parser.tokenValue;
                          destructible |= t === 118 ? 16 : 0;
                          value = parsePrimaryExpression(parser, context, kind, 0, 1, 0, inGroup, 1, tokenPos, linePos, colPos);
                          const { token } = parser;
                          value = parseMemberOrUpdateExpression(parser, context, value, inGroup, tokenPos, linePos, colPos);
                          if (parser.token === 1073741842 || parser.token === 1074790415) {
                              if (token === 1077936157 || token === 1074790415 || token === 1073741842) {
                                  destructible |= parser.destructible & 128 ? 128 : 0;
                                  if (parser.assignable & 2) {
                                      destructible |= 16;
                                  }
                                  else if (scope && (tokenAfterColon & 143360) === 143360) {
                                      addVarOrBlock(parser, context, scope, valueAfterColon, kind, origin);
                                  }
                              }
                              else {
                                  destructible |=
                                      parser.assignable & 1
                                          ? 32
                                          : 16;
                              }
                          }
                          else if ((parser.token & 4194304) === 4194304) {
                              if (parser.assignable & 2) {
                                  destructible |= 16;
                              }
                              else if (token !== 1077936157) {
                                  destructible |= 32;
                              }
                              else if (scope) {
                                  addVarOrBlock(parser, context, scope, valueAfterColon, kind, origin);
                              }
                              value = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, value);
                          }
                          else {
                              destructible |= 16;
                              if ((parser.token & 8454144) === 8454144) {
                                  value = parseBinaryExpression(parser, context, 1, tokenPos, linePos, colPos, 4, token, value);
                              }
                              if (consumeOpt(parser, context | 32768, 22)) {
                                  value = parseConditionalExpression(parser, context, value, tokenPos, linePos, colPos);
                              }
                          }
                      }
                      else if ((parser.token & 2097152) === 2097152) {
                          value =
                              parser.token === 69271571
                                  ? parseArrayExpressionOrPattern(parser, context, scope, 0, inGroup, isPattern, kind, origin, tokenPos, linePos, colPos)
                                  : parseObjectLiteralOrPattern(parser, context, scope, 0, inGroup, isPattern, kind, origin, tokenPos, linePos, colPos);
                          destructible = parser.destructible;
                          parser.assignable =
                              destructible & 16 ? 2 : 1;
                          if (parser.token === 1073741842 || parser.token === 1074790415) {
                              if (parser.assignable & 2)
                                  destructible |= 16;
                          }
                          else if (parser.destructible & 8) {
                              report(parser, 68);
                          }
                          else {
                              value = parseMemberOrUpdateExpression(parser, context, value, inGroup, tokenPos, linePos, colPos);
                              destructible = parser.assignable & 2 ? 16 : 0;
                              if ((parser.token & 4194304) === 4194304) {
                                  value = parseAssignmentExpressionOrPattern(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, value);
                              }
                              else {
                                  if ((parser.token & 8454144) === 8454144) {
                                      value = parseBinaryExpression(parser, context, 1, tokenPos, linePos, colPos, 4, token, value);
                                  }
                                  if (consumeOpt(parser, context | 32768, 22)) {
                                      value = parseConditionalExpression(parser, context, value, tokenPos, linePos, colPos);
                                  }
                                  destructible |=
                                      parser.assignable & 2
                                          ? 16
                                          : 32;
                              }
                          }
                      }
                      else {
                          value = parseLeftHandSideExpression(parser, context, 1, inGroup, 1, tokenPos, linePos, colPos);
                          destructible |=
                              parser.assignable & 1
                                  ? 32
                                  : 16;
                          if (parser.token === 1073741842 || parser.token === 1074790415) {
                              if (parser.assignable & 2)
                                  destructible |= 16;
                          }
                          else {
                              value = parseMemberOrUpdateExpression(parser, context, value, inGroup, tokenPos, tokenPos, colPos);
                              destructible = parser.assignable & 2 ? 16 : 0;
                              if (parser.token !== 1073741842 && token !== 1074790415) {
                                  if (parser.token !== 1077936157)
                                      destructible |= 16;
                                  value = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, tokenPos, colPos, value);
                              }
                          }
                      }
                  }
                  else if (parser.token === 69271571) {
                      destructible |= 16;
                      if (token === 143468)
                          state |= 16;
                      state |=
                          (token === 12399
                              ? 256
                              : token === 12400
                                  ? 512
                                  : 1) | 2;
                      key = parseComputedPropertyName(parser, context, inGroup);
                      destructible |= parser.assignable;
                      value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
                  }
                  else if (parser.token & (143360 | 4096)) {
                      destructible |= 16;
                      if (token === 118)
                          report(parser, 92);
                      if (token === 143468) {
                          if (parser.flags & 1)
                              report(parser, 128);
                          state |= 16;
                      }
                      key = parseIdentifier(parser, context, 0);
                      state |=
                          token === 12399
                              ? 256
                              : token === 12400
                                  ? 512
                                  : 1;
                      value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
                  }
                  else if (parser.token === 67174411) {
                      destructible |= 16;
                      state |= 1;
                      value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
                  }
                  else if (parser.token === 8457011) {
                      destructible |= 16;
                      if (token === 12399 || token === 12400) {
                          report(parser, 40);
                      }
                      else if (token === 143480) {
                          report(parser, 92);
                      }
                      nextToken(parser, context);
                      state |=
                          8 | 1 | (token === 143468 ? 16 : 0);
                      if (parser.token & 143360) {
                          key = parseIdentifier(parser, context, 0);
                      }
                      else if ((parser.token & 134217728) === 134217728) {
                          key = parseLiteral(parser, context);
                      }
                      else if (parser.token === 69271571) {
                          state |= 2;
                          key = parseComputedPropertyName(parser, context, inGroup);
                          destructible |= parser.assignable;
                      }
                      else {
                          report(parser, 28, KeywordDescTable[parser.token & 255]);
                      }
                      value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
                  }
                  else if ((parser.token & 134217728) === 134217728) {
                      if (token === 143468)
                          state |= 16;
                      state |=
                          token === 12399
                              ? 256
                              : token === 12400
                                  ? 512
                                  : 1;
                      destructible |= 16;
                      key = parseLiteral(parser, context);
                      value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
                  }
                  else {
                      report(parser, 129);
                  }
              }
              else if ((parser.token & 134217728) === 134217728) {
                  key = parseLiteral(parser, context);
                  if (parser.token === 21) {
                      consume(parser, context | 32768, 21);
                      const { tokenPos, linePos, colPos } = parser;
                      if (tokenValue === '__proto__')
                          prototypeCount++;
                      if (parser.token & 143360) {
                          value = parsePrimaryExpression(parser, context, kind, 0, 1, 0, inGroup, 1, tokenPos, linePos, colPos);
                          const { token, tokenValue: valueAfterColon } = parser;
                          value = parseMemberOrUpdateExpression(parser, context, value, inGroup, tokenPos, linePos, colPos);
                          if (parser.token === 1073741842 || parser.token === 1074790415) {
                              if (token === 1077936157 || token === 1074790415 || token === 1073741842) {
                                  if (parser.assignable & 2) {
                                      destructible |= 16;
                                  }
                                  else if (scope) {
                                      addVarOrBlock(parser, context, scope, valueAfterColon, kind, origin);
                                  }
                              }
                              else {
                                  destructible |=
                                      parser.assignable & 1
                                          ? 32
                                          : 16;
                              }
                          }
                          else if (parser.token === 1077936157) {
                              if (parser.assignable & 2)
                                  destructible |= 16;
                              value = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, value);
                          }
                          else {
                              destructible |= 16;
                              value = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, value);
                          }
                      }
                      else if ((parser.token & 2097152) === 2097152) {
                          value =
                              parser.token === 69271571
                                  ? parseArrayExpressionOrPattern(parser, context, scope, 0, inGroup, isPattern, kind, origin, tokenPos, linePos, colPos)
                                  : parseObjectLiteralOrPattern(parser, context, scope, 0, inGroup, isPattern, kind, origin, tokenPos, linePos, colPos);
                          destructible = parser.destructible;
                          parser.assignable =
                              destructible & 16 ? 2 : 1;
                          if (parser.token === 1073741842 || parser.token === 1074790415) {
                              if (parser.assignable & 2) {
                                  destructible |= 16;
                              }
                          }
                          else if ((parser.destructible & 8) !== 8) {
                              value = parseMemberOrUpdateExpression(parser, context, value, inGroup, tokenPos, linePos, colPos);
                              destructible = parser.assignable & 2 ? 16 : 0;
                              if ((parser.token & 4194304) === 4194304) {
                                  value = parseAssignmentExpressionOrPattern(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, value);
                              }
                              else {
                                  if ((parser.token & 8454144) === 8454144) {
                                      value = parseBinaryExpression(parser, context, 1, tokenPos, linePos, colPos, 4, token, value);
                                  }
                                  if (consumeOpt(parser, context | 32768, 22)) {
                                      value = parseConditionalExpression(parser, context, value, tokenPos, linePos, colPos);
                                  }
                                  destructible |=
                                      parser.assignable & 2
                                          ? 16
                                          : 32;
                              }
                          }
                      }
                      else {
                          value = parseLeftHandSideExpression(parser, context, 1, 0, 1, tokenPos, linePos, colPos);
                          destructible |=
                              parser.assignable & 1
                                  ? 32
                                  : 16;
                          if (parser.token === 1073741842 || parser.token === 1074790415) {
                              if (parser.assignable & 2) {
                                  destructible |= 16;
                              }
                          }
                          else {
                              value = parseMemberOrUpdateExpression(parser, context, value, inGroup, tokenPos, linePos, colPos);
                              destructible = parser.assignable & 1 ? 0 : 16;
                              if (parser.token !== 1073741842 && parser.token !== 1074790415) {
                                  if (parser.token !== 1077936157)
                                      destructible |= 16;
                                  value = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, value);
                              }
                          }
                      }
                  }
                  else if (parser.token === 67174411) {
                      state |= 1;
                      value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
                      destructible = parser.assignable | 16;
                  }
                  else {
                      report(parser, 130);
                  }
              }
              else if (parser.token === 69271571) {
                  key = parseComputedPropertyName(parser, context, inGroup);
                  destructible |= parser.destructible & 256 ? 256 : 0;
                  state |= 2;
                  if (parser.token === 21) {
                      nextToken(parser, context | 32768);
                      const { tokenPos, linePos, colPos, tokenValue, token: tokenAfterColon } = parser;
                      if (parser.token & 143360) {
                          value = parsePrimaryExpression(parser, context, kind, 0, 1, 0, inGroup, 1, tokenPos, linePos, colPos);
                          const { token } = parser;
                          value = parseMemberOrUpdateExpression(parser, context, value, inGroup, tokenPos, linePos, colPos);
                          if ((parser.token & 4194304) === 4194304) {
                              destructible |=
                                  parser.assignable & 2
                                      ? 16
                                      : token === 1077936157
                                          ? 0
                                          : 32;
                              value = parseAssignmentExpressionOrPattern(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, value);
                          }
                          else if (parser.token === 1073741842 || parser.token === 1074790415) {
                              if (token === 1077936157 || token === 1074790415 || token === 1073741842) {
                                  if (parser.assignable & 2) {
                                      destructible |= 16;
                                  }
                                  else if (scope && (tokenAfterColon & 143360) === 143360) {
                                      addVarOrBlock(parser, context, scope, tokenValue, kind, origin);
                                  }
                              }
                              else {
                                  destructible |=
                                      parser.assignable & 1
                                          ? 32
                                          : 16;
                              }
                          }
                          else {
                              destructible |= 16;
                              value = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, value);
                          }
                      }
                      else if ((parser.token & 2097152) === 2097152) {
                          value =
                              parser.token === 69271571
                                  ? parseArrayExpressionOrPattern(parser, context, scope, 0, inGroup, isPattern, kind, origin, tokenPos, linePos, colPos)
                                  : parseObjectLiteralOrPattern(parser, context, scope, 0, inGroup, isPattern, kind, origin, tokenPos, linePos, colPos);
                          destructible = parser.destructible;
                          parser.assignable =
                              destructible & 16 ? 2 : 1;
                          if (parser.token === 1073741842 || parser.token === 1074790415) {
                              if (parser.assignable & 2)
                                  destructible |= 16;
                          }
                          else if (destructible & 8) {
                              report(parser, 59);
                          }
                          else {
                              value = parseMemberOrUpdateExpression(parser, context, value, inGroup, tokenPos, linePos, colPos);
                              destructible =
                                  parser.assignable & 2 ? destructible | 16 : 0;
                              if ((parser.token & 4194304) === 4194304) {
                                  if (parser.token !== 1077936157)
                                      destructible |= 16;
                                  value = parseAssignmentExpressionOrPattern(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, value);
                              }
                              else {
                                  if ((parser.token & 8454144) === 8454144) {
                                      value = parseBinaryExpression(parser, context, 1, tokenPos, linePos, colPos, 4, token, value);
                                  }
                                  if (consumeOpt(parser, context | 32768, 22)) {
                                      value = parseConditionalExpression(parser, context, value, tokenPos, linePos, colPos);
                                  }
                                  destructible |=
                                      parser.assignable & 2
                                          ? 16
                                          : 32;
                              }
                          }
                      }
                      else {
                          value = parseLeftHandSideExpression(parser, context, 1, 0, 1, tokenPos, linePos, colPos);
                          destructible |=
                              parser.assignable & 1
                                  ? 32
                                  : 16;
                          if (parser.token === 1073741842 || parser.token === 1074790415) {
                              if (parser.assignable & 2)
                                  destructible |= 16;
                          }
                          else {
                              value = parseMemberOrUpdateExpression(parser, context, value, inGroup, tokenPos, linePos, colPos);
                              destructible = parser.assignable & 1 ? 0 : 16;
                              if (parser.token !== 1073741842 && parser.token !== 1074790415) {
                                  if (parser.token !== 1077936157)
                                      destructible |= 16;
                                  value = parseAssignmentExpression(parser, context, inGroup, isPattern, tokenPos, linePos, colPos, value);
                              }
                          }
                      }
                  }
                  else if (parser.token === 67174411) {
                      state |= 1;
                      value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenPos, linePos, colPos);
                      destructible = 16;
                  }
                  else {
                      report(parser, 41);
                  }
              }
              else if (token === 8457011) {
                  consume(parser, context | 32768, 8457011);
                  state |= 8;
                  if (parser.token & 143360) {
                      const { token, line, index } = parser;
                      key = parseIdentifier(parser, context, 0);
                      state |= 1;
                      if (parser.token === 67174411) {
                          destructible |= 16;
                          value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
                      }
                      else {
                          reportMessageAt(index, line, index, token === 143468
                              ? 43
                              : token === 12399 || parser.token === 12400
                                  ? 42
                                  : 44, KeywordDescTable[token & 255]);
                      }
                  }
                  else if ((parser.token & 134217728) === 134217728) {
                      destructible |= 16;
                      key = parseLiteral(parser, context);
                      state |= 1;
                      value = parseMethodDefinition(parser, context, state, inGroup, tokenPos, linePos, colPos);
                  }
                  else if (parser.token === 69271571) {
                      destructible |= 16;
                      state |= 2 | 1;
                      key = parseComputedPropertyName(parser, context, inGroup);
                      value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
                  }
                  else {
                      report(parser, 122);
                  }
              }
              else {
                  report(parser, 28, KeywordDescTable[token & 255]);
              }
              destructible |= parser.destructible & 128 ? 128 : 0;
              parser.destructible = destructible;
              properties.push(finishNode(parser, context, tokenPos, linePos, colPos, {
                  type: 'Property',
                  key: key,
                  value,
                  kind: !(state & 768) ? 'init' : state & 512 ? 'set' : 'get',
                  computed: (state & 2) > 0,
                  method: (state & 1) > 0,
                  shorthand: (state & 4) > 0
              }));
          }
          destructible |= parser.destructible;
          if (parser.token !== 1073741842)
              break;
          nextToken(parser, context);
      }
      consume(parser, context, 1074790415);
      if (prototypeCount > 1)
          destructible |= 64;
      const node = finishNode(parser, context, start, line, column, {
          type: isPattern ? 'ObjectPattern' : 'ObjectExpression',
          properties
      });
      if (!skipInitializer && parser.token & 4194304) {
          return parseArrayOrObjectAssignmentPattern(parser, context, destructible, inGroup, isPattern, start, line, column, node);
      }
      parser.destructible = destructible;
      return node;
  }
  function parseMethodFormals(parser, context, scope, kind, type, inGroup) {
      consume(parser, context, 67174411);
      const params = [];
      parser.flags = (parser.flags | 128) ^ 128;
      if (parser.token === 16) {
          if (kind & 512) {
              report(parser, 35, 'Setter', 'one', '');
          }
          nextToken(parser, context);
          return params;
      }
      if (kind & 256) {
          report(parser, 35, 'Getter', 'no', 's');
      }
      if (kind & 512 && parser.token === 14) {
          report(parser, 36);
      }
      context = (context | 134217728) ^ 134217728;
      let setterArgs = 0;
      let isSimpleParameterList = 0;
      while (parser.token !== 1073741842) {
          let left = null;
          const { tokenPos, linePos, colPos } = parser;
          if (parser.token & 143360) {
              if ((context & 1024) < 1) {
                  if ((parser.token & 36864) === 36864) {
                      parser.flags |= 256;
                  }
                  if ((parser.token & 537079808) === 537079808) {
                      parser.flags |= 512;
                  }
              }
              left = parseAndClassifyIdentifier(parser, context, scope, kind | 1, 0, tokenPos, linePos, colPos);
          }
          else {
              if (parser.token === 2162700) {
                  left = parseObjectLiteralOrPattern(parser, context, scope, 1, inGroup, 1, type, 0, tokenPos, linePos, colPos);
              }
              else if (parser.token === 69271571) {
                  left = parseArrayExpressionOrPattern(parser, context, scope, 1, inGroup, 1, type, 0, tokenPos, linePos, colPos);
              }
              else if (parser.token === 14) {
                  left = parseSpreadOrRestElement(parser, context, scope, 16, type, 0, 0, inGroup, 1, tokenPos, linePos, colPos);
              }
              isSimpleParameterList = 1;
              if (parser.destructible & (32 | 16))
                  report(parser, 47);
          }
          if (parser.token === 1077936157) {
              nextToken(parser, context | 32768);
              isSimpleParameterList = 1;
              const right = parseExpression(parser, context, 1, 1, 0, parser.tokenPos, parser.linePos, parser.colPos);
              left = finishNode(parser, context, tokenPos, linePos, colPos, {
                  type: 'AssignmentPattern',
                  left: left,
                  right
              });
          }
          setterArgs++;
          params.push(left);
          if (!consumeOpt(parser, context, 1073741842))
              break;
          if (parser.token === 16) {
              break;
          }
      }
      if (kind & 512 && setterArgs !== 1) {
          report(parser, 35, 'Setter', 'one', '');
      }
      if (scope && scope.scopeError !== void 0)
          reportScopeError(scope.scopeError);
      if (isSimpleParameterList)
          parser.flags |= 128;
      consume(parser, context, 16);
      return params;
  }
  function parseComputedPropertyName(parser, context, inGroup) {
      nextToken(parser, context | 32768);
      const key = parseExpression(parser, (context | 134217728) ^ 134217728, 1, 0, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
      consume(parser, context, 20);
      return key;
  }
  function parseParenthesizedExpression(parser, context, canAssign, kind, origin, start, line, column) {
      parser.flags = (parser.flags | 128) ^ 128;
      nextToken(parser, context | 32768 | 1073741824);
      const scope = context & 64 ? addChildScope(createScope(), 1024) : void 0;
      context = (context | 134217728 | 8192) ^ (8192 | 134217728);
      if (consumeOpt(parser, context, 16)) {
          return parseParenthesizedArrow(parser, context, scope, [], canAssign, 0, start, line, column);
      }
      let destructible = 0;
      parser.destructible &= ~(256 | 128);
      let expr;
      let expressions = [];
      let isSequence = 0;
      let isSimpleParameterList = 0;
      const { tokenPos: iStart, linePos: lStart, colPos: cStart } = parser;
      parser.assignable = 1;
      while (parser.token !== 16) {
          const { token, tokenPos, linePos, colPos } = parser;
          if (token & (143360 | 4096)) {
              if (scope)
                  addBlockName(parser, context, scope, parser.tokenValue, 1, 0);
              expr = parsePrimaryExpression(parser, context, kind, 0, 1, 0, 1, 1, tokenPos, linePos, colPos);
              if (parser.token === 16 || parser.token === 1073741842) {
                  if (parser.assignable & 2) {
                      destructible |= 16;
                      isSimpleParameterList = 1;
                  }
                  else if ((token & 537079808) === 537079808 ||
                      (token & 36864) === 36864) {
                      isSimpleParameterList = 1;
                  }
              }
              else {
                  if (parser.token === 1077936157) {
                      isSimpleParameterList = 1;
                  }
                  else {
                      destructible |= 16;
                  }
                  expr = parseMemberOrUpdateExpression(parser, context, expr, 1, tokenPos, linePos, colPos);
                  if (parser.token !== 16 && parser.token !== 1073741842) {
                      expr = parseAssignmentExpression(parser, context, 1, 0, tokenPos, linePos, colPos, expr);
                  }
              }
          }
          else if ((token & 2097152) === 2097152) {
              expr =
                  token === 2162700
                      ? parseObjectLiteralOrPattern(parser, context | 1073741824, scope, 0, 1, 0, kind, origin, tokenPos, linePos, colPos)
                      : parseArrayExpressionOrPattern(parser, context | 1073741824, scope, 0, 1, 0, kind, origin, tokenPos, linePos, colPos);
              destructible |= parser.destructible;
              isSimpleParameterList = 1;
              parser.assignable = 2;
              if (parser.token !== 16 && parser.token !== 1073741842) {
                  if (destructible & 8)
                      report(parser, 118);
                  expr = parseMemberOrUpdateExpression(parser, context, expr, 0, tokenPos, linePos, colPos);
                  destructible |= 16;
                  if (parser.token !== 16 && parser.token !== 1073741842) {
                      expr = parseAssignmentExpression(parser, context, 0, 0, tokenPos, linePos, colPos, expr);
                  }
              }
          }
          else if (token === 14) {
              expr = parseSpreadOrRestElement(parser, context, scope, 16, kind, origin, 0, 1, 0, tokenPos, linePos, colPos);
              if (parser.destructible & 16)
                  report(parser, 71);
              isSimpleParameterList = 1;
              if (isSequence && (parser.token === 16 || parser.token === 1073741842)) {
                  expressions.push(expr);
              }
              destructible |= 8;
              break;
          }
          else {
              destructible |= 16;
              expr = parseExpression(parser, context, 1, 0, 1, tokenPos, linePos, colPos);
              if (isSequence && (parser.token === 16 || parser.token === 1073741842)) {
                  expressions.push(expr);
              }
              if (parser.token === 1073741842) {
                  if (!isSequence) {
                      isSequence = 1;
                      expressions = [expr];
                  }
              }
              if (isSequence) {
                  while (consumeOpt(parser, context | 32768, 1073741842)) {
                      expressions.push(parseExpression(parser, context, 1, 0, 1, parser.tokenPos, parser.linePos, parser.colPos));
                  }
                  parser.assignable = 2;
                  expr = finishNode(parser, context, iStart, lStart, cStart, {
                      type: 'SequenceExpression',
                      expressions
                  });
              }
              consume(parser, context, 16);
              parser.destructible = destructible;
              return expr;
          }
          if (isSequence && (parser.token === 16 || parser.token === 1073741842)) {
              expressions.push(expr);
          }
          if (!consumeOpt(parser, context | 32768, 1073741842))
              break;
          if (!isSequence) {
              isSequence = 1;
              expressions = [expr];
          }
          if (parser.token === 16) {
              destructible |= 8;
              break;
          }
      }
      if (isSequence) {
          parser.assignable = 2;
          expr = finishNode(parser, context, iStart, lStart, cStart, {
              type: 'SequenceExpression',
              expressions
          });
      }
      consume(parser, context, 16);
      if (destructible & 16 && destructible & 8)
          report(parser, 145);
      destructible |=
          parser.destructible & 256
              ? 256
              : 0 | (parser.destructible & 128)
                  ? 128
                  : 0;
      if (parser.token === 10) {
          if (destructible & (32 | 16))
              report(parser, 46);
          if (context & (4194304 | 2048) && destructible & 128)
              report(parser, 29);
          if (context & (1024 | 2097152) && destructible & 256) {
              report(parser, 30);
          }
          if (isSimpleParameterList)
              parser.flags |= 128;
          return parseParenthesizedArrow(parser, context, scope, isSequence ? expressions : [expr], canAssign, 0, start, line, column);
      }
      else if (destructible & 8) {
          report(parser, 139);
      }
      parser.destructible = ((parser.destructible | 256) ^ 256) | destructible;
      return context & 128
          ? finishNode(parser, context, iStart, lStart, cStart, {
              type: 'ParenthesizedExpression',
              expression: expr
          })
          : expr;
  }
  function parseIdentifierOrArrow(parser, context, start, line, column) {
      const { tokenValue } = parser;
      const expr = parseIdentifier(parser, context, 0);
      parser.assignable = 1;
      if (parser.token === 10) {
          let scope = void 0;
          if (context & 64)
              scope = createArrowHeadParsingScope(parser, context, tokenValue);
          parser.flags = (parser.flags | 128) ^ 128;
          return parseArrowFunctionExpression(parser, context, scope, [expr], 0, start, line, column);
      }
      return expr;
  }
  function parseArrowFromIdentifier(parser, context, value, expr, inNew, canAssign, isAsync, start, line, column) {
      if (!canAssign)
          report(parser, 54);
      if (inNew)
          report(parser, 48);
      parser.flags &= ~128;
      const scope = context & 64 ? createArrowHeadParsingScope(parser, context, value) : void 0;
      return parseArrowFunctionExpression(parser, context, scope, [expr], isAsync, start, line, column);
  }
  function parseParenthesizedArrow(parser, context, scope, params, canAssign, isAsync, start, line, column) {
      if (!canAssign)
          report(parser, 54);
      for (let i = 0; i < params.length; ++i)
          reinterpretToPattern(parser, params[i]);
      return parseArrowFunctionExpression(parser, context, scope, params, isAsync, start, line, column);
  }
  function parseArrowFunctionExpression(parser, context, scope, params, isAsync, start, line, column) {
      if (parser.flags & 1)
          report(parser, 45);
      consume(parser, context | 32768, 10);
      context = ((context | 15728640) ^ 15728640) | (isAsync << 22);
      const expression = parser.token !== 2162700;
      let body;
      if (scope && scope.scopeError !== void 0) {
          reportScopeError(scope.scopeError);
      }
      if (expression) {
          body = parseExpression(parser, context, 1, 0, 0, parser.tokenPos, parser.linePos, parser.colPos);
      }
      else {
          if (scope)
              scope = addChildScope(scope, 128);
          body = parseFunctionBody(parser, (context | 134221824 | 8192 | 16384) ^
              (134221824 | 8192 | 16384), scope, 16, void 0, void 0);
          switch (parser.token) {
              case 69271571:
                  if ((parser.flags & 1) < 1) {
                      report(parser, 112);
                  }
                  break;
              case 67108877:
              case 67174409:
              case 22:
                  report(parser, 113);
              case 67174411:
                  if ((parser.flags & 1) < 1) {
                      report(parser, 112);
                  }
                  parser.flags |= 1024;
                  break;
          }
          if ((parser.token & 8454144) === 8454144 && (parser.flags & 1) < 1)
              report(parser, 28, KeywordDescTable[parser.token & 255]);
          if ((parser.token & 33619968) === 33619968)
              report(parser, 121);
      }
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'ArrowFunctionExpression',
          params,
          body,
          async: isAsync === 1,
          expression
      });
  }
  function parseFormalParametersOrFormalList(parser, context, scope, inGroup, kind) {
      consume(parser, context, 67174411);
      parser.flags = (parser.flags | 128) ^ 128;
      const params = [];
      if (consumeOpt(parser, context, 16))
          return params;
      context = (context | 134217728) ^ 134217728;
      let isSimpleParameterList = 0;
      while (parser.token !== 1073741842) {
          let left;
          const { tokenPos, linePos, colPos } = parser;
          if (parser.token & 143360) {
              if ((context & 1024) < 1) {
                  if ((parser.token & 36864) === 36864) {
                      parser.flags |= 256;
                  }
                  if ((parser.token & 537079808) === 537079808) {
                      parser.flags |= 512;
                  }
              }
              left = parseAndClassifyIdentifier(parser, context, scope, kind | 1, 0, tokenPos, linePos, colPos);
          }
          else {
              if (parser.token === 2162700) {
                  left = parseObjectLiteralOrPattern(parser, context, scope, 1, inGroup, 1, kind, 0, tokenPos, linePos, colPos);
              }
              else if (parser.token === 69271571) {
                  left = parseArrayExpressionOrPattern(parser, context, scope, 1, inGroup, 1, kind, 0, tokenPos, linePos, colPos);
              }
              else if (parser.token === 14) {
                  left = parseSpreadOrRestElement(parser, context, scope, 16, kind, 0, 0, inGroup, 1, tokenPos, linePos, colPos);
              }
              else {
                  report(parser, 28, KeywordDescTable[parser.token & 255]);
              }
              isSimpleParameterList = 1;
              if (parser.destructible & (32 | 16)) {
                  report(parser, 47);
              }
          }
          if (parser.token === 1077936157) {
              nextToken(parser, context | 32768);
              isSimpleParameterList = 1;
              const right = parseExpression(parser, context, 1, 1, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
              left = finishNode(parser, context, tokenPos, linePos, colPos, {
                  type: 'AssignmentPattern',
                  left,
                  right
              });
          }
          params.push(left);
          if (!consumeOpt(parser, context, 1073741842))
              break;
          if (parser.token === 16) {
              break;
          }
      }
      if (isSimpleParameterList)
          parser.flags |= 128;
      if (scope && ((isSimpleParameterList || context & 1024) && scope.scopeError !== void 0)) {
          reportScopeError(scope.scopeError);
      }
      consume(parser, context, 16);
      return params;
  }
  function parseMembeExpressionNoCall(parser, context, expr, inGroup, start, line, column) {
      const { token } = parser;
      if (token & 67108864) {
          if (token === 67108877) {
              nextToken(parser, context | 1073741824);
              parser.assignable = 1;
              const property = parsePropertyOrPrivatePropertyName(parser, context);
              return parseMembeExpressionNoCall(parser, context, finishNode(parser, context, start, line, column, {
                  type: 'MemberExpression',
                  object: expr,
                  computed: false,
                  property
              }), 0, start, line, column);
          }
          else if (token === 69271571) {
              nextToken(parser, context | 32768);
              const { tokenPos, linePos, colPos } = parser;
              const property = parseExpressions(parser, context, inGroup, 1, tokenPos, linePos, colPos);
              consume(parser, context, 20);
              parser.assignable = 1;
              return parseMembeExpressionNoCall(parser, context, finishNode(parser, context, start, line, column, {
                  type: 'MemberExpression',
                  object: expr,
                  computed: true,
                  property
              }), 0, start, line, column);
          }
          else if (token === 67174408 || token === 67174409) {
              parser.assignable = 2;
              return parseMembeExpressionNoCall(parser, context, finishNode(parser, context, parser.tokenPos, parser.linePos, parser.colPos, {
                  type: 'TaggedTemplateExpression',
                  tag: expr,
                  quasi: parser.token === 67174408
                      ? parseTemplate(parser, context | 65536, start, line, column)
                      : parseTemplateLiteral(parser, context, start, line, column)
              }), 0, start, line, column);
          }
      }
      return expr;
  }
  function parseNewExpression(parser, context, inGroup, start, line, column) {
      const id = parseIdentifier(parser, context | 32768, 0);
      const { tokenPos, linePos, colPos } = parser;
      if (consumeOpt(parser, context, 67108877)) {
          if (context & 67108864 && parser.token === 143491) {
              parser.assignable = 2;
              return parseMetaProperty(parser, context, id, start, line, column);
          }
          report(parser, 91);
      }
      parser.assignable = 2;
      if ((parser.token & 16842752) === 16842752) {
          report(parser, 62, KeywordDescTable[parser.token & 255]);
      }
      const expr = parsePrimaryExpression(parser, context, 2, 1, 0, 0, inGroup, 1, tokenPos, linePos, colPos);
      context = (context | 134217728) ^ 134217728;
      if (parser.token === 67108988)
          report(parser, 162);
      const callee = parseMembeExpressionNoCall(parser, context, expr, inGroup, tokenPos, linePos, colPos);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'NewExpression',
          callee,
          arguments: parser.token === 67174411 ? parseArguments(parser, context, inGroup) : []
      });
  }
  function parseMetaProperty(parser, context, meta, start, line, column) {
      const property = parseIdentifier(parser, context, 0);
      return finishNode(parser, context, start, line, column, {
          type: 'MetaProperty',
          meta,
          property
      });
  }
  function parseAsyncArrowAfterIdent(parser, context, canAssign, start, line, column) {
      if (parser.token === 209005)
          report(parser, 29);
      if (context & (1024 | 2097152) && parser.token === 241770) {
          report(parser, 30);
      }
      if ((parser.token & 537079808) === 537079808) {
          parser.flags |= 512;
      }
      return parseArrowFromIdentifier(parser, context, parser.tokenValue, parseIdentifier(parser, context, 0), 0, canAssign, 1, start, line, column);
  }
  function parseAsyncArrowOrCallExpression(parser, context, callee, canAssign, kind, origin, flags, start, line, column) {
      nextToken(parser, context | 32768);
      const scope = context & 64 ? addChildScope(createScope(), 1024) : void 0;
      context = (context | 134217728) ^ 134217728;
      if (consumeOpt(parser, context, 16)) {
          if (parser.token === 10) {
              if (flags & 1)
                  report(parser, 45);
              return parseParenthesizedArrow(parser, context, scope, [], canAssign, 1, start, line, column);
          }
          return finishNode(parser, context, start, line, column, {
              type: 'CallExpression',
              callee,
              arguments: []
          });
      }
      let destructible = 0;
      let expr = null;
      let isSimpleParameterList = 0;
      parser.destructible =
          (parser.destructible | 256 | 128) ^
              (256 | 128);
      const params = [];
      while (parser.token !== 16) {
          const { token, tokenPos, linePos, colPos } = parser;
          if (token & (143360 | 4096)) {
              if (scope)
                  addBlockName(parser, context, scope, parser.tokenValue, kind, 0);
              expr = parsePrimaryExpression(parser, context, kind, 0, 1, 0, 1, 1, tokenPos, linePos, colPos);
              if (parser.token === 16 || parser.token === 1073741842) {
                  if (parser.assignable & 2) {
                      destructible |= 16;
                      isSimpleParameterList = 1;
                  }
                  else if ((token & 537079808) === 537079808) {
                      parser.flags |= 512;
                  }
                  else if ((token & 36864) === 36864) {
                      parser.flags |= 256;
                  }
              }
              else {
                  if (parser.token === 1077936157) {
                      isSimpleParameterList = 1;
                  }
                  else {
                      destructible |= 16;
                  }
                  expr = parseMemberOrUpdateExpression(parser, context, expr, 1, tokenPos, linePos, colPos);
                  if (parser.token !== 16 && parser.token !== 1073741842) {
                      expr = parseAssignmentExpression(parser, context, 1, 0, tokenPos, linePos, colPos, expr);
                  }
              }
          }
          else if (token & 2097152) {
              expr =
                  token === 2162700
                      ? parseObjectLiteralOrPattern(parser, context, scope, 0, 1, 0, kind, origin, tokenPos, linePos, colPos)
                      : parseArrayExpressionOrPattern(parser, context, scope, 0, 1, 0, kind, origin, tokenPos, linePos, colPos);
              destructible |= parser.destructible;
              isSimpleParameterList = 1;
              if (parser.token !== 16 && parser.token !== 1073741842) {
                  if (destructible & 8)
                      report(parser, 118);
                  expr = parseMemberOrUpdateExpression(parser, context, expr, 0, tokenPos, linePos, colPos);
                  destructible |= 16;
                  if ((parser.token & 8454144) === 8454144) {
                      expr = parseBinaryExpression(parser, context, 1, start, line, column, 4, token, expr);
                  }
                  if (consumeOpt(parser, context | 32768, 22)) {
                      expr = parseConditionalExpression(parser, context, expr, start, line, column);
                  }
              }
          }
          else if (token === 14) {
              expr = parseSpreadOrRestElement(parser, context, scope, 16, kind, origin, 1, 1, 0, tokenPos, linePos, colPos);
              destructible |= (parser.token === 16 ? 0 : 16) | parser.destructible;
              isSimpleParameterList = 1;
          }
          else {
              expr = parseExpression(parser, context, 1, 0, 0, tokenPos, linePos, colPos);
              destructible = parser.assignable;
              params.push(expr);
              while (consumeOpt(parser, context | 32768, 1073741842)) {
                  params.push(parseExpression(parser, context, 1, 0, 0, tokenPos, linePos, colPos));
              }
              destructible |= parser.assignable;
              consume(parser, context, 16);
              parser.destructible = destructible | 16;
              parser.assignable = 2;
              return finishNode(parser, context, start, line, column, {
                  type: 'CallExpression',
                  callee,
                  arguments: params
              });
          }
          params.push(expr);
          if (!consumeOpt(parser, context | 32768, 1073741842))
              break;
      }
      consume(parser, context, 16);
      destructible |=
          parser.destructible & 256
              ? 256
              : 0 | (parser.destructible & 128)
                  ? 128
                  : 0;
      if (parser.token === 10) {
          if (destructible & (32 | 16))
              report(parser, 25);
          if (parser.flags & 1 || flags & 1)
              report(parser, 45);
          if (destructible & 128)
              report(parser, 29);
          if (context & (1024 | 2097152) && destructible & 256)
              report(parser, 30);
          if (isSimpleParameterList)
              parser.flags |= 128;
          return parseParenthesizedArrow(parser, context, scope, params, canAssign, 1, start, line, column);
      }
      else if (destructible & 8) {
          report(parser, 59);
      }
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'CallExpression',
          callee,
          arguments: params
      });
  }
  function parseRegExpLiteral(parser, context, start, line, column) {
      const { tokenRaw, tokenRegExp, tokenValue } = parser;
      nextToken(parser, context);
      parser.assignable = 2;
      return context & 512
          ? finishNode(parser, context, start, line, column, {
              type: 'Literal',
              value: tokenValue,
              regex: tokenRegExp,
              raw: tokenRaw
          })
          : finishNode(parser, context, start, line, column, {
              type: 'Literal',
              value: tokenValue,
              regex: tokenRegExp
          });
  }
  function parseClassDeclaration(parser, context, scope, flags, start, line, column) {
      context = (context | 16777216 | 1024) ^ 16777216;
      const decorators = context & 1 ? parseDecorators(parser, context) : [];
      nextToken(parser, context);
      let id = null;
      let superClass = null;
      const { tokenValue } = parser;
      if (((parser.token & 4351) ^ 84) >
          4096) {
          if (isStrictReservedWord(parser, context, parser.token)) {
              report(parser, 114);
          }
          if ((parser.token & 537079808) === 537079808) {
              report(parser, 115);
          }
          if (scope) {
              addBlockName(parser, context, scope, tokenValue, 32, 0);
              if (flags) {
                  if (flags & 2) {
                      declareUnboundVariable(parser, tokenValue);
                  }
              }
          }
          id = parseIdentifier(parser, context, 0);
      }
      else {
          if ((flags & 1) < 1)
              report(parser, 37, 'Class');
      }
      let inheritedContext = context;
      if (consumeOpt(parser, context | 32768, 20564)) {
          superClass = parseLeftHandSideExpression(parser, context, 0, 0, 0, parser.tokenPos, parser.linePos, parser.colPos);
          inheritedContext |= 524288;
      }
      else {
          inheritedContext = (inheritedContext | 524288) ^ 524288;
      }
      const body = parseClassBody(parser, inheritedContext, context, scope, 2, 8, 0);
      return finishNode(parser, context, start, line, column, context & 1
          ? {
              type: 'ClassDeclaration',
              id,
              superClass,
              decorators,
              body
          }
          : {
              type: 'ClassDeclaration',
              id,
              superClass,
              body
          });
  }
  function parseClassExpression(parser, context, inGroup, start, line, column) {
      let id = null;
      let superClass = null;
      context = (context | 1024 | 16777216) ^ 16777216;
      const decorators = context & 1 ? parseDecorators(parser, context) : [];
      nextToken(parser, context);
      if (((parser.token & 0x10ff) ^ 0x54) > 0x1000) {
          if (isStrictReservedWord(parser, context, parser.token))
              report(parser, 114);
          if ((parser.token & 537079808) === 537079808) {
              report(parser, 115);
          }
          id = parseIdentifier(parser, context, 0);
      }
      let inheritedContext = context;
      if (consumeOpt(parser, context | 32768, 20564)) {
          superClass = parseLeftHandSideExpression(parser, context, 0, inGroup, 0, parser.tokenPos, parser.linePos, parser.colPos);
          inheritedContext |= 524288;
      }
      else {
          inheritedContext = (inheritedContext | 524288) ^ 524288;
      }
      const body = parseClassBody(parser, inheritedContext, context, void 0, 2, 0, inGroup);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, context & 1
          ? {
              type: 'ClassExpression',
              id,
              superClass,
              decorators,
              body
          }
          : {
              type: 'ClassExpression',
              id,
              superClass,
              body
          });
  }
  function parseDecorators(parser, context) {
      const list = [];
      while (parser.token === 130) {
          list.push(parseDecoratorList(parser, context, parser.tokenPos, parser.linePos, parser.colPos));
      }
      return list;
  }
  function parseDecoratorList(parser, context, start, line, column) {
      nextToken(parser, context | 32768);
      let expression = parsePrimaryExpression(parser, context, 2, 0, 1, 0, 0, 1, start, line, column);
      expression = parseMemberOrUpdateExpression(parser, context, expression, 0, start, line, column);
      return finishNode(parser, context, start, line, column, {
          type: 'Decorator',
          expression
      });
  }
  function parseClassBody(parser, context, inheritedContext, scope, kind, origin, inGroup) {
      const { tokenPos, linePos, colPos } = parser;
      consume(parser, context | 32768, 2162700);
      context = (context | 134217728) ^ 134217728;
      parser.flags = (parser.flags | 32) ^ 32;
      const body = [];
      let decorators = [];
      while (parser.token !== 1074790415) {
          let length = 0;
          decorators = parseDecorators(parser, context);
          length = decorators.length;
          if (length > 0 && parser.tokenValue === 'constructor') {
              report(parser, 106);
          }
          if (parser.token === 1074790415)
              report(parser, 105);
          if (consumeOpt(parser, context, 1074790417)) {
              if (length > 0)
                  report(parser, 116);
              continue;
          }
          body.push(parseClassElementList(parser, context, scope, inheritedContext, kind, decorators, 0, inGroup, parser.tokenPos, parser.linePos, parser.colPos));
      }
      consume(parser, origin & 8 ? context | 32768 : context, 1074790415);
      return finishNode(parser, context, tokenPos, linePos, colPos, {
          type: 'ClassBody',
          body
      });
  }
  function parseClassElementList(parser, context, scope, inheritedContext, type, decorators, isStatic, inGroup, start, line, column) {
      let kind = isStatic ? 32 : 0;
      let key = null;
      const { token, tokenPos, linePos, colPos } = parser;
      if (token & (143360 | 36864)) {
          key = parseIdentifier(parser, context, 0);
          switch (token) {
              case 36969:
                  if (!isStatic && parser.token !== 67174411) {
                      return parseClassElementList(parser, context, scope, inheritedContext, type, decorators, 1, inGroup, start, line, column);
                  }
                  break;
              case 143468:
                  if (parser.token !== 67174411 && (parser.flags & 1) < 1) {
                      if (context & 1 && (parser.token & 1073741824) === 1073741824) {
                          return parseFieldDefinition(parser, context, key, kind, decorators, tokenPos, linePos, colPos);
                      }
                      kind |= 16 | (optionalBit(parser, context, 8457011) ? 8 : 0);
                  }
                  break;
              case 12399:
                  if (parser.token !== 67174411) {
                      if (context & 1 && (parser.token & 1073741824) === 1073741824) {
                          return parseFieldDefinition(parser, context, key, kind, decorators, tokenPos, linePos, colPos);
                      }
                      kind |= 256;
                  }
                  break;
              case 12400:
                  if (parser.token !== 67174411) {
                      if (context & 1 && (parser.token & 1073741824) === 1073741824) {
                          return parseFieldDefinition(parser, context, key, kind, decorators, tokenPos, linePos, colPos);
                      }
                      kind |= 512;
                  }
                  break;
          }
      }
      else if (token === 69271571) {
          kind = 2;
          key = parseComputedPropertyName(parser, inheritedContext, inGroup);
      }
      else if ((token & 134217728) === 134217728) {
          key = parseLiteral(parser, context);
      }
      else if (token === 8457011) {
          kind |= 8;
          nextToken(parser, context);
      }
      else if (context & 1 && parser.token === 128) {
          kind |= 4096;
          key = parsePrivateName(parser, context, tokenPos, linePos, colPos);
          context = context | 16384;
      }
      else if (context & 1 && (parser.token & 1073741824) === 1073741824) {
          kind |= 128;
          context = context | 16384;
      }
      else if (token === 119) {
          key = parseIdentifier(parser, context, 0);
          if (parser.token !== 67174411)
              report(parser, 28, KeywordDescTable[parser.token & 255]);
      }
      else {
          report(parser, 28, KeywordDescTable[parser.token & 255]);
      }
      if (kind & (8 | 16 | 768)) {
          if (parser.token & 143360) {
              key = parseIdentifier(parser, context, 0);
          }
          else if ((parser.token & 134217728) === 134217728) {
              key = parseLiteral(parser, context);
          }
          else if (parser.token === 69271571) {
              kind |= 2;
              key = parseComputedPropertyName(parser, context, 0);
          }
          else if (parser.token === 119) {
              key = parseIdentifier(parser, context, 0);
          }
          else if (context & 1 && parser.token === 128) {
              kind |= 4096;
              key = parsePrivateName(parser, context, tokenPos, linePos, colPos);
          }
          else
              report(parser, 131);
      }
      if ((kind & 2) < 1) {
          if (parser.tokenValue === 'constructor') {
              if ((parser.token & 1073741824) === 1073741824) {
                  report(parser, 125);
              }
              else if ((kind & 32) < 1 && parser.token === 67174411) {
                  if (kind & (768 | 16 | 128 | 8)) {
                      report(parser, 50, 'accessor');
                  }
                  else if ((context & 524288) < 1) {
                      if (parser.flags & 32)
                          report(parser, 51);
                      else
                          parser.flags |= 32;
                  }
              }
              kind |= 64;
          }
          else if ((kind & 4096) < 1 &&
              kind & (32 | 768 | 8 | 16) &&
              parser.tokenValue === 'prototype') {
              report(parser, 49);
          }
      }
      if (context & 1 && parser.token !== 67174411) {
          return parseFieldDefinition(parser, context, key, kind, decorators, tokenPos, linePos, colPos);
      }
      const value = parseMethodDefinition(parser, context, kind, inGroup, parser.tokenPos, parser.linePos, parser.colPos);
      return finishNode(parser, context, start, line, column, context & 1
          ? {
              type: 'MethodDefinition',
              kind: (kind & 32) < 1 && kind & 64
                  ? 'constructor'
                  : kind & 256
                      ? 'get'
                      : kind & 512
                          ? 'set'
                          : 'method',
              static: (kind & 32) > 0,
              computed: (kind & 2) > 0,
              key,
              decorators,
              value
          }
          : {
              type: 'MethodDefinition',
              kind: (kind & 32) < 1 && kind & 64
                  ? 'constructor'
                  : kind & 256
                      ? 'get'
                      : kind & 512
                          ? 'set'
                          : 'method',
              static: (kind & 32) > 0,
              computed: (kind & 2) > 0,
              key,
              value
          });
  }
  function parsePrivateName(parser, context, start, line, column) {
      nextToken(parser, context);
      const { tokenValue } = parser;
      if (tokenValue === 'constructor')
          report(parser, 124);
      nextToken(parser, context);
      return finishNode(parser, context, start, line, column, {
          type: 'PrivateName',
          name: tokenValue
      });
  }
  function parseFieldDefinition(parser, context, key, state, decorators, start, line, column) {
      let value = null;
      if (state & 8)
          report(parser, 0);
      if (parser.token === 1077936157) {
          nextToken(parser, context | 32768);
          const { tokenPos, linePos, colPos } = parser;
          if (parser.token === 537079925)
              report(parser, 115);
          value = parsePrimaryExpression(parser, context | 16384, 2, 0, 1, 0, 0, 1, tokenPos, linePos, colPos);
          if ((parser.token & 1073741824) !== 1073741824) {
              value = parseMemberOrUpdateExpression(parser, context | 16384, value, 0, tokenPos, linePos, colPos);
              value = parseAssignmentExpression(parser, context | 16384, 0, 0, tokenPos, linePos, colPos, value);
              if (parser.token === 1073741842) {
                  value = parseSequenceExpression(parser, context, 0, start, line, column, value);
              }
          }
      }
      return finishNode(parser, context, start, line, column, {
          type: 'FieldDefinition',
          key,
          value,
          static: (state & 32) > 0,
          computed: (state & 2) > 0,
          decorators
      });
  }
  function parseBindingPattern(parser, context, scope, type, origin, start, line, column) {
      if (parser.token & 143360)
          return parseAndClassifyIdentifier(parser, context, scope, type, origin, start, line, column);
      if ((parser.token & 2097152) !== 2097152)
          report(parser, 28, KeywordDescTable[parser.token & 255]);
      const left = parser.token === 69271571
          ? parseArrayExpressionOrPattern(parser, context, scope, 1, 0, 1, type, origin, start, line, column)
          : parseObjectLiteralOrPattern(parser, context, scope, 1, 0, 1, type, origin, start, line, column);
      if (parser.destructible & 16)
          report(parser, 47);
      if (parser.destructible & 32)
          report(parser, 47);
      return left;
  }
  function parseAndClassifyIdentifier(parser, context, scope, kind, origin, start, line, column) {
      const { tokenValue, token } = parser;
      if (context & 1024) {
          if ((token & 537079808) === 537079808) {
              report(parser, 115);
          }
          else if ((token & 36864) === 36864) {
              report(parser, 114);
          }
      }
      if ((token & 20480) === 20480) {
          report(parser, 99);
      }
      if (context & (2048 | 2097152) && token === 241770) {
          report(parser, 30);
      }
      if (token === 241736) {
          if (kind & (8 | 16))
              report(parser, 97);
      }
      if (context & (4194304 | 2048) && token === 209005) {
          report(parser, 95);
      }
      nextToken(parser, context);
      if (scope)
          addVarOrBlock(parser, context, scope, tokenValue, kind, origin);
      return finishNode(parser, context, start, line, column, {
          type: 'Identifier',
          name: tokenValue
      });
  }
  function parseJSXRootElementOrFragment(parser, context, inJSXChild, start, line, column) {
      nextToken(parser, context);
      if (parser.token === 8456256) {
          return finishNode(parser, context, start, line, column, {
              type: 'JSXFragment',
              openingFragment: parseOpeningFragment(parser, context, start, line, column),
              children: parseJSXChildren(parser, context),
              closingFragment: parseJSXClosingFragment(parser, context, inJSXChild, parser.tokenPos, parser.linePos, parser.colPos)
          });
      }
      let closingElement = null;
      let children = [];
      const openingElement = parseJSXOpeningFragmentOrSelfCloseElement(parser, context, inJSXChild, start, line, column);
      if (!openingElement.selfClosing) {
          children = parseJSXChildren(parser, context);
          closingElement = parseJSXClosingElement(parser, context, inJSXChild, parser.tokenPos, parser.linePos, parser.colPos);
          const close = isEqualTagName(closingElement.name);
          if (isEqualTagName(openingElement.name) !== close)
              report(parser, 149, close);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'JSXElement',
          children,
          openingElement,
          closingElement
      });
  }
  function parseOpeningFragment(parser, context, start, line, column) {
      scanJSXToken(parser);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXOpeningFragment'
      });
  }
  function parseJSXClosingElement(parser, context, inJSXChild, start, line, column) {
      consume(parser, context, 25);
      const name = parseJSXElementName(parser, context, parser.tokenPos, parser.linePos, parser.colPos);
      if (inJSXChild) {
          consume(parser, context, 8456256);
      }
      else {
          parser.token = scanJSXToken(parser);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'JSXClosingElement',
          name
      });
  }
  function parseJSXClosingFragment(parser, context, inJSXChild, start, line, column) {
      consume(parser, context, 25);
      if (inJSXChild) {
          consume(parser, context, 8456256);
      }
      else {
          consume(parser, context, 8456256);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'JSXClosingFragment'
      });
  }
  function parseJSXChildren(parser, context) {
      const children = [];
      while (parser.token !== 25) {
          parser.index = parser.tokenPos = parser.startPos;
          parser.column = parser.colPos = parser.startColumn;
          parser.line = parser.linePos = parser.startLine;
          scanJSXToken(parser);
          children.push(parseJSXChild(parser, context, parser.tokenPos, parser.linePos, parser.colPos));
      }
      return children;
  }
  function parseJSXChild(parser, context, start, line, column) {
      if (parser.token === 135)
          return parseJSXText(parser, context, start, line, column);
      if (parser.token === 2162700)
          return parseJSXExpressionContainer(parser, context, 0, 0, start, line, column);
      if (parser.token === 8456255)
          return parseJSXRootElementOrFragment(parser, context, 0, start, line, column);
      report(parser, 0);
  }
  function parseJSXText(parser, context, start, line, column) {
      scanJSXToken(parser);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXText',
          value: parser.tokenValue
      });
  }
  function parseJSXOpeningFragmentOrSelfCloseElement(parser, context, inJSXChild, start, line, column) {
      if ((parser.token & 143360) !== 143360 && (parser.token & 4096) !== 4096)
          report(parser, 0);
      const tagName = parseJSXElementName(parser, context, parser.tokenPos, parser.linePos, parser.colPos);
      const attributes = parseJSXAttributes(parser, context);
      const selfClosing = parser.token === 8457013;
      if (parser.token === 8456256) {
          scanJSXToken(parser);
      }
      else {
          consume(parser, context, 8457013);
          if (inJSXChild) {
              consume(parser, context, 8456256);
          }
          else {
              scanJSXToken(parser);
          }
      }
      return finishNode(parser, context, start, line, column, {
          type: 'JSXOpeningElement',
          name: tagName,
          attributes,
          selfClosing
      });
  }
  function parseJSXElementName(parser, context, start, line, column) {
      scanJSXIdentifier(parser);
      let key = parseJSXIdentifier(parser, context, start, line, column);
      if (parser.token === 21)
          return parseJSXNamespacedName(parser, context, key, start, line, column);
      while (consumeOpt(parser, context, 67108877)) {
          scanJSXIdentifier(parser);
          key = parseJSXMemberExpression(parser, context, key, start, line, column);
      }
      return key;
  }
  function parseJSXMemberExpression(parser, context, object, start, line, column) {
      const property = parseJSXIdentifier(parser, context, parser.tokenPos, parser.linePos, parser.colPos);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXMemberExpression',
          object,
          property
      });
  }
  function parseJSXAttributes(parser, context) {
      const attributes = [];
      while (parser.token !== 8457013 && parser.token !== 8456256) {
          attributes.push(parseJsxAttribute(parser, context, parser.tokenPos, parser.linePos, parser.colPos));
      }
      return attributes;
  }
  function parseJSXSpreadAttribute(parser, context, start, line, column) {
      nextToken(parser, context);
      consume(parser, context, 14);
      const expression = parseExpression(parser, context, 1, 0, 0, parser.tokenPos, parser.linePos, parser.colPos);
      consume(parser, context, 1074790415);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXSpreadAttribute',
          argument: expression
      });
  }
  function parseJsxAttribute(parser, context, start, line, column) {
      if (parser.token === 2162700)
          return parseJSXSpreadAttribute(parser, context, start, line, column);
      scanJSXIdentifier(parser);
      let value = null;
      let name = parseJSXIdentifier(parser, context, start, line, column);
      if (parser.token === 21) {
          name = parseJSXNamespacedName(parser, context, name, start, line, column);
      }
      if (parser.token === 1077936157) {
          const token = scanJSXAttributeValue(parser, context);
          const { tokenPos, linePos, colPos } = parser;
          switch (token) {
              case 134283267:
                  value = parseLiteral(parser, context);
                  break;
              case 8456255:
                  value = parseJSXRootElementOrFragment(parser, context, 1, tokenPos, linePos, colPos);
                  break;
              case 2162700:
                  value = parseJSXExpressionContainer(parser, context, 1, 1, tokenPos, linePos, colPos);
                  break;
              default:
                  report(parser, 148);
          }
      }
      return finishNode(parser, context, start, line, column, {
          type: 'JSXAttribute',
          value,
          name
      });
  }
  function parseJSXNamespacedName(parser, context, namespace, start, line, column) {
      consume(parser, context, 21);
      const name = parseJSXIdentifier(parser, context, parser.tokenPos, parser.linePos, parser.colPos);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXNamespacedName',
          namespace,
          name
      });
  }
  function parseJSXExpressionContainer(parser, context, inJSXChild, isAttr, start, line, column) {
      nextToken(parser, context);
      const { tokenPos, linePos, colPos } = parser;
      if (parser.token === 14)
          return parseJSXSpreadChild(parser, context, tokenPos, linePos, colPos);
      let expression = null;
      if (parser.token === 1074790415) {
          if (isAttr)
              report(parser, 151);
          expression = parseJSXEmptyExpression(parser, context, tokenPos, linePos, colPos);
      }
      else {
          expression = parseExpression(parser, context, 1, 0, 0, tokenPos, linePos, colPos);
      }
      if (inJSXChild) {
          consume(parser, context, 1074790415);
      }
      else {
          scanJSXToken(parser);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'JSXExpressionContainer',
          expression
      });
  }
  function parseJSXSpreadChild(parser, context, start, line, column) {
      consume(parser, context, 14);
      const expression = parseExpression(parser, context, 1, 0, 0, parser.tokenPos, parser.linePos, parser.colPos);
      consume(parser, context, 1074790415);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXSpreadChild',
          expression
      });
  }
  function parseJSXEmptyExpression(parser, context, start, line, column) {
      return finishNode(parser, context, start, line, column, {
          type: 'JSXEmptyExpression'
      });
  }
  function parseJSXIdentifier(parser, context, start, line, column) {
      const { tokenValue } = parser;
      nextToken(parser, context);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXIdentifier',
          name: tokenValue
      });
  }



  var estree = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  function parseScript(source, options) {
      return parseSource(source, options, 0);
  }
  function parseModule(source, options) {
      return parseSource(source, options, 1024 | 2048);
  }
  function parse(source, options) {
      return parseSource(source, options, 0);
  }
  const version = '1.9.12';

  exports.ESTree = estree;
  exports.parse = parse;
  exports.parseModule = parseModule;
  exports.parseScript = parseScript;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18), __webpack_require__(4)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonAnyGetter = void 0;
const util_1 = __webpack_require__(0);
const JacksonError_1 = __webpack_require__(1);
/**
 * Decorator that can be used to define a non-static, no-argument method to be an "any getter";
 * accessor for getting a set of key/value pairs, to be serialized as part of containing Class (similar to unwrapping)
 * along with regular property values it has.
 * This typically serves as a counterpart to "any setter" mutators (see {@link JsonAnySetter}).
 * Note that the return type of decorated methods must be a `Map` or an `Object Literal`).
 *
 * As with {@link JsonAnySetter}, only one property should be decorated with this decorator;
 * if multiple methods are decorated, an exception may be thrown.
 *
 * @example
 * ```typescript
 * class ScreenInfo {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   id: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   title: string;
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   width: number;
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   height: number;
 *   @JsonProperty() @JsonClassType({type: () => [Map, [String, Object]]})
 *   otherInfo: Map<string, any> = new Map<string, any>();
 *
 *   @JsonClassType({type: () => [Map, [String, Object]]})
 *   @JsonAnyGetter({for: 'otherInfo'})
 *   public getOtherInfo(): Map<string, any> {
 *     return this.otherInfo;
 *   }
 * }
 * ```
 */
exports.JsonAnyGetter = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        if (util_1.hasMetadata('JsonAnyGetter', target.constructor, null, { withContextGroups: options.contextGroups })) {
            throw new JacksonError_1.JacksonError(`Multiple 'any-getters' defined for "${target.constructor.name}".`);
        }
        if (!options.value) {
            if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex.value === 'function') {
                const methodName = propertyKey.toString();
                if (methodName.startsWith('get')) {
                    options.value = methodName.substring(3);
                    if (options.value.length > 0) {
                        options.value = options.value.charAt(0).toLowerCase() + options.value.substring(1);
                    }
                }
                if (!options.value) {
                    // eslint-disable-next-line max-len
                    throw new JacksonError_1.JacksonError(`Invalid usage of @JsonAnyGetter() on ${target.constructor.name}.${propertyKey.toString()}. You must either define a non-empty @JsonAnyGetter() option value or change the method name starting with "get".`);
                }
            }
            else {
                options.value = propertyKey.toString();
            }
        }
        util_1.defineMetadata('JsonAnyGetter', options, target.constructor);
    }
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonAnySetter = void 0;
const util_1 = __webpack_require__(0);
const JacksonError_1 = __webpack_require__(1);
/**
 * Decorator that can be used to define a logical "any setter" mutator using non-static two-argument method
 * (first argument name of property, second value to set) to be used as a "fallback" handler
 * for all otherwise unrecognized properties found from JSON content.
 *
 * If used, all otherwise unmapped key-value pairs from JSON Object values are added using mutator.
 *
 * As with {@link JsonAnyGetter}, only one property should be decorated with this decorator;
 * if multiple methods are decorated, an exception may be thrown.
 *
 * @example
 * ```typescript
 * class ScreenInfo {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   id: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   title: string;
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   width: number;
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   height: number;
 *   @JsonProperty() @JsonClassType({type: () => [Map, [String, Object]]})
 *   otherInfo: Map<string, any> = new Map<string, any>();
 *
 *   @JsonAnySetter()
 *   public setOtherInfo(propertyKey: string, value: any) {
 *     this.otherInfo.set(propertyKey, value);
 *   }
 * }
 * ```
 */
exports.JsonAnySetter = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        if (util_1.hasMetadata('JsonAnySetter', target.constructor, null, { withContextGroups: options.contextGroups })) {
            throw new JacksonError_1.JacksonError(`Multiple 'any-setters' defined for "${target.constructor.name}".`);
        }
        util_1.defineMetadata('JsonAnySetter', options, target.constructor);
    }
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonAppend = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator that may be used to add "virtual" properties to be written after regular properties
 * (although ordering may be changed using both standard {@link JsonPropertyOrder} decorator, and properties of this decorator).
 *
 * @example
 * ```typescript
 * @JsonAppend({attrs: [
 *   {
 *     value: 'version',
 *   }
 * ]})
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
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
exports.JsonAppend = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true, prepend: false, attrs: [] }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonAppend', options, target);
        return target;
    }
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonBackReference = void 0;
const util_1 = __webpack_require__(0);
const JacksonError_1 = __webpack_require__(1);
/**
 * Decorator used to indicate that associated property is part of two-way linkage between fields;
 * and that its role is "child" (or "back") link. Value type of the property must be a Class:
 * it can not be an `Iterable` or a `Map`.
 * Linkage is handled such that the property decorated with this decorator is not serialized;
 * and during deserialization, its value is set to instance that has
 * the "managed" (forward) link (see {@link JsonManagedReference}).
 *
 * All references have logical name to allow handling multiple linkages;
 * typical case would be that where nodes have both parent/child and sibling linkages.
 * If so, pairs of references should be named differently.
 * It is an error for a class to have multiple back references with same name,
 * even if types pointed are different.
 *
 * @example
 * ```typescript
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   email: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   firstname: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   lastname: string;
 *
 *   @JsonProperty()
 *   @JsonClassType({type: () => [Array, [Item]]})
 *   @JsonManagedReference()
 *   items: Item[] = [];
 * }
 *
 * class Item {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *
 *   @JsonProperty()
 *   @JsonClassType({type: () => [User]})
 *   @JsonBackReference()
 *   owner: User;
 * }
 * ```
 */
exports.JsonBackReference = util_1.makeJacksonDecorator((o = {}) => (Object.assign({ enabled: true, value: 'defaultReference' }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        if (util_1.hasMetadata('JsonBackReference:' + options.value, target.constructor, null, { withContextGroups: options.contextGroups })) {
            // eslint-disable-next-line max-len
            throw new JacksonError_1.JacksonError(`Multiple back-reference properties with name "${options.value}" at ${target.constructor}["${propertyKey.toString()}"].'`);
        }
        if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex.value === 'function') {
            const methodName = propertyKey.toString();
            const prefix = methodName.startsWith('get') ? 'set' : 'get';
            const oppositePropertyKey = prefix + methodName.substring(3);
            const oppositeOptions = Object.assign(Object.assign({}, options), { _propertyKey: oppositePropertyKey });
            util_1.defineMetadata('JsonBackReference', oppositeOptions, target.constructor, oppositePropertyKey);
            if (prefix === 'set') {
                util_1.defineMetadata('JsonBackReference', oppositeOptions, target.constructor, null, {
                    suffix: oppositeOptions.value
                });
            }
        }
        else {
            util_1.defineMetadata('JsonBackReference', options, target.constructor, null, {
                suffix: options.value
            });
        }
        util_1.defineMetadata('JsonBackReference', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonClassType = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator used to define the type of a class property or method parameter.
 * Used during serialization and, more important, during deserialization to know about the type of a property/parameter.
 *
 * This is necessary because JavaScript isn't a strongly-typed programming language,
 * so, for example, during deserialization, without the usage of this decorator, there isn't any way to know
 * the specific type of a class property, such as a `Date` or a custom Class type.
 *
 * @example
 * ```typescript
 * class Book {
 *   @JsonProperty()
 *   @JsonClassType({type: () => [String]})
 *   name: string;
 *
 *   @JsonProperty()
 *   @JsonClassType({type: () => [String]})
 *   category: string;
 * }
 *
 * class Writer {
 *   @JsonProperty()
 *   @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty()
 *   @JsonClassType({type: () => [String]})
 *   name: string;
 *
 *   @JsonProperty()
 *   @JsonClassType({type: () => [Array, [Book]]})
 *   books: Book[] = [];
 * }
 * ```
 */
exports.JsonClassType = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        util_1.defineMetadata('JsonClassTypeParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonClassType', options, target.constructor, propertyKey);
        util_1.defineMetadata('JsonClassType', options, target.constructor, null, {
            suffix: propertyKey.toString()
        });
    }
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCreator = exports.JsonCreatorMode = exports.defaultCreatorName = void 0;
const util_1 = __webpack_require__(0);
const JacksonError_1 = __webpack_require__(1);
/**
 * Default creator name used by {@link JsonCreator}.
 */
exports.defaultCreatorName = 'defaultCreatorName';
/**
 * Property that is used to indicate how argument(s) is/are bound for creator (see {@link JsonCreator}).
 */
var JsonCreatorMode;
(function (JsonCreatorMode) {
    /**
     * Mode that indicates that the argument(s) for creator are to be bound from matching properties of incoming
     * Object value, using creator argument names (explicit or implicit) to match incoming Object properties to arguments.
     */
    JsonCreatorMode[JsonCreatorMode["PROPERTIES"] = 0] = "PROPERTIES";
    /**
     * Mode that indicates that if creator takes a single argument, the whole incoming data value is passed as the argument to creator.
     */
    JsonCreatorMode[JsonCreatorMode["DELEGATING"] = 1] = "DELEGATING";
})(JsonCreatorMode = exports.JsonCreatorMode || (exports.JsonCreatorMode = {}));
/**
 * Decorator that can be used to define constructors and factory methods
 * as one to use for instantiating new instances of the associated class.
 *
 * When decorating creator methods (constructors, factory methods), method must either be:
 * - Single-argument constructor/factory method without {@link JsonProperty} decorator for the argument:
 *   the whole incoming data value is passed as the argument to creator (see {@link JsonCreatorMode.DELEGATING});
 * - Constructor/factory method where every argument is bound from matching properties of incoming Object value,
 *   using creator argument names (explicit or implicit) to match incoming Object properties to arguments
 *   (see {@link JsonCreatorMode.PROPERTIES}).
 *
 *
 * @example
 * ```typescript
 * @JsonCreator()
 * class Employee {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   department: string;
 *
 *   constructor(id: number,
 *     @JsonProperty({value: 'empName'}) name: string,
 *     @JsonProperty({value: 'empDept'}) department: string) {
 *     this.id = id;
 *     this.name = name;
 *     this.department = department;
 *   }
 * }
 *
 * class Employee {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   department: string;
 *
 *   constructor(id: number, name: string, department: string) {
 *     this.id = id;
 *     this.name = name;
 *     this.department = department;
 *   }
 *
 *   @JsonCreator()
 *   static toEmployee(id: number,
 *     @JsonProperty({value: 'empName'}) name: string,
 *     @JsonProperty({value: 'empDept'}) department: string): Employee {
 *     return new Employee(id, name, department);
 *   }
 *
 *   @JsonCreator({name: 'AnotherEmployeeCreator'})
 *   static toAnotherEmployee(id: number,
 *     @JsonProperty({value: 'anotherEmpName'}) anotherName: string,
 *     @JsonProperty({value: 'anotherEmpDept'}) anotherDepartment: string): Employee {
 *     return new Employee(id, 'Another ' + anotherName, 'Another ' + anotherDepartment);
 *   }
 * }
 * ```
 */
exports.JsonCreator = util_1.makeJacksonDecorator((o = {}) => (Object.assign({ enabled: true, name: exports.defaultCreatorName, mode: JsonCreatorMode.PROPERTIES }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    options._propertyKey = (options._propertyKey != null) ? options._propertyKey : 'constructor';
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex !== 'number' &&
        typeof descriptorOrParamIndex.value === 'function') {
        options._method = descriptorOrParamIndex.value;
        if (options.name &&
            util_1.hasMetadata('JsonCreator:' + options.name, target, null, { withContextGroups: options.contextGroups })) {
            throw new JacksonError_1.JacksonError(`Already had a @JsonCreator() with name "${options.name}" for Class "${target.name}".`);
        }
        util_1.defineMetadata('JsonCreator', options, target, null, {
            suffix: options.name
        });
    }
    else if (descriptorOrParamIndex == null && propertyKey == null) {
        options._ctor = target;
        // get original constructor
        while (options._ctor.toString().trim().startsWith('class extends target {')) {
            options._ctor = Object.getPrototypeOf(options._ctor);
        }
        util_1.defineMetadata('JsonCreator', options, target, null, {
            suffix: options.name
        });
        return target;
    }
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDeserialize = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator used to indicates the use of a custom deserializer.
 *
 * @example
 * ```typescript
 * class DateSerializer {
 *   static serializeDate(date): any {
 *     return {
 *       year: date.getFullYear(),
 *       month: date.getMonth() + 1,
 *       day: date.getDate(),
 *       formatted: date.toLocaleDateString()
 *     };
 *   }
 *   static deserializeDate(dateObj): Date {
 *     return new Date(dateObj.formatted);
 *   }
 * }
 *
 * class Book {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *
 *   @JsonProperty()
 *   @JsonSerialize({using: DateSerializer.serializeDate})
 *   @JsonDeserialize({using: DateSerializer.deserializeDate})
 *   @JsonClassType({type: () => [Date]})
 *   date: Date;
 * }
 * ```
 */
exports.JsonDeserialize = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonDeserialize', options, target);
        return target;
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        util_1.defineMetadata('JsonDeserializeParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonDeserialize', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFilter = exports.JsonFilterType = void 0;
const util_1 = __webpack_require__(0);
/**
 * {@link JsonFilter} type used to determine whether to serialize property as is, or to filter it out.
 */
var JsonFilterType;
(function (JsonFilterType) {
    /**
     * Serialize all properties that are given, and filter out nothing.
     */
    JsonFilterType[JsonFilterType["SERIALIZE_ALL"] = 0] = "SERIALIZE_ALL";
    /**
     * Serialize all properties except ones includes in {@link JsonStringifierFilterOptions.values}
     */
    JsonFilterType[JsonFilterType["SERIALIZE_ALL_EXCEPT"] = 1] = "SERIALIZE_ALL_EXCEPT";
    /**
     * Filters out all properties except ones includes in {@link JsonStringifierFilterOptions.values}
     */
    JsonFilterType[JsonFilterType["FILTER_OUT_ALL_EXCEPT"] = 2] = "FILTER_OUT_ALL_EXCEPT";
})(JsonFilterType = exports.JsonFilterType || (exports.JsonFilterType = {}));
/**
 * Decorator used to indicate which logical filter is to be used for filtering out properties of type (class) decorated.
 * Association made by this decorator declaring ids of filters,
 * and {@link JsonStringifierContext} providing matching filters by id.
 *
 * When used for properties (fields, methods), this decorator applies to values:
 * so when applied to Iterables and Maps, it will apply to contained values, not the container.
 *
 * @example
 * ```typescript
 * @JsonFilter({value: 'studentFilter'})
 * class Student {
 *   @JsonProperty({value: 'stdName'}) @JsonClassType({type: () => [String]})
 *   name: string;
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   age: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   college: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   city: string;
 *
 *   constructor(name: string, age: number, college: string, city: string) {
 *     this.name = name;
 *     this.age = age;
 *     this.college = college;
 *     this.city = city;
 *   }
 * }
 * const student = new Student('Mohit', 30, 'ABCD', 'Varanasi');
 *
 * const objectMapper = new ObjectMapper();
 *
 * const jsonData = objectMapper.stringify<Student>(student, {
 *   filters: {
 *     studentFilter: {
 *       type: JsonFilterType.SERIALIZE_ALL_EXCEPT,
 *       values: ['stdName', 'city']
 *     }
 *   }
 * });
 * ```
 */
exports.JsonFilter = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonFilter', options, target);
        return target;
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonFilter', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFormat = exports.JsonFormatShape = void 0;
const util_1 = __webpack_require__(0);
/**
 * Value enumeration used for indicating preferred Shape; translates loosely to JSON types.
 */
var JsonFormatShape;
(function (JsonFormatShape) {
    /**
     * Marker enum value that indicates "whatever" choice, meaning that decorator does NOT specify shape to use.
     */
    JsonFormatShape[JsonFormatShape["ANY"] = 0] = "ANY";
    /**
     * Value that indicates that (JSON) Array type should be used.
     */
    JsonFormatShape[JsonFormatShape["ARRAY"] = 1] = "ARRAY";
    /**
     * Value that indicates that (JSON) boolean type (true, false) should be used.
     */
    JsonFormatShape[JsonFormatShape["BOOLEAN"] = 2] = "BOOLEAN";
    /**
     * Value that indicates that floating-point numeric type should be used.
     */
    JsonFormatShape[JsonFormatShape["NUMBER_FLOAT"] = 3] = "NUMBER_FLOAT";
    /**
     * Value that indicates that integer number type should be used.
     */
    JsonFormatShape[JsonFormatShape["NUMBER_INT"] = 4] = "NUMBER_INT";
    /**
     * Value that indicates that (JSON) Object type should be used.
     */
    JsonFormatShape[JsonFormatShape["OBJECT"] = 5] = "OBJECT";
    /**
     * Value that indicates shape should not be structural.
     */
    JsonFormatShape[JsonFormatShape["SCALAR"] = 6] = "SCALAR";
    /**
     * Value that indicates that (JSON) String type should be used.
     */
    JsonFormatShape[JsonFormatShape["STRING"] = 7] = "STRING";
})(JsonFormatShape = exports.JsonFormatShape || (exports.JsonFormatShape = {}));
/**
 * General-purpose decorator used for configuring details of how values of properties are to be serialized.
 * This decorator does not have specific universal interpretation: instead, effect depends on datatype of property being decorated.
 *
 * Iterables, such as `Array` and `Set`, can be serialized as JSON Objects if {@link JsonFormatShape.OBJECT} is used.
 *
 * **IMPORTANT NOTE**: To be able to use {@link JsonFormat} on class properties of type `Date`
 * with {@link JsonFormatShape.STRING}, a date library needs to be set.
 * Date libraries supported: {@link https://github.com/moment/moment}, {@link https://github.com/iamkun/dayjs/}.
 *
 * @example
 * ```typescript
 * class Event {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *
 *   @JsonProperty()
 *   @JsonFormat({
 *     shape: JsonFormatShape.STRING,
 *     pattern: 'YYYY-MM-DD hh:mm:ss',
 *   })
 *   @JsonClassType({type: () => [Date]})
 *   startDate: Date;
 *
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   @JsonFormat({
 *     shape: JsonFormatShape.STRING,
 *     toFixed: 2
 *   })
 *   @JsonDeserialize({using: (value: string) => parseFloat(value)})
 *   price: number;
 *
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   @JsonFormat({
 *     shape: JsonFormatShape.BOOLEAN
 *   })
 *   @JsonDeserialize({using: (value: boolean) => value ? 1 : 0})
 *   canceled: number;
 *
 *   @JsonProperty() @JsonClassType({type: () => [Object, [String, String]]})
 *   @JsonFormat({
 *     shape: JsonFormatShape.ARRAY
 *   })
 *   @JsonDeserialize({
 *     using: (value: string[]) => ({
 *       address: value[0],
 *       phone: value[1]
 *     })
 *   })
 *   info: {
 *     address: string;
 *     phone: string;
 *   };
 * }
 * ```
 */
exports.JsonFormat = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true, shape: JsonFormatShape.ANY, 
    // @ts-ignore
    locale: 'en' }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonFormat', options, target);
        return target;
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonFormat', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonGetter = void 0;
const util_1 = __webpack_require__(0);
const JacksonError_1 = __webpack_require__(1);
/**
 * Decorator that can be used to define a non-static,
 * no-argument value-returning (non-void) method to be used as a "getter" for a logical property.
 * It can be used as an alternative to more general {@link JsonProperty} decorator
 * (which is the recommended choice in general case).
 *
 * Getter means that when serializing Object instance of class that has this method
 * (possibly inherited from a super class), a call is made through the method,
 * and return value will be serialized as value of the property.
 *
 * @example
 * ```typescript
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   firstname: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   lastname: string;
 *   @JsonProperty() @JsonClassType({type: () => [Array, [String]]})
 *   fullname: string[];
 *
 *   @JsonGetter() @JsonClassType({type: () => [String]})
 *   getFullname(): string {
 *     return this.firstname + ' ' + this.lastname;
 *   }
 *
 *   @JsonSetter()
 *   setFullname(fullname: string) {
 *     this.fullname = fullname.split(' ');
 *   }
 * }
 * ```
 */
exports.JsonGetter = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        if (!options.value) {
            if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex.value === 'function') {
                const methodName = propertyKey.toString();
                if (methodName.startsWith('get')) {
                    options.value = methodName.substring(3);
                    if (options.value.length > 0) {
                        options.value = options.value.charAt(0).toLowerCase() + options.value.substring(1);
                    }
                }
                if (!options.value) {
                    // eslint-disable-next-line max-len
                    throw new JacksonError_1.JacksonError(`Invalid usage of @JsonGetter() on ${target.constructor.name}.${propertyKey.toString()}. You must either define a non-empty @JsonGetter() option value or change the method name starting with "get".`);
                }
            }
            else {
                options.value = propertyKey.toString();
            }
        }
        util_1.defineMetadata('JsonGetter', options, target.constructor, propertyKey);
        util_1.defineMetadata('JsonVirtualProperty', options, target.constructor, null, {
            suffix: propertyKey.toString()
        });
    }
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIdentityInfo = exports.ObjectIdGenerator = void 0;
const util_1 = __webpack_require__(0);
/**
 * Generator to use for producing Object Identifier for objects.
 * To be able to use {@link JsonIdentityInfo} with any UUID {@link ObjectIdGenerator}, an UUID library needs to be set.
 * UUID library supported: {@link https://github.com/uuidjs/uuid}.
 */
var ObjectIdGenerator;
(function (ObjectIdGenerator) {
    /**
     * Simple sequence-number based generator, which uses basic integers (starting with value 1) as Object Identifiers.
     */
    ObjectIdGenerator[ObjectIdGenerator["IntSequenceGenerator"] = 0] = "IntSequenceGenerator";
    /**
     * Used to allow explicitly specifying that no generator is used.
     */
    ObjectIdGenerator[ObjectIdGenerator["None"] = 1] = "None";
    /**
     * Used to denote case where Object Identifier to use comes from a Class property (getter method or field).
     * If so, value is written directly during serialization, and used as-is during deserialization.
     */
    ObjectIdGenerator[ObjectIdGenerator["PropertyGenerator"] = 2] = "PropertyGenerator";
    /**
     * Implementation that just uses version 5 UUIDs as reliably unique identifiers.
     */
    ObjectIdGenerator[ObjectIdGenerator["UUIDv5Generator"] = 3] = "UUIDv5Generator";
    /**
     * Implementation that just uses version 4 UUIDs as reliably unique identifiers.
     */
    ObjectIdGenerator[ObjectIdGenerator["UUIDv4Generator"] = 4] = "UUIDv4Generator";
    /**
     * Implementation that just uses version 3 UUIDs as reliably unique identifiers.
     */
    ObjectIdGenerator[ObjectIdGenerator["UUIDv3Generator"] = 5] = "UUIDv3Generator";
    /**
     * Implementation that just uses version 1 UUIDs as reliably unique identifiers.
     */
    ObjectIdGenerator[ObjectIdGenerator["UUIDv1Generator"] = 6] = "UUIDv1Generator";
})(ObjectIdGenerator = exports.ObjectIdGenerator || (exports.ObjectIdGenerator = {}));
/**
 * Decorator used for indicating that values of decorated type or property should be serializing
 * so that instances either contain additional object identifier (in addition actual object properties),
 * or as a reference that consists of an object id that refers to a full serialization.
 * In practice this is done by serializing the first instance as full object and object identity,
 * and other references to the object as reference values.
 *
 * **IMPORTANT NOTE**: To be able to use {@link JsonIdentityInfo} with any UUID {@link ObjectIdGenerator}, an UUID library needs to be set.
 * UUID libraries supported: {@link https://github.com/uuidjs/uuid}.
 *
 * @example
 * ```typescript
 * @JsonIdentityInfo({generator: ObjectIdGenerator.PropertyGenerator, property: 'id', scope: 'User'})
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   email: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   firstname: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   lastname: string;
 *
 *   @JsonProperty()
 *   @JsonClassType({type: () => [Array, [Item]]})
 *   items: Item[] = [];
 * }
 *
 * @JsonIdentityInfo({generator: ObjectIdGenerator.PropertyGenerator, property: 'id', scope: 'Item'})
 * class Item {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *
 *   @JsonProperty()
 *   @JsonClassType({type: () => [User]})
 *   owner: User;
 * }
 * ```
 */
exports.JsonIdentityInfo = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true, property: '@id', uuidv5: {}, uuidv4: {}, uuidv3: {}, uuidv1: {} }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonIdentityInfo', options, target);
        return target;
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        util_1.defineMetadata('JsonIdentityInfoParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonIdentityInfo', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIdentityReference = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator that can be used for customizing details of a reference to Objects for
 * which "Object Identity" is enabled (see {@link JsonIdentityInfo}).
 * The main use case is that of enforcing use of Object Id even for the first time an Object is referenced,
 * instead of first instance being serialized as full Class.
 *
 * @example
 * ```typescript
 * @JsonIdentityInfo({generator: ObjectIdGenerator.PropertyGenerator, property: 'id', scope: 'User'})
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   email: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   firstname: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   lastname: string;
 *
 *   @JsonProperty()
 *   @JsonClassType({type: () => [Array, [Item]]})
 *   items: Item[] = [];
 * }
 *
 * @JsonIdentityInfo({generator: ObjectIdGenerator.PropertyGenerator, property: 'id', scope: 'Item'})
 * @JsonIdentityReference({alwaysAsId: true})
 * class Item {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *
 *   @JsonProperty()
 *   @JsonClassType({type: () => [User]})
 *   owner: User;
 * }
 * ```
 */
exports.JsonIdentityReference = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonIdentityReference', options, target);
        return target;
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        util_1.defineMetadata('JsonIdentityReferenceParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonIdentityReference', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIgnore = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator that indicates that the logical property that the accessor
 * (field, getter/setter method or Creator parameter [of JsonCreator-decorated constructor or factory method])
 * is to be ignored during serialization and deserialization functionality.
 *
 * @example
 * ```typescript
 * class Item {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   @JsonIgnore()
 *   category: string;
 * }
 * ```
 */
exports.JsonIgnore = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        util_1.defineMetadata('JsonIgnore', options, target.constructor, propertyKey);
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        util_1.defineMetadata('JsonIgnoreParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIgnoreProperties = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator that can be used to either suppress serialization of properties (during serialization),
 * or ignore processing of JSON properties read (during deserialization).
 *
 * When used for properties (fields, methods), this decorator applies to values:
 * so when applied to Iterables and Maps, it will apply to contained values, not the container.
 *
 * @example
 * ```typescript
 * @JsonIgnoreProperties({
 *   value: ['firstname', 'lastname']
 * })
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   email: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   firstname: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   lastname: string;
 * }
 * ```
 */
exports.JsonIgnoreProperties = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true, allowGetters: false, allowSetters: false, ignoreUnknown: false, value: [] }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonIgnoreProperties', options, target);
        return target;
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        util_1.defineMetadata('JsonIgnorePropertiesParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonIgnoreProperties', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIgnoreType = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator that indicates that all properties of decorated type
 * are to be ignored during serialization and deserialization.
 *
 * @example
 * ```typescript
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   email: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   firstname: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   lastname: string;
 *
 *   @JsonProperty()
 *   @JsonClassType({type: () => [Array, [Item]]})
 *   items: Item[] = [];
 * }
 *
 * @JsonIgnoreType()
 * class Item {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   category: string;
 *
 *   @JsonProperty()
 *   @JsonClassType({type: () => [User]})
 *   owner: User;
 * }
 * ```
 */
exports.JsonIgnoreType = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonIgnoreType', options, target);
        return target;
    }
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonInclude = exports.JsonIncludeType = void 0;
const util_1 = __webpack_require__(0);
/**
 * Enumeration used with {@link JsonInclude} to define which properties of a Class are to be included in serialization.
 */
var JsonIncludeType;
(function (JsonIncludeType) {
    /**
     * Value that indicates that property is to be always included, independent of value of the property.
     */
    JsonIncludeType[JsonIncludeType["ALWAYS"] = 0] = "ALWAYS";
    /**
     * Value that indicates that only properties with null value, or what is considered empty, are not to be included.
     * Definition of emptiness is data type specific; see below for details on actual handling.
     *
     * Default emptiness for all types includes:
     * - `null` values;
     * - For `Set` and `Map`, method `size()` is called;
     * - For `Array`, empty arrays are ones with length of 0;
     * - For `String`, empty strings are ones with length of 0.
     */
    JsonIncludeType[JsonIncludeType["NON_EMPTY"] = 1] = "NON_EMPTY";
    /**
     * Value that indicates that only properties with non-null values are to be included.
     */
    JsonIncludeType[JsonIncludeType["NON_NULL"] = 2] = "NON_NULL";
    /**
     * Definition is such that:
     * - All values considered "empty" (as per {@link NON_EMPTY}) are excluded;
     * - Primitive default values are excluded, which are defined such that:
     *   - `Number`: `0`;
     *   - `Boolean`: `false`;
     *   - `String`: `''`;
     *   - `BigInt`: `BigInt(0)`;
     */
    JsonIncludeType[JsonIncludeType["NON_DEFAULT"] = 3] = "NON_DEFAULT";
    /**
     * Value that indicates that separate `filter` Object (specified by {@link JsonIncludeOptions.valueFilter}
     * for value itself, and/or {@link JsonIncludeOptions.contentFilter}
     * for contents of structured types) is to be used for determining inclusion criteria.
     */
    JsonIncludeType[JsonIncludeType["CUSTOM"] = 4] = "CUSTOM";
})(JsonIncludeType = exports.JsonIncludeType || (exports.JsonIncludeType = {}));
/**
 * Decorator used to indicate when value of the decorated property
 * or all properties of the decorated class, is to be serialized.
 * Without decorator property values are always included,
 * but by using this decorator one can specify simple exclusion rules to reduce amount of properties to write out.
 *
 * Note that the main inclusion criteria is checked on JavaScript object level,
 * for the decorated type, and NOT on JSON output.
 * So, even with {@link JsonIncludeType.NON_NULL} it is possible that JSON null values are output,
 * if object reference in question is not `null`.
 *
 * @example
 * ```typescript
 * @JsonInclude({value: JsonIncludeType.NON_EMPTY})
 * class Employee {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   dept: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   address: string;
 *   @JsonProperty() @JsonClassType({type: () => [Array, [String]]})
 *   phones: string[];
 *   @JsonProperty() @JsonClassType({type: () => [Map, [String, String]]})
 *   otherInfo: Map<string, string>;
 * }
 * ```
 */
exports.JsonInclude = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true, value: JsonIncludeType.ALWAYS }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonInclude', options, target);
        return target;
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonInclude', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonInject = void 0;
const util_1 = __webpack_require__(0);
const JacksonError_1 = __webpack_require__(1);
/**
 * Decorator used for indicating that value of decorated property will be "injected" through
 * {@link JsonParserContext.injectableValues} value.
 *
 * @example
 * ```typescript
 * class CurrencyRate {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   pair: string;
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   rate: number;
 *
 *   @JsonInject()
 *   @JsonProperty()
 *   @JsonClassType({type: () => [Date]})
 *   lastUpdated: Date;
 * }
 *
 * const objectMapper = new ObjectMapper();
 * const jsonData = '{"pair":"USD/JPY","rate":109.15}';
 * const now = new Date();
 *
 * const currencyRate = objectMapper.parse<CurrencyRate>(jsonData, {
 *   mainCreator: () => [CurrencyRate],
 *   injectableValues: {
 *     lastUpdated: now
 *   }
 * });
 * ```
 */
exports.JsonInject = util_1.makeJacksonDecorator((o = {}) => (Object.assign({ enabled: true, useInput: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (!options.value && propertyKey != null) {
        options.value = propertyKey.toString();
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        if (!options.value || (propertyKey != null && options.value === propertyKey.toString())) {
            const method = (propertyKey) ? target[propertyKey.toString()] : target;
            const argNames = util_1.getArgumentNames(method);
            options.value = argNames[descriptorOrParamIndex];
        }
        util_1.defineMetadata('JsonInjectParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
    if (propertyKey != null) {
        if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex.value === 'function') {
            const methodName = propertyKey.toString();
            if (methodName.startsWith('get') || methodName.startsWith('set')) {
                options.value = methodName.substring(3);
                if (options.value.length > 0) {
                    options.value = options.value.charAt(0).toLowerCase() + options.value.substring(1);
                }
            }
            if (!options.value) {
                // eslint-disable-next-line max-len
                throw new JacksonError_1.JacksonError(`Invalid usage of @JsonInject() on ${((target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor).name}.${propertyKey.toString()}. You must either define a non-empty @JsonInject() option value or change the method name starting with "get" for Getters or "set" for Setters.`);
            }
        }
        util_1.defineMetadata('JsonInject', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonManagedReference = void 0;
const util_1 = __webpack_require__(0);
const JacksonError_1 = __webpack_require__(1);
/**
 * Decorator used to indicate that decorated property is part of two-way linkage between fields
 * and that its role is "parent" (or "forward") link.
 * Value type (class) of property must have a single compatible property decorated with {@link JsonBackReference}.
 * Linkage is handled such that the property decorated with this decorator is handled normally
 * (serialized normally, no special handling for deserialization);
 * it is the matching back reference that requires special handling.
 *
 * All references have logical name to allow handling multiple linkages;
 * typical case would be that where nodes have both parent/child and sibling linkages.
 * If so, pairs of references should be named differently.
 * It is an error for a class too have multiple managed references with same name, even if types pointed are different.
 *
 * @example
 * ```typescript
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   email: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   firstname: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   lastname: string;
 *
 *   @JsonProperty()
 *   @JsonClassType({type: () => [Array, [Item]]})
 *   @JsonManagedReference()
 *   items: Item[] = [];
 * }
 *
 * class Item {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *
 *   @JsonProperty()
 *   @JsonClassType({type: () => [User]})
 *   @JsonBackReference()
 *   owner: User;
 * }
 * ```
 */
exports.JsonManagedReference = util_1.makeJacksonDecorator((o = {}) => (Object.assign({ enabled: true, value: 'defaultReference' }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        if (util_1.hasMetadata('JsonManagedReference:' + options.value, target.constructor, null, { withContextGroups: options.contextGroups })) {
            // eslint-disable-next-line max-len
            throw new JacksonError_1.JacksonError(`Multiple managed-reference properties with name "${options.value}" at ${target.constructor}["${propertyKey.toString()}"].'`);
        }
        if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex.value === 'function') {
            const methodName = propertyKey.toString();
            const prefix = methodName.startsWith('get') ? 'set' : 'get';
            const oppositePropertyKey = prefix + methodName.substring(3);
            const oppositeOptions = Object.assign(Object.assign({}, options), { _propertyKey: oppositePropertyKey });
            util_1.defineMetadata('JsonManagedReference', oppositeOptions, target.constructor, oppositePropertyKey);
        }
        util_1.defineMetadata('JsonManagedReference', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNaming = exports.PropertyNamingStrategy = void 0;
const util_1 = __webpack_require__(0);
/**
 * Strategies that defines how names of JSON properties ("external names")
 * are derived from names of POJO methods and fields ("internal names").
 */
var PropertyNamingStrategy;
(function (PropertyNamingStrategy) {
    /**
     * Naming convention used in languages like C, where words are in lower-case letters, separated by underscores.
     */
    PropertyNamingStrategy[PropertyNamingStrategy["SNAKE_CASE"] = 0] = "SNAKE_CASE";
    /**
     * Naming convention used in languages like Pascal, where words are capitalized and no separator is used between words.
     */
    PropertyNamingStrategy[PropertyNamingStrategy["UPPER_CAMEL_CASE"] = 1] = "UPPER_CAMEL_CASE";
    /**
     * Naming convention used in Java, where words other than first are capitalized and no separator is used between words.
     */
    PropertyNamingStrategy[PropertyNamingStrategy["LOWER_CAMEL_CASE"] = 2] = "LOWER_CAMEL_CASE";
    /**
     * Naming convention in which all words of the logical name are in lower case, and no separator is used between words.
     */
    PropertyNamingStrategy[PropertyNamingStrategy["LOWER_CASE"] = 3] = "LOWER_CASE";
    /**
     * Naming convention used in languages like Lisp, where words are in lower-case letters, separated by hyphens.
     */
    PropertyNamingStrategy[PropertyNamingStrategy["KEBAB_CASE"] = 4] = "KEBAB_CASE";
    /**
     * Naming convention widely used as configuration properties name, where words are in lower-case letters, separated by dots.
     */
    PropertyNamingStrategy[PropertyNamingStrategy["LOWER_DOT_CASE"] = 5] = "LOWER_DOT_CASE";
})(PropertyNamingStrategy = exports.PropertyNamingStrategy || (exports.PropertyNamingStrategy = {}));
/**
 * Decorator that can be used to indicate a {@link PropertyNamingStrategy} to use for decorated class.
 *
 * @example
 * ```typescript
 * @JsonNaming({strategy: PropertyNamingStrategy.SNAKE_CASE})
 * class Book {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   bookName: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   bookCategory: string;
 *
 *   constructor(id: number, name: string, category: string) {
 *     this.id = id;
 *     this.bookName = name;
 *     this.bookCategory = category;
 *   }
 * }
 * ```
 */
exports.JsonNaming = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonNaming', options, target);
        return target;
    }
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonProperty = exports.JsonPropertyAccess = void 0;
const util_1 = __webpack_require__(0);
const JacksonError_1 = __webpack_require__(1);
/**
 * Used by {@link JsonProperty}, it specifies how property
 * may be accessed during serialization and deserialization.
 */
var JsonPropertyAccess;
(function (JsonPropertyAccess) {
    /**
     * Access setting that means that the property may only be read for serialization
     * but not written (set) during deserialization.
     */
    JsonPropertyAccess[JsonPropertyAccess["READ_ONLY"] = 0] = "READ_ONLY";
    /**
     * Access setting that means that the property will be accessed for both serialization
     * (writing out values as external representation) and deserialization
     * (reading values from external representation).
     */
    JsonPropertyAccess[JsonPropertyAccess["READ_WRITE"] = 1] = "READ_WRITE";
    /**
     * Access setting that means that the property may only be written (set) as part of deserialization
     * but will not be read (get) for serialization, that is,
     * the value of the property is not included in serialization.
     */
    JsonPropertyAccess[JsonPropertyAccess["WRITE_ONLY"] = 2] = "WRITE_ONLY";
})(JsonPropertyAccess = exports.JsonPropertyAccess || (exports.JsonPropertyAccess = {}));
/**
 * Decorator that can be used to define a non-static method as a "setter" or "getter"
 * for a logical property (depending on its signature: starting with "get" for Getters and "set" for Setters),
 * or non-static object field to be used (serialized, deserialized) as a logical property.
 *
 * If no option value is defined, then the field name is used as the property name without any modifications,
 * but it can be specified to non-empty value to specify different name.
 * Property name refers to name used externally, as the field name in JSON objects.
 *
 * **IMPORTANT**: Each class property (or its getter/setter) must be decorated with this decorator,
 * otherwise deserialization and serialization will not work properly!
 * That's because, for example, given a JavaScript class, there isn't any way or API
 * (such as Reflection API for Java - {@link https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/package-summary.html})
 * to get all the class properties and its types (see {@link JsonClassType}).
 *
 * @example
 * ```typescript
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   firstname: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   lastname: string;
 *
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   getFullname(): string {
 *     return this.firstname + ' ' + this.lastname;
 *   }
 *
 *   @JsonProperty()
 *   setFullname(fullname: string) {
 *     const fullnameSplitted = fullname.split(' ');
 *     this.firstname = fullnameSplitted[0];
 *     this.lastname = fullnameSplitted[0];
 *   }
 * }
 * ```
 */
exports.JsonProperty = util_1.makeJacksonDecorator((o = {}) => (Object.assign({ enabled: true, required: false, access: JsonPropertyAccess.READ_WRITE }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null && !options.value) {
        if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex.value === 'function') {
            const methodName = propertyKey.toString();
            if (methodName.startsWith('get') || methodName.startsWith('set')) {
                options.value = methodName.substring(3);
                if (options.value.length > 0) {
                    options.value = options.value.charAt(0).toLowerCase() + options.value.substring(1);
                }
            }
            if (!options.value) {
                // eslint-disable-next-line max-len
                throw new JacksonError_1.JacksonError(`Invalid usage of @JsonProperty() on ${((target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor).name}.${propertyKey.toString()}. You must either define a non-empty @JsonProperty() option value or change the method name starting with "get" for Getters or "set" for Setters.`);
            }
        }
        else {
            options.value = propertyKey.toString();
        }
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        if (!options.value || (propertyKey != null && options.value === propertyKey.toString())) {
            const method = (propertyKey) ? target[propertyKey.toString()] : target;
            const argNames = util_1.getArgumentNames(method);
            options.value = argNames[descriptorOrParamIndex];
        }
        util_1.defineMetadata('JsonPropertyParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonProperty', options, target.constructor, propertyKey);
        util_1.defineMetadata('JsonProperty', options, target.constructor, null, {
            suffix: propertyKey.toString()
        });
        util_1.defineMetadata('JsonVirtualProperty', options, target.constructor, null, {
            suffix: propertyKey.toString()
        });
    }
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonPropertyOrder = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator that can be used to define ordering (possibly partial) to use when serializing object properties.
 * Properties included in decorator declaration will be serialized first (in defined order),
 * followed by any properties not included in the definition.
 * This decorator definition will override any implicit orderings.
 *
 * When used for properties (fields, methods), this decorator applies to values:
 * so when applied to Iterables and Maps, it will apply to contained values, not the container.
 *
 * @example
 * ```typescript
 * @JsonPropertyOrder({value: ['email', 'lastname']})
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   email: string;
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   firstname: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   lastname: string;
 * }
 * ```
 */
exports.JsonPropertyOrder = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true, alphabetic: false, value: [] }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonPropertyOrder', options, target);
        return target;
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        util_1.defineMetadata('JsonPropertyOrderParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonPropertyOrder', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonRawValue = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator that indicates that the decorated method or field should be serialized by
 * including literal String value of the property as is, without quoting of characters.
 * This can be useful for injecting values already serialized in JSON or
 * passing javascript function definitions from server to a javascript client.
 *
 * Warning: the resulting JSON stream may be invalid depending on your input value.
 *
 * @example
 * ```typescript
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   email: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   @JsonRawValue()
 *   otherInfo: string;
 *
 *   constructor(id: number, email: string, otherInfo: string) {
 *     this.id = id;
 *     this.email = email;
 *     this.otherInfo = otherInfo;
 *   }
 * }
 *
 * const user = new User(1, 'john.alfa@gmail.com', '{"other": "info 1", "another": "info 2"}');
 * const objectMapper = new ObjectMapper();
 *
 * const jsonData = objectMapper.stringify<User>(user);
 * ```
 */
exports.JsonRawValue = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        util_1.defineMetadata('JsonRawValue', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonRootName = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator used to indicate name to use for root-level wrapping, if wrapping is enabled
 * (see {@link SerializationFeature.WRAP_ROOT_VALUE} and {@link DeserializationFeature.UNWRAP_ROOT_VALUE}).
 * Decorator itself does not indicate that wrapping should be used;
 * but if it is, name used for serialization should be name specified here, and deserializer will expect the name as well.
 *
 * @example
 * ```typescript
 * @JsonRootName()
 * class User {
 *    @JsonProperty() @JsonClassType({type: () => [Number]})
 *    id: number;
 *    @JsonProperty() @JsonClassType({type: () => [String]})
 *    email: string;
 *
 *    constructor(id: number, email: string) {
 *      this.id = id;
 *      this.email = email;
 *    }
 *  }
 *
 * const user = new User(1, 'john.alfa@gmail.com');
 *
 * const objectMapper = new ObjectMapper();
 * objectMapper.features.serialization.WRAP_ROOT_VALUE = true;
 * objectMapper.features.deserialization.UNWRAP_ROOT_VALUE = true;
 *
 * const jsonData = objectMapper.stringify<User>(user);
 *
 * const userParsed = objectMapper.parse<User>(jsonData, {mainCreator: () => [User]});
 * ```
 */
exports.JsonRootName = util_1.makeJacksonDecorator((o = {}) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        options.value = (options.value == null) ? target.name : options.value;
        util_1.defineMetadata('JsonRootName', options, target);
        return target;
    }
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonSerialize = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator used to indicates the use of a custom serializer.
 *
 * @example
 * ```typescript
 * class DateSerializer {
 *   static serializeDate(date): any {
 *     return {
 *       year: date.getFullYear(),
 *       month: date.getMonth() + 1,
 *       day: date.getDate(),
 *       formatted: date.toLocaleDateString()
 *     };
 *   }
 *   static deserializeDate(dateObj): Date {
 *     return new Date(dateObj.formatted);
 *   }
 * }
 *
 * class Book {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *
 *   @JsonProperty()
 *   @JsonSerialize({using: DateSerializer.serializeDate})
 *   @JsonDeserialize({using: DateSerializer.deserializeDate})
 *   @JsonClassType({type: () => [Date]})
 *   date: Date;
 * }
 * ```
 */
exports.JsonSerialize = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonSerialize', options, target);
        return target;
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonSerialize', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonSetter = exports.JsonSetterNulls = void 0;
const util_1 = __webpack_require__(0);
const JacksonError_1 = __webpack_require__(1);
/**
 * Used with {@link JsonSetter} (for properties `nulls` and `contentNulls`) to define
 * how explicit `null` values from input are handled.
 */
var JsonSetterNulls;
(function (JsonSetterNulls) {
    /**
     * Value that indicates that an exception (of type that indicates input mismatch problem)
     * is to be thrown, to indicate that null values are not accepted.
     */
    JsonSetterNulls[JsonSetterNulls["FAIL"] = 0] = "FAIL";
    /**
     * Value that indicates that an input null should result in assignment of JavaScript `null`value
     * of matching property.
     */
    JsonSetterNulls[JsonSetterNulls["SET"] = 1] = "SET";
    /**
     * Value that indicates that an input null value should be skipped and no assignment is to be made.
     */
    JsonSetterNulls[JsonSetterNulls["SKIP"] = 2] = "SKIP";
})(JsonSetterNulls = exports.JsonSetterNulls || (exports.JsonSetterNulls = {}));
/**
 * Decorator that can be used to define a non-static, single-argument method to be used as a "setter"
 * for a logical property as an alternative to recommended {@link JsonProperty} decorator.
 *
 * Setter means that when deserializing Object instance of class that has this method
 * (possibly inherited from a super class), a call is made through the method.
 *
 * @example
 * ```typescript
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   firstname: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   lastname: string;
 *   @JsonProperty() @JsonClassType({type: () => [Array, [String]]})
 *   fullname: string[];
 *
 *   @JsonGetter() @JsonClassType({type: () => [String]})
 *   getFullname(): string {
 *     return this.firstname + ' ' + this.lastname;
 *   }
 *
 *   @JsonSetter()
 *   setFullname(fullname: string) {
 *     this.fullname = fullname.split(' ');
 *   }
 * }
 * ```
 */
exports.JsonSetter = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true, nulls: JsonSetterNulls.SET, contentNulls: JsonSetterNulls.SET }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        if (!options.value) {
            if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex.value === 'function') {
                const methodName = propertyKey.toString();
                if (methodName.startsWith('set')) {
                    options.value = methodName.substring(3);
                    if (options.value.length > 0) {
                        options.value = options.value.charAt(0).toLowerCase() + options.value.substring(1);
                    }
                }
                if (!options.value) {
                    // eslint-disable-next-line max-len
                    throw new JacksonError_1.JacksonError(`Invalid usage of @JsonSetter() on ${target.constructor.name}.${propertyKey.toString()}. You must either define a non-empty @JsonSetter() option value or change the method name starting with "set".`);
                }
            }
            else {
                options.value = propertyKey.toString();
            }
        }
        util_1.defineMetadata('JsonSetter', options, target.constructor, propertyKey);
        util_1.defineMetadata('JsonVirtualProperty', options, target.constructor, null, {
            suffix: propertyKey.toString()
        });
    }
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonSubTypes = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator used with {@link JsonTypeInfo} to indicate sub-types of serializable polymorphic types,
 * and to associate logical names used within JSON content.
 *
 * Note that just decorating a property or base type with this decorator does NOT enable polymorphic type handling:
 * in addition, {@link JsonTypeInfo} decorator is needed, and only in such case is subtype information used.
 *
 * @example
 * ```typescript
 * @JsonTypeInfo({
 *   use: JsonTypeInfoId.NAME,
 *   include: JsonTypeInfoAs.PROPERTY
 * })
 * @JsonSubTypes({
 *   types: [
 *     {class: () => Dog, name: 'dog'},
 *     {class: () => Cat, name: 'cat'},
 *   ]
 * })
 * class Animal {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 * }
 *
 * @JsonTypeName({value: 'dog'})
 * class Dog extends Animal {
 *
 * }
 *
 * @JsonTypeName({value: 'cat'})
 * class Cat extends Animal {
 *
 * }
 * ```
 */
exports.JsonSubTypes = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonSubTypes', options, target);
        return target;
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        util_1.defineMetadata('JsonSubTypesParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonSubTypes', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTypeId = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator that can be used on a property accessor (field, getter or setter, constructor parameter)
 * to indicate that the property is to contain type id to use when including polymorphic type information.
 * This decorator should only be used if the intent is to override generation of standard type id:
 * if so, value of the property will be accessed during serialization and used as the type id.
 *
 * On deserialization, this decorator has no effect.
 *
 * On serialization, this decorator will exclude property from being serialized along other properties;
 * instead, its value is serialized as the type identifier.
 *
 * @example
 * ```typescript
 * @JsonTypeInfo({
 *   use: JsonTypeInfoId.NAME,
 *   include: JsonTypeInfoAs.WRAPPER_OBJECT
 * })
 * @JsonSubTypes({
 *   types: [
 *     {class: () => Dog, name: 'dog'},
 *     {class: () => Cat, name: 'cat'},
 *   ]
 * })
 * class Animal {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 * }
 *
 * @JsonTypeName({value: 'dog'})
 * class Dog extends Animal {
 *   @JsonTypeId() @JsonClassType({type: () => [String]})
 *   typeId: string;
 * }
 *
 * @JsonTypeName({value: 'cat'})
 * class Cat extends Animal {
 *   @JsonTypeId() @JsonClassType({type: () => [String]})
 *   getTypeId(): string {
 *     return 'CatTypeId';
 *   }
 * }
 * ```
 */
exports.JsonTypeId = util_1.makeJacksonDecorator((o = {}) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        util_1.defineMetadata('JsonTypeId', options, target.constructor);
    }
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTypeIdResolver = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator that can be used to plug a custom type identifier handler ({@link TypeIdResolver})
 * to be used for converting between JavaScript types and type id included in JSON content.
 * In simplest cases this can be a simple class with static mapping between type names and matching classes.
 *
 * @example
 * ```typescript
 * class CustomTypeIdResolver implements TypeIdResolver {
 *   idFromValue(obj: any, context: (JsonStringifierTransformerContext | JsonParserTransformerContext)): string {
 *     if (obj instanceof Dog) {
 *       return 'animalDogType';
 *     } else if (obj instanceof Cat) {
 *       return 'animalCatType';
 *     }
 *     return null;
 *   }
 *   typeFromId(id: string, context: (JsonStringifierTransformerContext | JsonParserTransformerContext)): ClassType<any> {
 *     switch (id) {
 *     case 'animalDogType':
 *       return Dog;
 *     case 'animalCatType':
 *       return Cat;
 *     }
 *     return null;
 *   };
 * }
 *
 * @JsonTypeInfo({
 *   use: JsonTypeInfoId.NAME,
 *   include: JsonTypeInfoAs.PROPERTY
 * })
 * @JsonTypeIdResolver({resolver: new CustomTypeIdResolver()})
 * class Animal {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 * }
 *
 * class Dog extends Animal {
 *
 * }
 *
 * class Cat extends Animal {
 *
 * }
 * ```
 */
exports.JsonTypeIdResolver = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonTypeIdResolver', options, target);
        return target;
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        util_1.defineMetadata('JsonTypeIdResolverParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonTypeIdResolver', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTypeInfo = exports.JsonTypeInfoAs = exports.JsonTypeInfoId = void 0;
const util_1 = __webpack_require__(0);
/**
 * Definition of different type identifiers that can be included in JSON during serialization, and used for deserialization.
 */
var JsonTypeInfoId;
(function (JsonTypeInfoId) {
    /**
     * Means that logical type name is used as type information;
     * name will then need to be separately resolved to actual concrete type (Class).
     */
    JsonTypeInfoId[JsonTypeInfoId["NAME"] = 0] = "NAME";
})(JsonTypeInfoId = exports.JsonTypeInfoId || (exports.JsonTypeInfoId = {}));
/**
 * Definition of standard type inclusion mechanisms for type metadata.
 */
var JsonTypeInfoAs;
(function (JsonTypeInfoAs) {
    /**
     * Inclusion mechanism that uses a single configurable property, included along with actual data
     * (Class properties) as a separate meta-property.
     */
    JsonTypeInfoAs[JsonTypeInfoAs["PROPERTY"] = 0] = "PROPERTY";
    /**
     * Inclusion mechanism that wraps typed JSON value (Class serialized as JSON)
     * in a JSON Object that has a single entry, where field name is serialized type identifier,
     * and value is the actual JSON value.
     */
    JsonTypeInfoAs[JsonTypeInfoAs["WRAPPER_OBJECT"] = 1] = "WRAPPER_OBJECT";
    /**
     * Inclusion mechanism that wraps typed JSON value (Class serialized as JSON)
     * in a 2-element JSON array: first element is the serialized type identifier,
     * and second element the serialized Class as JSON Object.
     */
    JsonTypeInfoAs[JsonTypeInfoAs["WRAPPER_ARRAY"] = 2] = "WRAPPER_ARRAY";
})(JsonTypeInfoAs = exports.JsonTypeInfoAs || (exports.JsonTypeInfoAs = {}));
/**
 * Decorator used for configuring details of if and how type information is used
 * with JSON serialization and deserialization, to preserve information about actual class of Object instances.
 * This is necessarily for polymorphic types, and may also be needed to link abstract declared types
 * and matching concrete implementation.
 *
 * When used for properties (fields, methods), this decorator applies to values:
 * so when applied to Iterables and Maps, it will apply to contained values, not the container.
 *
 * @example
 * ```typescript
 * @JsonTypeInfo({
 *   use: JsonTypeInfoId.NAME,
 *   include: JsonTypeInfoAs.PROPERTY
 * })
 * @JsonSubTypes({
 *   types: [
 *     {class: () => Dog, name: 'dog'},
 *     {class: () => Cat, name: 'cat'},
 *   ]
 * })
 * class Animal {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 * }
 *
 * @JsonTypeName({value: 'dog'})
 * class Dog extends Animal {
 *
 * }
 *
 * @JsonTypeName({value: 'cat'})
 * class Cat extends Animal {
 *
 * }
 * ```
 */
exports.JsonTypeInfo = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true, use: JsonTypeInfoId.NAME, include: JsonTypeInfoAs.PROPERTY, property: '@type' }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonTypeInfo', options, target);
        return target;
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        util_1.defineMetadata('JsonTypeInfoParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonTypeInfo', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTypeName = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator used for binding logical name that the decorated class has.
 * Used with {@link JsonTypeInfo}.
 *
 * @example
 * ```typescript
 * @JsonTypeInfo({
 *   use: JsonTypeInfoId.NAME,
 *   include: JsonTypeInfoAs.PROPERTY
 * })
 * @JsonSubTypes({
 *   types: [
 *     {class: () => Dog, name: 'dog'},
 *     {class: () => Cat, name: 'cat'},
 *   ]
 * })
 * class Animal {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 * }
 *
 * @JsonTypeName({value: 'dog'})
 * class Dog extends Animal {
 *
 * }
 *
 * @JsonTypeName({value: 'cat'})
 * class Cat extends Animal {
 *
 * }
 * ```
 */
exports.JsonTypeName = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        options._ctor = target;
        if (!options.value) {
            options.value = target.name;
        }
        util_1.defineMetadata('JsonTypeName', options, target);
        util_1.defineMetadata('JsonTypeName', options, target, null, {
            suffix: options.value
        });
        util_1.defineMetadata('JsonTypeName', options, target, null, {
            suffix: target.name
        });
        return target;
    }
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonUnwrapped = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator used to indicate that a property should be serialized "unwrapped";
 * that is, if it would be serialized as JSON Object, its properties are
 * instead included as properties of its containing Object.
 *
 * It cannot be applied on Iterables and in conjunction of {@link JsonTypeInfo} as it requires use of type information.
 *
 * @example
 * ```typescript
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty()
 *   @JsonUnwrapped()
 *   @JsonClassType({type: () => [Name]})
 *   name: Name;
 * }
 *
 * class Name {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   first: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   last: string;
 * }
 * ```
 */
exports.JsonUnwrapped = util_1.makeJacksonDecorator((o = {}) => (Object.assign({ enabled: true, prefix: '', suffix: '' }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        util_1.defineMetadata('JsonUnwrapped', options, target.constructor, propertyKey);
        util_1.defineMetadata('JsonUnwrapped', options, target.constructor, null, {
            suffix: propertyKey.toString()
        });
    }
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonValue = void 0;
const util_1 = __webpack_require__(0);
const JacksonError_1 = __webpack_require__(1);
/**
 * Decorator that indicates that the value of decorated accessor (either field or "getter" method)
 * is to be used as the single value to serialize for the instance,
 * instead of the usual method of collecting properties of value.
 *
 * At most one accessor of a Class can be decorated with this decorator;
 * if more than one is found, an exception may be thrown.
 *
 * @example
 * ```typescript
 * class Company {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *   @JsonProperty()
 *   @JsonClassType({type: () => [Array, [Employee]]})
 *   employees: Employee[] = [];
 * }
 *
 * class Employee {
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   name: string;
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   age: number;
 *
 *   @JsonValue()
 *   toEmployeeInfo(): string {
 *     return this.name + ' - ' + this.age;
 *   }
 * }
 * ```
 */
exports.JsonValue = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (propertyKey != null) {
        if (util_1.hasMetadata('JsonValue', target.constructor, null, { withContextGroups: options.contextGroups })) {
            throw new JacksonError_1.JacksonError(`Multiple @JsonValue() decorators for ${target.constructor}.'`);
        }
        util_1.defineMetadata('JsonValue', options, target.constructor);
    }
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Decorators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonView = void 0;
const util_1 = __webpack_require__(0);
/**
 * Decorator used for indicating view(s) that the property that is defined by method or field decorated is part of.
 * If multiple View class identifiers are included, property will be part of all of them.
 *
 * It is also possible to use this decorator on classes to indicate the default view(s)
 * for properties of the type, unless overridden by per-property decorator.
 *
 * @example
 * ```typescript
 * class Views {
 *   static public = class Public {};
 *   static internal = class Internal {};
 * }
 *
 * class User {
 *   @JsonProperty() @JsonClassType({type: () => [Number]})
 *   id: number;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   email: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   @JsonView({value: () => [Views.internal]})
 *   password: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   firstname: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   lastname: string;
 *   @JsonProperty() @JsonClassType({type: () => [String]})
 *   @JsonView({value: () => [Views.internal]})
 *   activationCode: string;
 *
 *   constructor(id: number, email: string, password: string, firstname: string, lastname: string, activationCode: string) {
 *     this.id = id;
 *     this.email = email;
 *     this.password = password;
 *     this.firstname = firstname;
 *     this.lastname = lastname;
 *     this.activationCode = activationCode;
 *   }
 * }
 *
 * const user = new User(1, 'john.alfa@gmail.com', 'rtJ9FrqP!rCE', 'John', 'Alfa', '75afe654-695e-11ea-bc55-0242ac130003');
 *
 * const objectMapper = new ObjectMapper();
 *
 * const jsonDataWithViewPublic = objectMapper.stringify<User>(user, {
 *   withViews: () => [Views.public]
 * });
 * ```
 */
exports.JsonView = util_1.makeJacksonDecorator((o) => (Object.assign({ enabled: true }, o)), (options, target, propertyKey, descriptorOrParamIndex) => {
    if (descriptorOrParamIndex == null && propertyKey == null) {
        util_1.defineMetadata('JsonView', options, target);
        return target;
    }
    if (descriptorOrParamIndex != null && typeof descriptorOrParamIndex === 'number') {
        util_1.defineMetadata('JsonViewParam', options, (target.constructor.toString().endsWith('{ [native code] }')) ? target : target.constructor, (propertyKey) ? propertyKey : 'constructor', {
            suffix: descriptorOrParamIndex.toString()
        });
    }
    if (propertyKey != null) {
        util_1.defineMetadata('JsonView', options, target.constructor, propertyKey);
    }
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Databind
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultDeserializationFeatureValues = void 0;
const CommonFeature_1 = __webpack_require__(6);
/**
 * Variable that defines default feature values for {@link ObjectMapper} and {@link JsonParser}.
 */
exports.DefaultDeserializationFeatureValues = Object.assign({ 
    /**
     * {@link DeserializationFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES}
     */
    ACCEPT_CASE_INSENSITIVE_PROPERTIES: false, 
    /**
     * {@link DeserializationFeature.ACCEPT_EMPTY_ARRAY_AS_NULL_OBJECT}
     */
    ACCEPT_EMPTY_ARRAY_AS_NULL_OBJECT: false, 
    /**
     * {@link DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT}
     */
    ACCEPT_EMPTY_STRING_AS_NULL_OBJECT: false, 
    // /**
    //  * {@link DeserializationFeature.ACCEPT_FLOAT_AS_INT}
    //  */
    // ACCEPT_FLOAT_AS_INT: false,
    /**
     * {@link DeserializationFeature.ALLOW_COERCION_OF_SCALARS}
     */
    ALLOW_COERCION_OF_SCALARS: false, 
    /**
     * {@link DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES}
     */
    FAIL_ON_UNKNOWN_PROPERTIES: true, 
    /**
     * {@link DeserializationFeature.FAIL_ON_NULL_FOR_PRIMITIVES}
     */
    FAIL_ON_NULL_FOR_PRIMITIVES: false, 
    /**
     * {@link DeserializationFeature.FAIL_ON_MISSING_CREATOR_PROPERTIES}
     */
    FAIL_ON_MISSING_CREATOR_PROPERTIES: false, 
    /**
     * {@link DeserializationFeature.FAIL_ON_NULL_CREATOR_PROPERTIES}
     */
    FAIL_ON_NULL_CREATOR_PROPERTIES: false, 
    /**
     * {@link DeserializationFeature.FAIL_ON_UNRESOLVED_OBJECT_IDS}
     */
    FAIL_ON_UNRESOLVED_OBJECT_IDS: true, 
    /**
     * {@link DeserializationFeature.FAIL_ON_INVALID_SUBTYPE}
     */
    FAIL_ON_INVALID_SUBTYPE: true, 
    /**
     * {@link DeserializationFeature.FAIL_ON_MISSING_TYPE_ID}
     */
    FAIL_ON_MISSING_TYPE_ID: true, 
    /**
     * {@link DeserializationFeature.UNWRAP_ROOT_VALUE}
     */
    UNWRAP_ROOT_VALUE: false }, CommonFeature_1.DefaultCommonFeatureValues);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Databind
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectMapper = void 0;
const JsonStringifier_1 = __webpack_require__(7);
const JsonParser_1 = __webpack_require__(12);
/**
 * ObjectMapper provides functionality for reading and writing JSON.
 * It is also highly customizable to work both with different styles of JSON content,
 * and to support more advanced Object concepts such as polymorphism and Object identity.
 *
 * ObjectMapper will use instances of {@link JsonParser} and {@link JsonStringifier}
 * for implementing actual reading/writing of JSON.
 */
class ObjectMapper {
    /**
     *
     * @param defaultStringifierContext - Default context to use during serialization.
     * @param defaultParserContext - Default context to use during deserialization.
     */
    constructor(defaultStringifierContext = JsonStringifier_1.JsonStringifier.makeDefaultContext(), defaultParserContext = JsonParser_1.JsonParser.makeDefaultContext()) {
        this.defaultStringifierContext = defaultStringifierContext;
        this.defaultParserContext = defaultParserContext;
    }
    /**
     * Method for serializing a JavaScript object or a value to a JSON string.
     * Context will be merged using {@link JsonStringifier.mergeContexts} with {@link defaultStringifierContext}.
     *
     * @param obj - the JavaScript object or value to be serialized.
     * @param context - the context to be used during serialization.
     */
    stringify(obj, context) {
        context = JsonStringifier_1.JsonStringifier.mergeContexts([this.defaultStringifierContext, context]);
        const jsonStringifier = new JsonStringifier_1.JsonStringifier();
        return jsonStringifier.stringify(obj, context);
    }
    /**
     * Method for deserializing a JSON string into a JavaScript object or value.
     * Context will be merged using {@link JsonParser.mergeContexts} with {@link defaultParserContext}.
     *
     * @param text - the JSON string to be deserialized.
     * @param context - the context to be used during deserialization.
     */
    parse(text, context) {
        context = JsonParser_1.JsonParser.mergeContexts([this.defaultParserContext, context]);
        const jsonParser = new JsonParser_1.JsonParser();
        return jsonParser.parse(text, context);
    }
}
exports.ObjectMapper = ObjectMapper;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module Databind
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSerializationFeatureValues = void 0;
const CommonFeature_1 = __webpack_require__(6);
/**
 * Variable that defines default feature values for {@link ObjectMapper} and {@link JsonStringifier}.
 */
exports.DefaultSerializationFeatureValues = Object.assign({ 
    /**
     * {@link SerializationFeature.DEFAULT_PROPERTY_INCLUSION}
     */
    DEFAULT_PROPERTY_INCLUSION: null, 
    /**
     * {@link SerializationFeature.FAIL_ON_SELF_REFERENCES}
     */
    FAIL_ON_SELF_REFERENCES: true, 
    /**
     * {@link SerializationFeature.ORDER_MAP_AND_OBJECT_LITERAL_ENTRIES_BY_KEYS}
     */
    ORDER_MAP_AND_OBJECT_LITERAL_ENTRIES_BY_KEYS: false, 
    /**
     * {@link SerializationFeature.SORT_PROPERTIES_ALPHABETICALLY}
     */
    SORT_PROPERTIES_ALPHABETICALLY: false, 
    /**
     * {@link SerializationFeature.WRAP_ROOT_VALUE}
     */
    WRAP_ROOT_VALUE: false, 
    /**
     * {@link SerializationFeature.WRITE_NAN_AS_ZERO}
     */
    WRITE_NAN_AS_ZERO: false, 
    /**
     * {@link SerializationFeature.WRITE_POSITIVE_INFINITY_AS_NUMBER_MAX_SAFE_INTEGER}
     */
    WRITE_POSITIVE_INFINITY_AS_NUMBER_MAX_SAFE_INTEGER: false, 
    /**
     * {@link SerializationFeature.WRITE_POSITIVE_INFINITY_AS_NUMBER_MAX_VALUE}
     */
    WRITE_POSITIVE_INFINITY_AS_NUMBER_MAX_VALUE: false, 
    /**
     * {@link SerializationFeature.WRITE_NEGATIVE_INFINITY_AS_NUMBER_MIN_SAFE_INTEGER}
     */
    WRITE_NEGATIVE_INFINITY_AS_NUMBER_MIN_SAFE_INTEGER: false, 
    /**
     * {@link SerializationFeature.WRITE_NEGATIVE_INFINITY_AS_NUMBER_MIN_VALUE}
     */
    WRITE_NEGATIVE_INFINITY_AS_NUMBER_MIN_VALUE: false, 
    /**
     * {@link SerializationFeature.WRITE_DATES_AS_TIMESTAMPS}
     */
    WRITE_DATES_AS_TIMESTAMPS: true, 
    /**
     * {@link SerializationFeature.WRITE_DATE_KEYS_AS_TIMESTAMPS}
     */
    WRITE_DATE_KEYS_AS_TIMESTAMPS: false, 
    /**
     * {@link SerializationFeature.WRITE_SELF_REFERENCES_AS_NULL}
     */
    WRITE_SELF_REFERENCES_AS_NULL: false }, CommonFeature_1.DefaultCommonFeatureValues);


/***/ })
/******/ ]);
});