var express = require('express');
var socket = require('socket.io');

var app = express();

var port = 8000;

app.listen(port, function(){
	console.log("App running on " + port);
});

// app.get('/', function(req, res){
// 	res.send('hello worfbjfbfbvbld');
// });

app.use(express.static('public'));