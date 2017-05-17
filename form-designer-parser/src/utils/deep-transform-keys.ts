import * as _ from 'lodash';

/**
 * Transforms the keys of the object and its children. Also apllies to arrays of objects.
 * 
 * @export
 * @param {(object: any) => any} transformation The transformation function which will apply to the keys. Ideally receives a string and returns a string.
 * @param {*} object Object which keys will be deeply transformed.
 * @returns {*} Return the object with the deeply transformed keys.
 */
export function deepTransformKeys(transformation: (object: any) => any, object: any): any {
  if (_.isArray(object)) {
    return _.map(object, (item) => deepTransformKeys(transformation, item));
  }
  else if (object === null ||  object === undefined) {
    return object;
  }
  else if (_.isPlainObject(object)) {
    let keysTransformed = _.mapKeys(object, (value, key: string) => transformation(key));

    return _.mapValues(keysTransformed, (value) => deepTransformKeys(transformation, value));
  }
  else {
    return object;
  }
}
