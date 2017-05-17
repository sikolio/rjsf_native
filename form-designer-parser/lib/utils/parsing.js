"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var deep_transform_keys_1 = require("../utils/deep-transform-keys");
exports.deserializeString = function (key) {
    if (_.isString(key)) {
        var trimmed = key.replace(/^sys_/, '');
        return _.camelCase(trimmed);
    }
    return key;
};
exports.deepParseObject = function (object) { return deep_transform_keys_1.deepTransformKeys(exports.deserializeString, object); };
