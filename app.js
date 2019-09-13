var express = require('express');
var chalk = require('chalk');
// you shoudl leave a new line between your requires
// and the rest of the program

var app = express();

// executes a function for any requests
// to the root route
app.get('/', function(req, res){
  res.send("Hello, world!")
});

// defines the port on which express is listening on
port = 4040
app.listen(port, function(){
  console.log(`listening on port ${chalk.green(port)}`)
});
