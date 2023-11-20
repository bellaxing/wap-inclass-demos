const fs = require('fs');

console.log('start');
fs.readFile('hello.txt', () => {
    console.log('readFile....');
});

setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('Immediate'));


console.log('end');


