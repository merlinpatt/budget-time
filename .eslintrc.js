module.exports = {
  extends: 'airbnb',

  env: {
    browser: true,
    es6: true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },

  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-with-styles',
  ],

  rules: {
    // these are temporary until the import package gets fixed for meteor
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',

    'arrow-body-style': 'off',
    'brace-style': ['error', 'stroustrup'],
    'camelcase': ['error', {properties: 'always'}],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'consistent-return': 'off',
    'max-len': ['error', 120],
    'no-warning-comments': 'warn',
    'no-underscore-dangle': ['error', {allow: ['_id', '_ensureIndex']}],
    'no-use-before-define': ['error', {variables: false}],
    'object-curly-spacing': ['error', 'never'],
    'space-unary-ops': ['error', {words: true, nonwords: true, overrides: {'-': false}}],
    'import/extensions': ['error', {js: 'never', jsx: 'never'}],
    'jsx-a11y/aria-role': ['error', {ignoreNonDOM: true}],
    'react/display-name': ['error', {ignoreTranspilerName: true}],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-key': 'error',
    'react/jsx-sort-props': ['error', {callbacksLast: true, reservedFirst: true}],
    'react-with-styles/no-unused-styles': 'error',
    'react-with-styles/only-spread-css': 'error',
  },

  settings: {
    'import/resolver': {
      meteor: [
        '.js',
        '.jsx',
      ],
    },
    'propWrapperFunctions': ['forbidExtraProps'],
  },
};
