console.log('start');


const promise = new Promise(resolve => resolve('bar'));

async function foo(){
    console.log('1');
    const result = await promise;
    console.log(result);
    console.log('3');
}

foo();

console.log('end');

