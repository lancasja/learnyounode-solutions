/* 9. JUGGLING ASYNC */

// 3 urls in the first 3 command line arguments
// queue results
// track which have returned everything
// only print when you have everything
// counting callbacks to manage async

// require the http module
var http = require('http');
// require the concat module
var concat = require('concat-stream');

// store command line arguments in an array as urls
var urls = process.argv.slice(2);

// initialize data
var data = [];
// initialize count
var responseCount = 0;

// iterate through the urls
urls.forEach(function(item, index) {
	
	// open a stream to receive data from current url
	http.get(item, function(res) {
		
		// set encoding of stream to output a string
		res.setEncoding('utf-8');
		
		// pipe the stream into the concat module
		res.pipe(concat(function(res) {

			// add data from stream to the data array at the current index
			data[index] = res;
			// increment count
			responseCount++;

			// if the response count is equal to the number of urls
			if (responseCount === urls.length) {

				// join the data seperated by a new line and print to console
				console.log(data.join('\n'));
			}
		}));
	});
});