'use strict';

const user = {
    firstname: 'John',
    sayHi: function() { //method -> a function inside an object
        console.log(this);
        console.log(`${this.firstname} Says Hi....`);
    }
}

//1. wrapper
// setTimeout(() => user.sayHi(), 3000);
// setTimeout(function() {
//     user.sayHi();
// }, 1000);


// 2. bind
// setTimeout(user.sayHi.bind(user), 3000);

// 3. call + wrapper
setTimeout(() => user.sayHi.call(user), 3000);

// 4. apply + wrapper
setTimeout(() => user.sayHi.apply(user), 3000);

// user.sayHi();
// console.log('******************');

// function greeting(firstname){
//     console.log(this);
// }
// greeting();
// console.log(this);


// setTimeout(user.sayHi, 1000);

