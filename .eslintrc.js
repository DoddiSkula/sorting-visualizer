module.exports = {
  extends: ["airbnb-base"],
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": ["error", { packageDir: "./" }],
    "no-console": ["error", { allow: ["info", "warn", "error"] }],
    "use-double-quotes": true,
  },
};
