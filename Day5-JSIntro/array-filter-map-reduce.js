const countries = [
    "US",
    "China",
    "Egypt",
    "Jordan"
];

//Higher-order function: a function which accept functions as argument or return another function
const result = countries.filter((elem, index, arr) => {
    console.log(elem, index, arr);
    return elem.length > 5;
});
console.log(result);

const res2 = countries.filter((elem, index) => index > 1);
console.log(res2);

// const res3 = countries.map((elem, index, arr) => {
//     console.log(elem, index, arr);
//     return elem.length;
// });
const res3 = countries.map(elem => elem.length);
console.log(res3);


const numbers = [2, 6, 10, 9, 8];
// const res4 = numbers.reduce((accu, elem, index, arr) => {
//     console.log(elem, accu, index, arr);
//     return elem + accu;
// }, 0);

const res4 = numbers.filter(elem => elem > 6).reduce((accu, elem, index, arr) => elem/arr.length + accu, 0);
console.log(res4);