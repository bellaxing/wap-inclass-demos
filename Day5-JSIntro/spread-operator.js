const str = 'Hello';
// ...str => 'h' 'e' 'e' 'l' '0'
const arr = [...str]; 
console.log(arr);

const arr1 = [1,3,6];
const arr2 = ['hello', 'world'];
const arr3 = [{x:1}, {y:2}, 9];

const res = [...arr1, ...arr2, ...arr3];
console.log(res);

const obj = {
    firstname: 'John',
    lastname: 'Smith'
}
console.log([...obj]); //doesn't work
