"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
/**
 * Transforms the keys of the object and its children. Also apllies to arrays of objects.
 *
 * @export
 * @param {(object: any) => any} transformation The transformation function which will apply to the keys. Ideally receives a string and returns a string.
 * @param {*} object Object which keys will be deeply transformed.
 * @returns {*} Return the object with the deeply transformed keys.
 */
function deepTransformKeys(transformation, object) {
    if (_.isArray(object)) {
        return _.map(object, function (item) { return deepTransformKeys(transformation, item); });
    }
    else if (object === null || object === undefined) {
        return object;
    }
    else if (_.isPlainObject(object)) {
        var keysTransformed = _.mapKeys(object, function (value, key) { return transformation(key); });
        return _.mapValues(keysTransformed, function (value) { return deepTransformKeys(transformation, value); });
    }
    else {
        return object;
    }
}
exports.deepTransformKeys = deepTransformKeys;
