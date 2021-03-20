const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

module.exports = {
  extends: [
    'stylelint-config-airbnb',
    // 'stylelint-config-rational-order',
    'stylelint-prettier/recommended'
  ],
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
    'stylelint-scss'
  ],
  rules: {
    'string-quotes': 'single',
    'selector-max-id': null,
    'order/properties-order': [
      sortOrderSmacss({ emptyLineBefore: 'always' })
    ]
  }
};
