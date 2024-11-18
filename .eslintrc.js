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
    quotes: [1, "double"],
    "space-before-function-paren": 0,
    camelcase: 0,
    eqeqeq: 1,
    "no-var": 1,
    "one-var": 1,
    curly: 0,
    "no-redeclare": 1,
    "dot-notation": 1,
    "no-throw-literal": 0,
    "no-unused-vars": 1,
  },
};
