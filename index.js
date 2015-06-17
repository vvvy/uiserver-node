var express = require("express");

var LISTEN_PORT = 3000;

var app = express();

var jade = require('jade');
var main = jade.compileFile("./templates/main.jade", {});

//// Render the function
//var html = fn(locals);
//// => '<string>of jade</string>'


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.set('Content-Type', 'text/html');
    res.send(main({}));
});

app.listen(LISTEN_PORT, function() {
    console.log('Express server listening on port ' + LISTEN_PORT);
});