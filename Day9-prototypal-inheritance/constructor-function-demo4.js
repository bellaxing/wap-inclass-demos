function User(name){   
    this.name = name; 
    this.isAdmin = false;
    // this.setName = function(newName){
    //     this.name = newName;
    // }
}

User.prototype.printUser = function() {
    console.log(`${this.name}, ${this.isAdmin}`);
}

// User.prototype.name = 'John';

const john = new User('John');
john.setName('Johnny');
john.printUser();

const edward = new User('Edward');
edward.setName('Ediiiiiiward');
edward.printUser();




