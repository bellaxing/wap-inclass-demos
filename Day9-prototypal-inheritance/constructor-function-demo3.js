// 'use strict';

function User(name){
    //1. this = {[[Prototype]]: User.prototype}
    this.name = name; //this = {name:'John', [[Prototype]]: User.prototype}
    this.isAdmin = false; ///this = {name:'John', isAdmin: false, [[Prototype]]: User.prototype}
    age = 20; //window.age = 20;
}

const john = new User('John'); 
console.log(john); 
