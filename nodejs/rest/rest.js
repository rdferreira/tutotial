var bodyParser = require('body-parser');

var express = require('express');

var app = express();


function getResponse(response, method, value){
	response.send('<h1>' + method + ': ' + value + '</h1>');
};

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/service/:name', function(req, res){
	getResponse(res, req.method, req.params.name);
	// res.send(getResponse(req.method, req.params.name));
}); // modelo da URL 

app.get('/form', function(req, res){
	getResponse(res, req.method, req.query.name);
	// res.send(getResponsi(req.method, req.query.name));	
}); // modelo de URL Antigo

app.post('/service', function(req, res){
	getResponse(res, req.method, req.body.name);
	// res.send(getResponse(req.method, req.body.name));	
});

app.put('/service', function(req, res){
	getResponse(res, req.method, req.body.name);
});

app.delete('/service', function(req, res){
	getResponse(res, req.method, req.body.name);
});

app.listen(8080);