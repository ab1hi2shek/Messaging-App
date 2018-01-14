var express = require('express');
var socket = require('socket.io');

var app = express();

var port = 8000;

var server = app.listen(port, function(){
	console.log("App running on " + port);
});

// app.get('/', function(req, res){
// 	res.send('hello worfbjfbfbvbld');
// });

//saying express to use public directory as root address.
app.use(express.static('public'));

var io = socket(server);

// this is basically saying that on connection do this. socket parameter inside
//function determines client.
io.on('connection', function(socket){
	socket.on("chat", function(data){
		io.sockets.emit("chat", data);
	});	

	socket.on("typing", function(data){
		socket.broadcast.emit("typing", data);
	})
});