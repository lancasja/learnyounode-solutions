/* 8. HTTP COLLECT */

// url is first command line argument
// collect all data
// first line is number of characters
// second line is the data

var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {

	response.pipe(bl(function(err, data) {
		
		if (err)
			return console.error(err);

		data = data.toString();

		console.log(data.length);
		console.log(data);

	}));
});