// exports = module.exports = {}

class Person {

    constructor(name = 'John') {
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }
}

// exports.person = new Person('Bella');

module.exports = new Person('Bella');
