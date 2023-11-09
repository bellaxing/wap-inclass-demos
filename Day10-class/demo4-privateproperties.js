class User{

    #firstname;

    constructor(newName){
        this.#firstname = newName;
    }

    // set fname(firstname){
    //     this.#firstname = firstname;
    // }

    setFirstname(firstname){
        this.#firstname = firstname;
    }

    // get fname(){
    //     return this.#firstname;
    // }

    getFirstname(){
        return this.#firstname;
    }

}

const john = new User('John');
console.log(john);
console.log(john.fname);
// john.fname = 'Edward';
john.setFirstname('Edward');
// console.log(john.fname);
john.getFirstname();
