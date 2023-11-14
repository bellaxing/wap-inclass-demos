class Person{
    constructor(firstname="John", lastname="Smith"){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}

/** Don't do it */
module.exports = new Person('Edward', 'Tuesday');