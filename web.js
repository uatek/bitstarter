var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//   response.send('Hello World2!');
  var fileBuffer = fs.readFileSync('index.html');
  var contentString = fileBuffer.toString();
  response.send(contentString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});