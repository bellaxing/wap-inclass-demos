const fs = require('fs');

console.log('Start');
fs.readFile('hello.txt', () => console.log('read file'));
console.log('End');