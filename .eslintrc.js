const path = require('path');

const OFF = 0;
const ERROR = 2;

module.exports = {
  "plugins": [
    "react",
    "import",
    "jest"
  ],
  "extends": [
    "plugin:jest/recommended",
    "airbnb",
  ],
  "parser": "babel-eslint",
  "rules": {
    "comma-dangle": [ERROR, 'always-multiline'],
    'quotes': [ERROR, 'single', {avoidEscape: true, allowTemplateLiterals: true }],
    "react/jsx-filename-extension": OFF,
    "react/no-render-return-value": OFF,
    "no-underscore-dangle": OFF,
    "no-confusing-arrow": OFF,
  },
  "globals": {
    "document": true,
    "window": true,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [path.resolve(__dirname, "src")]
      }
    }
  },
  "env": {
    "jest/globals": true
  }
};
