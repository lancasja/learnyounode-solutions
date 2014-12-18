/* 11. HTTP FILE SERVER */

// server that serves same file for each request
// port provided by 1st cli argument
// location to serve file provided by 2nd cli argument

var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(req, res) {
	
	var stream = fs.createReadStream(file, { encoding: 'utf-8'});
	stream.pipe(res);

});

server.listen(port);