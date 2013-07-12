var express = require('express');
var Buffer = require('buffer');
var fs = require('fs');

 var app = express.createServer(express.logger());

app.get('/', function(request, response) {


var Buffer = new Buffer(fs.readFileSync('./index.html'));
var k = Buffer.toString("utf-8",0,Buffer.length);

response.send(k);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
