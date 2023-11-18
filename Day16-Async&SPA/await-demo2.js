async function foo(){
    throw new Error('Whoops');
}

async function bar(){
    console.log('1...');
    try {
        await foo();
    } catch(error){
        console.log('inside catch block, ', error.message);
    } finally{
        console.log('inside finally');
    }
    console.log('2....');
}

bar();

console.log('end');
