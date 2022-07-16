const path = require('path');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended-module',
    'plugin:import/recommended',
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ['import'],
  overrides: [
    {
      // jest only on test files
      "files": [
        "**/*.test.js",
        "**/*.test.jsx",
        "**/*.test.ts",
        "**/*.test.tsx",
      ],
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": {
        "jest/prefer-expect-assertions": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "warn",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "warn",
      }
    }
  ],
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
    'no-unused-vars': 'warn',
    'no-plusplus': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@*',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@*/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/first': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-key': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error'
  }
};