// console.log(x);
// console.log(y);
// console.log(z);
// var x = 10;
// let y = 9;
// const z = 10;

// console.log(x);
// console.log(y);
// console.log(z);

// foo();
// bar();

// function foo(){
//     console.log('foo....');
// }

// var bar = function(){
//     console.log('bar...');
// }


// console.log(m);
// if(true){
//     let m = 'Hello';
// }
// console.log(m);

// function foo(){
//     var m = 'hi';
//     console.log(m);
// }
// foo();

// //var doesn't have block scope, var only has function scope



let x = 1;

function foo(){
    let x = 2;
    bar();
    function bar (m, n) {
        console.log(x, i, m, m);
    }

    for(var i = 5; i < 7; i++){
        console.log(i);    
    }
    bar(100);
    baz();
}

function baz(){
    console.log(x);
}

foo();

