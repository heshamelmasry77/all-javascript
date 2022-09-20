'use strict'


var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var url = require('url');

var port = process.env.port || 1337;

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));

// обработка GET запросов по пути '/test'
// app.use('/test', express.static('index.html'));

app.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});



// обработка POST запросов по пути '/test'
app.post('/test', function(req, res) {
    // чтение данных POST запроса
    var data = req.body.text;
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data);
});


app.use(function (req, res, next) {
    res.send('<h1>Hello from express!</h1>');
    next();
});

app.use(function (req) {
    console.log(` ${req.method} \n\r ${req.url} `);
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});