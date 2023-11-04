// function declaration
const square = function (number){
    return number * number;
}
const result = square(4);
console.log(result);

// function expression
const sum = function(num1, num2) {
    return num1 + num2;
}
console.log(sum(3, 7));

annoymous function
window.onload = function(){
    alert('Surprise^-^');
}

// arrow function
const substract = (num1, num2) => num1 - num2;
console.log(substract(5, 1));

const f1 = s => s.length;
console.log(f1('hello'));

const f2 = () => {};
console.log(f2());

const f3 = () => 'Hi';
console.log(f3());

