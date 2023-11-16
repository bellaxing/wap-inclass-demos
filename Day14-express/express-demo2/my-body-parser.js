module.exports = function(req, res, next){
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        console.log(body); //?
        const arr = body.split("&");
        const obj = {};
        arr.forEach(pair => {
            const temp = pair.split('=');
            obj[temp[0]] = temp[1];
           
        });
        req.mybody = obj;
        next();
    })
}