/**
 * Transforms the keys of the object and its children. Also apllies to arrays of objects.
 *
 * @export
 * @param {(object: any) => any} transformation The transformation function which will apply to the keys. Ideally receives a string and returns a string.
 * @param {*} object Object which keys will be deeply transformed.
 * @returns {*} Return the object with the deeply transformed keys.
 */
export declare function deepTransformKeys(transformation: (object: any) => any, object: any): any;
