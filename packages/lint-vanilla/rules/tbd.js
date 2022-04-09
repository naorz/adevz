const { OFF } = require('../helpers');

/***************************
 * TBD section
 */

// object property/curly
// eslintRules.rules['object-curly-newline'] = [ERROR, { consistent: true }];
// eslintRules.rules['object-property-newline'] = [ERROR, { allowMultiplePropertiesPerLine: true }];

const tbdRules = [
  'curly',
  'prefer-destructuring', // https://eslint.org/docs/rules/prefer-destructuring
  'no-prototype-builtins',
  'class-methods-use-this',
  'implicit-arrow-linebreak',

  // plugin: https://github.com/benmosher/eslint-plugin-import
  'import/no-cycle',
  'import/no-unresolved',
  'import/no-named-as-default',
  'import/no-extraneous-dependencies',
].reduce((eslintRules, xRuleName) => {
  eslintRules[xRuleName] = OFF;
  return eslintRules;
}, {});

module.exports = { tbdRules };
