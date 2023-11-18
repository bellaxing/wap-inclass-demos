console.log('start');

async function foo(){
    console.log('inside foo....1');
    return "hello"; //new Promise
}

async function bar(){
    console.log('1.......');
    const result = await foo();
    console.log('2.......');
    console.log(`Result of foo(): ${result}`);
}

bar();

console.log('end');