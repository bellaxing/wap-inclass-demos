function f(a, b, x){
    return a * x + b;
}



const v1 = 9/5 * 20 + 32;
const v2 = 9/5 * 30 + 32;

const cToF = f.bind(null, 9/5, 32);
cToF(20);
cToF(30);


const c1 = 7.28 * 100 + 0;
const c2 = 7.28 * 200 + 0;
const c3 = 7.28 * 300 + 0;

const usToYuan = f.bind(null, 7.28, 0);
usToYuan(100);

console.log(v1, v2);
console.log(c1, c2, c3)

// function currying -> 1 function with 4 arguments =>2 more function()
const f2 = (a, b, x) => a * x + b;
const f3 = (a, b) => x => a * x + b;
const cToF2 = f3(9/5, 32);
cToF2(20);
const usToYuan2 = f3(7.28, 0);
usToYuan2(100);



