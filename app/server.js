var express = require('express');
var server = express();

server.get('/', function(req, res) {
  res.send('Hello from expressjs');
});

server.listen(3000, function() {
  console.log('%s listening at', server.name, 3000);
});