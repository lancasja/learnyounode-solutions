/* 12. HTTP UPPERCASERER */

// make an http server
// it only receives POST requests
// converts requests to uppercase and return to client
// port provided by first argument

var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
	
	if (req.method != 'POST') {
		return res.end('Please send only POST\n');
	}

	req.pipe(map(function(data) {
		return data.toString().toUpperCase();
	})).pipe(res);

});

server.listen(port);