var http = require('http');
const fetch = require("node-fetch");
var fs = require('fs');


function onRequest(request, response){
response.writeHead(200, {'Content-Type': 'text/html'});
response.write('Jack Beeler Assignment 2')
fs.readFile('./getting ip html.html', null, function(error,data){
	if (error) {
		response.writehead(404);
		response.write('File not found!');
	}
	else{
		response.write(data);
		response.write('Should be workinfg');
	}
	response.end();
});
}


http.createServer(onRequest).listen(8000);




