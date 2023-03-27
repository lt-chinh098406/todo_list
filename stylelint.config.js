module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    './node_modules/prettier-stylelint/config.js',
  ],
  plugins: ['stylelint-selector-bem-pattern', 'stylelint-prettier'],
  ignorePath: '.gitignore',
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'plugin/selector-bem-pattern': {
      preset: 'bem',
    },
    'string-quotes': 'double',
    'prettier/prettier': [
      true,
      {
        singleQuote: false,
        tabWidth: 2,
      },
    ],
  },
  singleQuote: false,
}
