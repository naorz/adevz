const { tbdRules } = require('./tbd');
const { offRules } = require('./off');
const { warningRules } = require('./warnings');
const { importRestrictionsRules } = require('./import-restrictions');
const { errorRules, errorCustomizedRules } = require('./errors');
const { jestOverrides } = require('./overrides');

const rules = {
  ...offRules,
  ...warningRules,
  ...errorRules,
  ...errorCustomizedRules,
  ...importRestrictionsRules,
  // tbdRules must be the last one
  ...tbdRules,
};

module.exports = { rules, jestOverrides };
