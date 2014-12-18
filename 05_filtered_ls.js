/* 5. FILTERED LS */

// print a list of files in a given directory
// filter by extension

var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = process.argv[3];

function filterByExt(dir, ext) {

	fs.readdir(dir, function(err, files) {

		files.forEach(function(file) {

			var fileExt = path.extname(file);
			fileExt = fileExt.substring(1, fileExt.length);

			if (fileExt === ext) {
				console.log(file);
			}
		});
	});
}

filterByExt(directory, extension);