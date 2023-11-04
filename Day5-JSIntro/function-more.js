function foo(){
    console.log('no arguments:');
}

function foo(arg1){
    console.log('1 arguments: ', arg1);
}

function foo(arg1, arg2){
    console.log('2 arguments: ', arg1, arg2);
}

function foo(arg1, arg2, arg3){
    console.log('3 arguments: ', arg1, arg2, arg3);
}

foo();
foo(1);
foo(1,2);
foo(1,2,3);