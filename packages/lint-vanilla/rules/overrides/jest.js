const { WARNING, ERROR } = require('../../helpers');

const jestOverrides = {
  files: ['**/*.spec.*', '**/*.test.*'],
  env: { jest: true }, // allow jest globals in spec files
  plugins: ['jest'],

  // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
  // 'extends': ['plugin:jest/recommended']
  rules: {
    // WARNING
    'jest/no-focused-tests': WARNING,
    'jest/no-disabled-tests': WARNING,

    // ERROR
    'jest/valid-expect': ERROR,
    'jest/no-identical-title': ERROR,
    'jest/prefer-to-have-length': ERROR,
  },
};

module.exports = { jestOverrides };
