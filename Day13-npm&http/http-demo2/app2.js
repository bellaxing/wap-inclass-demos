const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (error, data) => {
        res.end(data);
    });
}).listen(3000);