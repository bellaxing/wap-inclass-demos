// exports = module.exports = {}

class Person {

    constructor(name = 'John') {
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }
}

// exports = module.exports = {}

exports = new Person('Bella');

// exports = {name: 'Bella'}
// module.exports = {}