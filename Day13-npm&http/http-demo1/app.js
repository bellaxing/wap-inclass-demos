const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Hi......!!!!!');
});

server.listen(3000, () => console.log('listening on 3000'));