const fs = require('fs');

console.log('start');
const readStream = fs.createReadStream('hello.txt');
readStream.close();
readStream.on('close', () => console.log('close'));
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('Immediate'));
console.log('end');