var express = require('express');
var app = express();

var messages = [];

app.route('/')
	.get(function(req, res, next) {
		res.send('Sug Balle');
	});



app.listen(3000);
