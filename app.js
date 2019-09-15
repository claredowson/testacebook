var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.use(morgan('tiny'));

// Set static filepaths

app.use(express.static(path.join(__dirname, '/public'))); // sets up static directory for static files
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css/')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/popper.js/dist/')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist/')));

// Serves the static 'index.html' page for the '/' route
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Defines the listening port
var port = process.env.PORT || 4040;
app.listen(port, function () {
  debug(`listening on port ${chalk.green(port)}`);
});
