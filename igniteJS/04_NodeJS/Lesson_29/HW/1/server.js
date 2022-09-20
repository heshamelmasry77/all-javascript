'use strict'


const http = require('http');
const fs = require('fs');
const url = require('url');

const port = process.env.port || 1337; 

var requestNumber = 1;


http.createServer(function (req, res) {

    var headers = req.headers;

    var body = '';
    for (var prop in headers) {
        body += `${prop}: ${headers[prop]} <br />`
    }

    // метод response.setHeader устанавливает заголовки ответа 
    res.setHeader('Content-Type', 'text/html');

    // если значение true, ответ по умолчанию отправляется с заголовком даты. По умолчанию true
    res.sendDate = false;

    res.write('<h2> Request Headers</h2>');
    res.write(body); // метод write позволяет создавать тело ответа в режиме потока для записи данных(writable Stream)


    var writerStream = fs.createWriteStream(requestNumber + '.txt');
    var writeData = 'Request header #' + requestNumber + '\r\n\r\n' + body.replace(/<br \/>/g, "\r\n"); 

    writerStream.write(writeData, 'utf-8');
    writerStream.end();

    writerStream.on('finish', function () {
        console.log('Request header #' + requestNumber + ' has been written');
        requestNumber++;
    });

    writerStream.on('error', function (err) {
        console.log(err);
    });


    res.end();

}).listen(port, function () {
    console.log('Server running on port ' + port);
}); 
