/* 3 & 4. MY FIRST I/O! */

// use single synchronous filesystem operation
// read a file
// print the number of new lines
// full path in the command line argument
// all synchornous calls end with Sync

// you need the file system module
var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, function(err, data) {
	var newlines = data.toString().split('\n').length -1;
	console.log(newlines);
});