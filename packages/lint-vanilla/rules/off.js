const { OFF } = require('../helpers');

const offRules = {
  'no-shadow': OFF,
  'no-bitwise': OFF,
  'no-plusplus': OFF,
  'arrow-parens': OFF,
  'accessor-pairs': OFF,
  'no-multi-assign': OFF,
  'no-return-assign': OFF,
  'no-param-reassign': OFF,
  'no-useless-concat': OFF,
  'consistent-return': OFF,
  'object-curly-newline': OFF, // enforcement by 'object-curly-spacing'
  'no-underscore-dangle': OFF,
  'import/prefer-default-export': OFF,
};

module.exports = { offRules };
