var path = require('path');
var http = require('http');
var fs = require('fs');

module.exports = function (request, response){
	//return {
	//server = function (request, response){
		response.writeHead(200, {'Content-type': 'text/html'});
		console.log('Request', request.url);
		if(request.url === '/'){
			fs.readFile('./views/main.html', 'utf8', function (errors, contents){
			// response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents);
			response.end();
			});
		}
		else if(path.extname(request.url) === '.html'){
			fs.readFile('./views/' + request.url, 'utf8', function (errors, contents){
			// response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents);
			response.end();
			});
		}
		else if(path.extname(request.url) === '.css'){
			fs.readFile('./stylesheets/' + request.url, 'utf8', function (errors, contents){
			// response.writeHead(200, {'Content-type': 'text/css'});
			response.write(contents);
			response.end();
			});
		}
		else if(path.extname(request.url) === '.jpg' || path.extname(request.url) === '.jpeg'){
			fs.readFile('./images/' + request.url, function (errors, contents){
			// response.writeHead(200, {'Content-type': 'image/jpg'});
			response.write(contents);
			response.end();
			});
		}
		else {
			response.end('File not found!!!');
		}
	// }
};
console.log("hello");