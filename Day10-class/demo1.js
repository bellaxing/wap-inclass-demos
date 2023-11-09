class User{
    
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFirstname(){
        return this.firstname;
    }

    setLastname(lastname){
        this.lastname = lastname;
    }
}
// alert(User);

const john = new User('John', 'Smith', 20);

for(let propertyName in john){
    console.log(`${propertyName}, ${john[propertyName]}`);
}
// console.log(john.getFirstname());
// console.log(typeof User);
