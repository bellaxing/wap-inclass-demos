const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    const file = fs.readFileSync('index.html', 'utf-8');
    res.end(file);
}).listen(3000);