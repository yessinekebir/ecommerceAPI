var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var admin = require('./routes/admin');
var users = require('./routes/users');

app.use('/admin', admin);
app.use('/users', users);
//Configurazione porta server
var port = process.env.PORT || 8080;

app.listen(port);
module.exports = app;
