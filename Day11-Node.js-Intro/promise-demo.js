console.log('start');
const prom1 = new Promise(function(resolve, reject){
    console.log('inside promise');
    resolve('Hello');
});
prom1.then(data => console.log(data));
console.log('end');