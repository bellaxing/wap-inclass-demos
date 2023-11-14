class Person{
    constructor(firstname="John", lastname="Smith"){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}

exports.getLastname = function(){
    console.log(this.lastname);
}
exports = Person;

module.exports.person = Person;
exports = module.exports;
exports.getFirstname = function(){
    console.log(this.firstname);
}

