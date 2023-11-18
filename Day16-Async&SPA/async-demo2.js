console.log('start');

async function foo(){
    console.log('inside foo....1');
    throw new Error('Whoops!');
}
const result = foo();

result.then(data => console.log(data))
    .catch(error => console.log('inside catch, ', error.message));

console.log('end');