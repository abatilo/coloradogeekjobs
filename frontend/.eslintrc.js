module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
    "prettier/unicorn",
  ],
  "plugins": [
    "prettier",
    "unicorn"
  ],
  "env": {
    "jest": true,
    "browser": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["node_modules","src"]
      }
    }
  }
};
