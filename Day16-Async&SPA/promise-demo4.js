console.log('start');

const obj = new Promise(resolve => {
    resolve(1);
})
.then(data => data * 2) //new Promise(resolve => resolve(2)), Promise.resolve(2)
.then(data => data * 3) //new Promise(resolve => resolve(6))
.then(data => data * 4) // new Promise(resolve => resolve(24))
.then(data => console.log('resolve', data));

console.log('end');
