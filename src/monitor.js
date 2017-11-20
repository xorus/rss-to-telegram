const http = require('http');

const start = function (port) {
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end();
    }).listen(port);
};

module.exports = {
    start: start
};