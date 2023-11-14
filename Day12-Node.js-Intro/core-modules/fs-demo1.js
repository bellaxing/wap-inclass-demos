const fs = require('fs'); //fs -> an object
const path = require('path');

console.log('start');
const res = fs.readFileSync('hello.txt', 'utf8');
console.log(res);

fs.readFile(path.join(__dirname, 'hello.txt'), 'utf8', (error, data) => {
    console.log(error);
    if(!error) {
        console.log('async', data);
    }
});
console.log('end');