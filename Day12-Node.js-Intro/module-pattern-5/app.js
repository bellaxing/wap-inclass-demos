const person = require('./person');

console.log(person.getFullName());
person.firstname = 'Hello';
person.lastname = 'World';
console.log(person.getFullName());

require('./cached');