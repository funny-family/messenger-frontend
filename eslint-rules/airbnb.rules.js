module.exports = {
  'comma-dangle': ['error', 'never'],
  'operator-linebreak': ['error', 'after'],
  'no-useless-return': 'off',
  'import/prefer-default-export': 'off',
  'no-underscore-dangle': 'off',
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: ['state']
    }
  ],
  'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement']
};
