var http = require('http');
/*var dt = require('./export_module');*/
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Now a time is"+dt.myDateTime());
    res.write(req.url);
    var q = url.parse(req.url,true).query;
    var txt=q.year+" "+q.month;
    res.end(txt);
	/*fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});*/
	res.end();
}).listen(8080);