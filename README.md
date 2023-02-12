# eslint-config-allinone
Author: github/arpitjp

## Install
`npm i -D eslint-config-allinone`

Configure `.eslintrc.json`
```
{
  "ignorePatterns": ["dist/**"],
  "extends": [
    "eslint-config-allinone"
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  }
}
```

## (Optional) Install peer dependencies
`npm i -D eslint eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-react eslint-plugin-react-hooks`

## Available plugins
- eslint-pugin-jest
- eslint-plugin-import
- eslint-plugin-react
- eslint-plugin-react-hooks
