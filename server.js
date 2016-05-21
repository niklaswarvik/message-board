var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());



var routes = require('./apiRoutes')(app, express);
app.use('/api', routes);
app.listen(3000);
