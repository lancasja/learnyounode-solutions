/* 7. HTTP CLIENT */

// perform a get request to a url
// url is the first command line argument

var http = require ('http');

http.get(process.argv[2], function(response) {

	// a response is a node stream
	response.setEncoding('utf-8');

	response.on('data', function(data) {
		console.log(data);
	});
});