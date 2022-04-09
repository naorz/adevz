const { ERROR } = require('../helpers');

// https://eslint.org/docs/rules/no-restricted-imports

const noDotImport = {
  name: '.',
  message: `
Please, imports module by using a specific path instead of '.', for instance:
import MyComponent from './index';`,
};

const lodashRestrictions = {
  name: 'lodash',
  message: `
Please, import all lodash is prohibited, import a specific method instead, for instance:
import cloneDeep from 'lodash/cloneDeep';`,
};

const sharedRestrictions = {
  group: ['@aqua/shared/src/*'],
  message: `Import from shared's src path is not allowed, please try to import from dist path instead.`,
};

const restrictedImports = { paths: [noDotImport, lodashRestrictions], patterns: [sharedRestrictions] };

const importRestrictionsRules = {
  'no-restricted-imports': [ERROR, restrictedImports],
};

module.exports = { importRestrictionsRules };
