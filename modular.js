var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {

	var error;
	var list = [];

	fs.readdir(dir, function(err, files) {

		if (err) {
			return callback(err);
		}

		files.forEach(function(file) {
			var fileExt = path.extname(file);
			fileExt = fileExt.substring(1, fileExt.length);

			if (fileExt === ext) {
				list.push(file);
			}
		});

		callback(error, list);

	});
}