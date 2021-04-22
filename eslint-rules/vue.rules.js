const componentNamingStyle = 'PascalCase';
const tabSize = 2;

module.exports = {
  'vue/v-slot-style': ['error', {
    atComponent: 'v-slot',
    default: 'v-slot',
    named: 'longform'
  }],
  'vue/html-indent': ['error', tabSize, {
    attribute: 1,
    baseIndent: 1,
    closeBracket: 0,
    alignAttributesVertically: true,
    ignores: []
  }],
  'vue/multiline-html-element-content-newline': ['error', {
    ignoreWhenEmpty: true,
    allowEmptyLines: true
  }],
  'vue/component-name-in-template-casing': [
    'error',
    componentNamingStyle,
    {
      registeredComponentsOnly: true,
      ignores: []
    }
  ],
  'vue/name-property-casing': ['error', componentNamingStyle],
  'vue/use-v-on-exact': ['error'],
  'vue/no-multi-spaces': ['error', {
    ignoreProperties: false
  }],
  'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
  'vue/mustache-interpolation-spacing': ['error', 'always'],
  'vue/padding-line-between-blocks': ['error', 'always'],
  'vue/html-closing-bracket-spacing': ['error', {
    startTag: 'never',
    endTag: 'never',
    selfClosingTag: 'always'
  }],
  'vue/attribute-hyphenation': ['error', 'never', {
    ignore: []
  }],
  'vue/new-line-between-multi-line-property': ['error', {
    minLineOfMultilineProperty: tabSize
  }],
  'vue/html-comment-indent': ['error', tabSize],
  'vue/html-comment-content-spacing': ['error',
    'always',
    {
      exceptions: []
    }
  ],
  'vue/component-tags-order': ['error', {
    order: ['template', 'script', 'style']
  }],
  'vue/html-closing-bracket-newline': [
    'error',
    {
      singleline: 'never',
      multiline: 'always'
    }
  ],
  'vue/max-attributes-per-line': [
    'error',
    {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }
  ],
  'vue/html-self-closing': ['error', {
    html: {
      void: 'always',
      normal: 'always',
      component: 'always'
    }
  }],
  'vue/attributes-order': [
    'error',
    {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      alphabetical: false
    }
  ]
};
