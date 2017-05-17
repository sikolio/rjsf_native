"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Define inspector
 */
var util = require('util');
var inspect = function (object) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return console.log.apply(null, args.concat([util.inspect(object, false, null)]));
};
var parsers_1 = require("./parsers");
var samples_1 = require("./samples");
/**
 * Perform tests
 */
var draftSchema = parsers_1.toDraftSchema(samples_1.formSample, samples_1.columnSamples);
inspect(draftSchema);
inspect(parsers_1.jsonSchema(draftSchema));
