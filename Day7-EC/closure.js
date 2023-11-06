// let x = 1;
// function foo(){
//     let x = 10;
//     let y = 2;
//     return function(z){
//         console.log(x + y + z);
//     }
// }
// const res = foo();
// res(3);
// // foo()(3);


var bar = function(){
    console.log('bar....');
}

function foo(m){
    m();
}
foo(bar);