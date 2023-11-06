'use strict';
// function foo(){
//     console.log(this);
// }
// foo();

function f(){
    function f2() {
        username = 'John'; //implied global, really!!!!! Bad!!!!!
    }
    f2();
}
f();
console.log(username);