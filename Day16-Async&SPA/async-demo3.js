console.log('start');

const foo = async () => {
    console.log('inside foo....1');
    throw new Error('Whoops!');
}
const result = foo();

result.then(data => console.log(data))
    .catch(error => console.log('inside catch, ', error.message));

console.log('end');