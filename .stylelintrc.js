module.exports = {
  extends: [
    'stylelint-config-rational-order',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended'
  ],
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
    'stylelint-scss'
  ],
  rules: {
    'linebreaks': 'unix',
    'max-empty-lines': [2, {
      ignore: ['comments']
    }],
    'rule-empty-line-before': ['always', {
      except: [
        'after-single-line-comment',
        'first-nested'
      ],
      ignore: ['after-comment']
    }],
    'block-closing-brace-empty-line-before': ['never'],
    'at-rule-empty-line-before': ['always', {
      except: [
        'after-same-name',
        'inside-block',
        'blockless-after-same-name-blockless',
        'blockless-after-blockless',
        'first-nested'
      ],
      ignore: ['after-comment']
    }],
    'string-quotes': 'single',
    'selector-max-id': null,
    'order/properties-order': [],
    'plugin/rational-order': [true, {
      'border-in-box-model': true,
      'empty-line-between-groups': true,
    }]
  }
};
