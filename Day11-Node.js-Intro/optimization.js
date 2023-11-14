function add(num1, num2) {
    return num1 + num2;
}

for (let i = 0; i < 10000; i++) {
    let sum = add(i, i);
    console.log(sum);
}

/******** */
for (let i = 0; i < 10000; i++) {
    console.log(i + i);
}