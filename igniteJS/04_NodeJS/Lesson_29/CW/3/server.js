'use strict'


var http = require('http');
var port = process.env.port || 1337;

http.createServer(function (req, res) {
    console.log(req.method);
    console.log(req.url);

    if (req.method == 'GET' && req.url == '/test') {
        var response_text = JSON.stringify({ message: "Hello World!" });
        res.end(response_text);
        return;
    }

    res.end();

}).listen(port, function () {
    console.log('Server running on port ' + port);

    // Создание запроса 
    // Параметры создаваемого запроса 
    var options = {
        host: 'localhost',
        port: port,
        path: '/test'
    };

    // callback используется для обработки ответа 
    var callback = function (response) {

        var body = '';
        response.on('data', function (data) {
            body += data;
        });

        response.on('end', function () {
            console.log(body);
        });
    }

    // Для создания запроса используется метод http.request(), который принимает в качестве аргумента объект конфигурации запроса
    var req = http.request(options, callback);
    req.end();

}); 
