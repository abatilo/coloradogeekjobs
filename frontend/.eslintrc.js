module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
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
