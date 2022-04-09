const { ciConvertWarnings } = require('./helpers');
const { rules, jestOverrides } = require('./rules');

const eslintConfig = {
  /***************************
   * Rules & Overrides
   */
  rules,
  overrides: [jestOverrides],

  /***************************
   * General
   */
  root: true, // Stops ESLint from looking for a configuration file in parent folders
  parser: '@babel/eslint-parser',
  plugins: ['no-for-of-loops'],
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:json/recommended'],

  parserOptions: {
    ecmaVersion: 'es2022',
    parserOptions: { sourceType: 'module' }, // or "script"
    requireConfigFile: false,
    configFile: './babel.config.js',
    allowImportExportEverywhere: true,
    ecmaFeatures: { experimentalObjectRestSpread: true },
  },

  settings: {
    'import/resolver': { node: { extensions: ['.js', '.vue', '.jsx'] } },
  },

  /***************************
   * Globals
   */
  globals: {},
  env: {
    es6: true,
    browser: true,
  },
};

module.exports = { config: ciConvertWarnings(eslintConfig) };
