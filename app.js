var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send("Hello, world!")
});

port = 4040
app.listen(port, function(){
  console.log("listening on port " + port)
});
