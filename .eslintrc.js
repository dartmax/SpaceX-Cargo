module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jquery': true
  },
  plugins: [
    'import'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'import/extensions': ['error', 'always', {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never"
    }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ['node_modules', 'src/'],
      }
    },
  },
}