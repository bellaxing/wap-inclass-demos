console.log('start');
new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...'));
process.nextTick(() =>  console.log('nextTick'));
console.log('end');