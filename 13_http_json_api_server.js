/* 13. HTTP JSON API SERVER */

// make an http server
// sent JSON data when receiving a GET request to /api/parsetime
// request will contain a query string with a key of iso and ISO time as value
// i.e.: /api/paretime?iso=iso-format-time
// response should contain only h, m, s
// make a second endpoint return UNIX epoch time

var http = require('http');
var url = require('url');

function getTimestamp(strtime) {
	return Date.parse(strtime);
}

function getUnixTimestamp(strtime) {
	return {
		unixtime: getTimestamp(strtime)
	};
}

function getTimeObj(strtime) {
	var date = new Date(getTimestamp(strtime));

	return {
		hour  : date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
}

http.createServer(function(req, res) {

	var urlObj = url.parse(req.url, true);
	var pathname = urlObj.pathname;
	var strtime = urlObj.query.iso;

	var result;

	if (pathname === '/api/parsetime') {
		result = getTimeObj(strtime);
	}
	else if (pathname === '/api/unixtime') {
		result = getUnixTimestamp(strtime);
	}

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json'});
		res.end(JSON.stringify(result));
	}
	else {
		res.writeHead(404);
		res.end();
	}

}).listen(process.argv[2]);