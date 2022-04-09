const { WARNING } = require('../helpers');

const warningRules = {
  'max-len': [WARNING, { code: 130 }],
  'no-console': WARNING,
  'no-debugger': WARNING,
  'no-unused-vars': [WARNING, { args: 'none' }],
};

module.exports = { warningRules };
