const { WARNING, ERROR } = require('./constants');

const convertedRules = [];

// Replace all WARNINGS with ERRORS when using this file in CI
function ciConvertWarnings(eslintConfig) {
  const IS_CI = Boolean(process.env.CI);

  if (IS_CI) {
    warnToErrorBy(convertedRules, eslintConfig.rules);
    if (Array.isArray(eslintConfig.overrides)) {
      eslintConfig.overrides.forEach(overrideObj => warnToErrorBy(convertedRules, overrideObj.rules));
    }

    if (convertedRules.length) {
      // eslint-disable-next-line no-console
      console.log(
        `ESLint: convert rules warnings to errors ${convertedRules.length}: [
        ${convertedRules.join(',\n')}
        ]`,
      );
    }
  }

  return eslintConfig;
}

module.exports = { ciConvertWarnings };

/**********************
 * Private
 */

function warnToErrorBy(convertedRules, rules = []) {
  rules.forEach((ruleValue, ruleName) => {
    // Naive rules
    if (ruleValue === WARNING) {
      convertedRules.push(ruleName);
      rules[ruleName] = ERROR;
    }

    // Complex rules
    if (Array.isArray(ruleValue) && ruleValue[0] === WARNING) {
      convertedRules.push(ruleName);
      ruleValue[0] = ERROR;
    }
  });
}
