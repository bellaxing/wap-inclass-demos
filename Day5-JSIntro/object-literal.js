const person = {
    firstname: 'John',
    lastname: 'Smith'
};

let type = 'age';

person[type] = 'some value';
console.log(person);
console.log(typeof person);


// const person = {
//     firstname: 'John',
//     lastname: 'Smith'
// };
// console.log(person);
// person.age = 20;
// console.log(person);
// person['address'] = 'Fairfield';
// console.log(person);



// const person = {
//     'firstname': 'John',
//     lastname: 'Smith',
//     age: 20,
//     'hi name': 'WAP'
// };

// console.log(person);
// console.log(person.firstname, person.age);
// // console.log(person.hi name);

// console.log(person['hi name']);