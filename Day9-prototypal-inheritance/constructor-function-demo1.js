function User(name){
    // 1. this = {}
    // 2. what's the parent?  {[[Prototype]]: User.prototype}
    this.name = name; //this= {name: 'John', [[Prototype]]: User.prototype}
    this.isAdmin = false; // this = {name: 'John', isAdmin: false, [[Prototype]]: User.prototype}
    //return this;
}

const john = new User('John');
console.log(john);
