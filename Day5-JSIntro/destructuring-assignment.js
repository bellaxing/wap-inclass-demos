const fruit = ['apple', 'banana', 'pear', 'strawberry'];

// const f1 = fruit[0];
// const f2 = fruit[1];
// const f4 = fruit[3];

const [f1, f2,  ,f4] = fruit;
console.log(f1, f2, f4);

const user = {};
[user.firstname, user.lastname] = ['john', 'smith'];
console.log(user);


console.log('**********************************');
// destructuring assignment on Objects
const person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 20
}

// const firstname = person.firstname;
// const lastname = person.lastname;

const {firstname, lastname} = person;
console.log(firstname, lastname);

// const fname = person.firstname;
// const lname = person.lastname;
const {lastname:lname, firstname: fname} = person;
console.log(fname, lname);

