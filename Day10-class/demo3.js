class User{
    constructor(){
        console.log(`inside constructor`);
    }

    set fname(newFirstname){
        if(newFirstname === ''){
            throw new Error('Firstname cannot be empty')
        }
        console.log(`inside set firstname: ${newFirstname}`); 
        this._firstname = newFirstname;   
    }


    get fname(){
        console.log('inside getter.....');
        return this._firstname;
    }

}

const john = new User(); // {[[Prototype]]: User.prototype}
john.fname = 'John'; // {'firstname': 'JOHN', [[Prototype]]: User.prototype}
// console.log(john);
// john._firstname = '';
// console.log(john);
console.log(john.fname);
