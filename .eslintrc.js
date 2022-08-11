const env = process.env.TARGET_ENV;
let webpackFile = 'webpack.dev.config.js';

if (env === 'stage' || env === 'production') {
  webpackFile = 'webpack.prod.config.js';
}

module.exports = {
  extends: ['blogfoster/react'],
  plugins: ['formatjs'],
  rules: {
    'react/default-props-match-prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': [2, { ignore: ['intl'] }],
    'react/button-has-type': 1,
    'react/sort-comp': 0,
    'react/static-property-placement': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 1,
    'react/no-access-state-in-setstate': 1,
    'react/no-unstable-nested-components': 1,
    'react/no-deprecated': 0,
    'formatjs/enforce-placeholders': [
      'error',
      {
        ignoreList: ['br', 'b', 'strong', 'p', 'i', 'h5', 'ul', 'li'],
      },
    ],
    'formatjs/no-multiple-whitespaces': 0,
    'formatjs/enforce-default-message': ['warn', 'literal'],
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'import/no-import-module-exports': 0,
    'func-style': 1,
    'default-param-last': 0,
    'no-restricted-exports': 0,
    'import/no-cycle': 0,
    'max-classes-per-file': 0,
    'no-promise-executor-return': 0,
    'no-func-assign': 0,
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: `webpack/${webpackFile}`,
      },
    },
  },
};
