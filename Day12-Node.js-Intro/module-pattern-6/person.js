class Person{
    constructor(firstname="John", lastname="Smith"){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}

module.exports = Person