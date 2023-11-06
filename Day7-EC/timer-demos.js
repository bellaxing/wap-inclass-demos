console.log('start');

setTimeout(() => console.log('timeout 1'), 1000);
setTimeout(() => console.log('timeout 2'), 0);
setTimeout(() => console.log('timeout 3'), 5000);

console.log('end');
var x = 10;
console.log(x);




// setTimeout(sum(1,2), 5000);


//function reference
// let f = sum;
//vs function call/invoke
// f = sum(1,2);
