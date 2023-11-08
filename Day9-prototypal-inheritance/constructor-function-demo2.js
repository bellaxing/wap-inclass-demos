'use strict';

function User(name){
    this.name = name; 
    this.isAdmin = false; 
}

const john = User('John'); 
console.log(john); //undefined
