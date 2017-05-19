import * as _ from 'lodash';

import { deepTransformKeys } from './deep-transform-keys';

export const deserializeString = (key) => {
  if (_.isString(key)) {
    const trimmed = (<string>key).replace(/^sys_/, '');
    return _.camelCase(trimmed);
  }

  return key;
}

export const deepParseObject = (object: any): any => deepTransformKeys(deserializeString, object);