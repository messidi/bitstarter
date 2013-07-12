var express = require('express');
var Buffer = require('buffer');
var fs = require('fs');

 var app = express.createServer(express.logger());

app.get('/', function(request, response) {
fs.readFileSync('index.html');
  response.send('Buffer.toString');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
