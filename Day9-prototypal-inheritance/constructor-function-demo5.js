function User(name){   
    //this = {[[Prototype]]: User.prototype}
    this.name = name; 
    this.isAdmin = false;
    //return this;
}

const john = new User('John');
console.log(john);

// Person -> Employee -> Staff

function User2(name){
    this.name = name;
    this.isAdmin = false;
    return this;
}

let john2 = Object.create(User2.prototype); // {[[Prototype]]: User.prototype}
john2 = User2.call(john2, 'John');
console.log(john2);