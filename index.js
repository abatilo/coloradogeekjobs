const express = require('express');
const path = require('path');

const app = express();

// Let Heroku decide the port number to use
const PORT = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, 'src')));

const server = app.listen(PORT);
module.exports.server = server;
