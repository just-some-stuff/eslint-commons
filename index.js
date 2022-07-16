const path = require('path');

module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:node/recommended-module',
    'plugin:import/recommended',
  ],
  plugins: ['jest', 'import'],
  env: {
    node: true,
    'jest/globals': true,
    browser: true
  },
  globals: {
    module: true,
    require: true,
    __dirname: true
  },
  rules: {
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-process-exit': 'error',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/order': 'error',
    'import/first': 'error'
  }
};