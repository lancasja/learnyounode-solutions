/* 10. TIME SERVER */

// listen to TCP connections

var net = require('net');
var moment = require('moment');
var port = process.argv[2];

// callback called for every new connection
var server = net.createServer(function(socket) {

	var date = moment().format('YYYY-MM-DD hh:mm') + '\n';

	socket.write(date);
	socket.end();
});

server.listen(port);