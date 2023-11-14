const Person = require('./person');

const person = new Person();
person.firstname = 'Hello';
person.lastname = 'World';
console.log(person.getFullName());

require('./cached');