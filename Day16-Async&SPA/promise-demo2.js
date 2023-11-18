console.log('start');

const promiseObj = new Promise(function(resolve, reject){
    setTimeout(() => reject(1), 3000);
});
console.log(promiseObj);
// promiseObj.then(data => console.log(data));

console.log('end');

