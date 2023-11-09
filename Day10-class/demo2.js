// turn demo1.js class User into constructor function
// 'use strict';
function User(firstname, lastname, newAge){
    this.firstname = firstname;
    this.lastname = lastname;
    age = newAge; 
}

User.prototype.getFirstname = function(){
    return this.firstname;
}

User.prototype.setLastname= function(lastname){
    this.lastname = lastname;
}

// alert(User);

const john = new User('John', 'Smith', 20);
// console.log(john);
for(let propertyName in john){
    console.log(`${propertyName}, ${john[propertyName]}`);
}
