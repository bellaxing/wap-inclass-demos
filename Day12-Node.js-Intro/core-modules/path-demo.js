const path = require('path'); //it returns a path object
console.log(path.basename('path'));

console.log(__dirname);
const location = path.join(__dirname, 'user', 'image', 'dog.jpg');
console.log(location);