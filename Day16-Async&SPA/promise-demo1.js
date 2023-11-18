console.log('start');
const promiseObj = new Promise(function(resolve, reject){
    console.log('inside promise ... 1');
    // resolve('Hello'); //asynchronous
    reject('Whoops!');
    console.log('inside promise ... 2')
});
promiseObj.then(data => console.log(`resolve******* ${data}`))
    .catch(error => console.log(`error: ${error}`));
console.log('end');

