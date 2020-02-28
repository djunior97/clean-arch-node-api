module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'jest',
    'import'
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      "typescript": {
        "alwaysTryTypes": true // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
 
      // use <root>/path/to/folder/tsconfig.json
      "typescript": {
        "directory": "./path/to/folder"
      },
 
      // Multiple tsconfigs (Useful for monorepos)
 
      // use a glob pattern
      "typescript": {
        "directory": "./*/tsconfig.json"
      },
 
      // use an array
      "typescript": {
        "directory": [
          "./module-a/tsconfig.json",
          "./module-b/tsconfig.json"
        ]
      },
 
      // use an array of glob patterns
      "typescript": {
        "directory": [
          "./*/tsconfig.json",
          "./*/tsconfig.json"
        ]
      }
    }
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", {"argsIgnorePattern": "next"}],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "jest/no-undef": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
  },
  env: {
    "jest": true
  },
};
