const express = require('express');

const app = express();

// Let Heroku decide the port number to use
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('coloradogeekjobs');
});

const server = app.listen(PORT);
module.exports.server = server;
