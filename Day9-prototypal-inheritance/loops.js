const fruit = ['Banana', 'Kiwi', 'Apple', 'Pear', 'Orange'];

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }

// for(let f of fruit) { //works for array and string by default. For object, you need to implement Symbol.iterator
//     console.log(f);
// }


// fruit.forEach((item, index, array) => console.log(item));

const person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 30
}

const student = Object.create(person);
student.grade = 'A';

for(let i in student){ //in is an operator
    if(student.hasOwnProperty(i)){
        console.log(`My Own property: ${i}, ${student[i]}`)
    } else {
        console.log('inherit from parent: ', i, student[i]);
    }
}
