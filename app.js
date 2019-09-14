var express = require('express');
var chalk   = require('chalk');
var debug   = require('debug')('app');
var morgan  = require('morgan');
var path    = require('path')
// you shoudl leave a new line between your requires
// and the rest of the program

var app = express();

app.use(morgan('tiny'));

// executes a function for any requests
// to the root route
// serves up the static 'index.html' page
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// defines the port on which express is listening on
port = 4040
app.listen(port, function(){
  debug(`listening on port ${chalk.green(port)}`)
});
