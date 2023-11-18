console.log('start');

async function foo(){
    console.log('inside foo....1');
    return 'Hello'; //return new Promise(resolve => resolve(2))
    // console.log('inside foo....2');
}
const result = foo();
console.log(result);

result.then(data => console.log(data));

console.log('end');