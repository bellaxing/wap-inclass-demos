const person = require('./person');
// person = {}

console.log(person.getName);

person.getName();
person.name = 'Jack';
person.getName();

// person ={}, person.getName is undefined, 
// when we make a function call on undefined, it throw error