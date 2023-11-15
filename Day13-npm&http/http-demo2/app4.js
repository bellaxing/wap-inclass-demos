const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers);
    if(req.url === '/'){
        fs.createReadStream('index.html').pipe(res);
    } else if(req.method === 'POST' && req.url === '/signup'){
        // read post data
        //save to file
        //response save succesfully
        const body = [];

        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            console.log('end data');
            const parseString = Buffer.concat(body).toString();
            console.log(parseString);
            res.end('Save successfully');
        });
   
    } else {
        res.end('NOT SUPPORT!');
    }
   
}).listen(3000);