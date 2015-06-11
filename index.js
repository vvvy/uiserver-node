var express = require("express");

var LISTEN_PORT = 3000;

var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world ФФФФ');
});

app.listen(LISTEN_PORT, function() {
    console.log('Express server listening on port ' + LISTEN_PORT);
});