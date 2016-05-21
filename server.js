var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');

var app = express();

app.use(morgan());
app.use(bodyParser.json());



var routes = require('./apiRoutes')(app, express);
app.use('/api', routes);
app.listen(3000);

app.get('/',(err, res) => {
	res.sendFile(path.join(__dirname, '/static', 'index.html'));
});
app.listen(80);