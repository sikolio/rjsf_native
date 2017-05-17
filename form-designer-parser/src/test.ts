/**
 * Define inspector
 */
const util = require('util')
const inspect = (object: any, ...args) => console.log.apply(null, [...args, util.inspect(object, false, null)]);

/**
 * Required imports
 */
import { Column } from 'models';
import { toDraftSchema, jsonSchema } from './parsers';

import { formSample, columnSamples } from './samples';

/**
 * Perform tests
 */
let draftSchema = toDraftSchema(formSample, columnSamples);

inspect(draftSchema);
inspect(jsonSchema(draftSchema));