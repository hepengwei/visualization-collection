module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "promise"],
  rules: {
    "comma-dangle": 0,
    semi: [1, "always"],
    quotes: 0,
    "space-before-function-paren": 0,
    camelcase: 0,
    eqeqeq: 1,
  },
};
