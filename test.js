var http = require('http');
var express = require('express');
var url = require('url');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded{{ extended: true }});
app.use(bodyParser.json());

app.set("view engine","html");
app.set("views",path.join(__dirname,"views"))
app.get('/',function(req,res){
	res.render("index");
});

http.createServer().listen(2000);
