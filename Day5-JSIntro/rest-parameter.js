function sum(num1, num2, ...more) {

    console.log(num1, num2, more);
    return num1 + num2 + more.reduce((accu, elem) => accu + elem);
}

const res = sum(1, 2, 3, 5, 6, 8);
console.log(res);

sum(11, 22, 3, 5, 6, 8, 9, 10, 11);