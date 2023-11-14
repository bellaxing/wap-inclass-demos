const { error } = require('console');
const fs = require('fs'); //fs -> an object
const path = require('path');

console.log('start');
fs.appendFile('world.txt', 'Hello World......2', (error) => {
    console.log(error);
})
console.log('end');