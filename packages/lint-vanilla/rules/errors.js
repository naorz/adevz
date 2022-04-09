const { ERROR } = require('../helpers');

const errorRules = {
  strict: ERROR,
  'no-var': ERROR,
  'eol-last': ERROR,
  'dot-notation': ERROR,
  'no-multi-spaces': ERROR,
  'no-trailing-spaces': ERROR,
  'space-before-blocks': ERROR,
  'object-curly-spacing': [ERROR, 'always'],
  'no-for-of-loops/no-for-of-loops': ERROR,
};

const errorCustomizedRules = {
  indent: [ERROR, 2],
  eqeqeq: [ERROR, 'allow-null'],
  quotes: [ERROR, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  'brace-style': [ERROR, '1tbs', { allowSingleLine: true }],
  'key-spacing': [ERROR, { afterColon: true, beforeColon: false }],
  'dot-location': [ERROR, 'property'],
  'comma-dangle': [ERROR, 'always-multiline'],
  'valid-typeof': [ERROR, { requireStringLiterals: true }],
  'import/order': [ERROR, { 'newlines-between': 'never' }],
  'spaced-comment': [ERROR, 'always', { exceptions: ['-', '+', '*'] }],
  'keyword-spacing': [ERROR, { after: true, before: true }],
  'max-classes-per-file': [ERROR, 2],
  'no-restricted-syntax': [ERROR, 'WithStatement'],
  'no-use-before-define': [ERROR, { functions: false, variables: false }],
  'no-inner-declarations': [ERROR, 'functions'],
  'no-unused-expressions': [ERROR, { allowTernary: true, allowShortCircuit: true }],
  'function-paren-newline': [ERROR, 'multiline-arguments'],
  'space-before-function-paren': [ERROR, { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
};

module.exports = { errorRules, errorCustomizedRules };
