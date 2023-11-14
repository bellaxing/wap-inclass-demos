const fs = require('fs');

// const readable = fs.createReadStream('LARGE_elevation.jpg');

// const writable = fs.createWriteStream('earth.jpg');

// readable.on('data', chunk=>{
//     // console.log(chunk.length); //64 * 1024
//     // console.log(chunk);
//     writable.write(chunk);
// });

fs.createReadStream('LARGE_elevation.jpg').pipe(fs.createWriteStream('earth2.jpg'))