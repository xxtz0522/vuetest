module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    // 'eslint:recommended',
    'airbnb-base'
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    "indent": ["off", 2],
    'linebreak-style': [0, 'error', 'windows'],
    // "semi": [2, "always"],
    "quotes": [1, "single"],
    'no-trailing-spaces': 0,
    'spaces-before--blocks': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ["error", "always"],
    "max-len" : ["error", {code : 300}],
    "semi": 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
