const vueFileRules = {
  'vue/no-deprecated-destroyed-lifecycle': 'error',
  'vue/no-deprecated-dollar-listeners-api': 'error',
  'vue/no-setup-props-destructure': 'error',
  'vue/html-closing-bracket-newline': [
    'error',
    {
      singleline: 'never',
      multiline: 'always'
    }
  ],
  'vue/component-name-in-template-casing': [
    'error',
    'PascalCase',
    {
      registeredComponentsOnly: true,
      ignores: []
    }
  ]
};

const airbnbOverwrittenRules = {
  'comma-dangle': ['error', 'never'],
  'operator-linebreak': ['error', 'after'],
  'no-useless-return': 'off',
  'import/prefer-default-export': 'off',
  'no-underscore-dangle': 'off',
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'state'
      ]
    }
  ]
};

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential', // eslint-plugin-vue
    'airbnb-base', // eslint-config-airbnb-base
    'eslint:recommended' // eslint
  ],
  plugins: ['prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser' // @babel/eslint-parser
  },
  rules: {
    ...vueFileRules,
    ...airbnbOverwrittenRules,

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  settings: {
    'import/resolver': { // eslint-plugin-import
      alias: { // eslint-import-resolver-alias to make alias work with eslint
        map: [['@', './src']],
        extensions: ['.js', '.ts', '.vue']
      }
    }
  }
};
