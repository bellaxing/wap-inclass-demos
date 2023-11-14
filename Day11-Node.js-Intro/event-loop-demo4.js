const fs = require('fs');

console.log('start');
fs.readFile('hello.txt', () => console.log('readFile....'));
new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...'));
process.nextTick(() =>  console.log('nextTick'));
console.log('end');