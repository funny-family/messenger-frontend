const componentNaming = 'PascalCase';

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
  'vue/component-tags-order': [
    'error',
    {
      order: ['template', 'script', 'style']
    }
  ],
  'vue/component-name-in-template-casing': [
    'error',
    componentNaming,
    {
      registeredComponentsOnly: true,
      ignores: []
    }
  ],
  'vue/name-property-casing': ['error', componentNaming]
  // 'vue/attributes-order': [
  //   'error',
  //   {
  //     order: [
  //       'DEFINITION',
  //       'LIST_RENDERING',
  //       'CONDITIONALS',
  //       'RENDER_MODIFIERS',
  //       'GLOBAL',
  //       ['UNIQUE', 'SLOT'],
  //       'TWO_WAY_BINDING',
  //       'OTHER_DIRECTIVES',
  //       'OTHER_ATTR',
  //       'EVENTS',
  //       'CONTENT'
  //     ],
  //     alphabetical: false
  //   }
  // ]
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
      ignorePropertyModificationsFor: ['state']
    }
  ]
};

module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'plugin:vue/vue3-essential', // eslint-plugin-vue
    'eslint:recommended', // eslint
    'airbnb-base' // eslint-config-airbnb-base
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
    // eslint-plugin-import
    'import/resolver': {
      // eslint-import-resolver-alias to make alias work with eslint
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.ts', '.vue']
      }
    }
  }
};
