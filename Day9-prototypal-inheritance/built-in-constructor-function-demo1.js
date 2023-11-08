Array.prototype.toUpperCase = function(){
    console.log(this);
    return this.map(item => item.toUpperCase());
}

const arr = ['hi', 'Hello', 'Bonjor', 'Hola'];
const result = arr.toUpperCase();
console.log(result);

const arr2 = ['hid', 'Heldlo', 'Bodnjor', 'Hofdasfsla'];
console.log(arr2.toUpperCase());

