/* 6. MAKE IT MODULAR */

// need to create 2 files
// only print to console from here

var modular = require('./modular.js');

modular(directory, extension, function(err, data) {

	if (err) {
		console.log(err);
	}

	data.forEach(function(file) {
		console.log(file);
	});
});