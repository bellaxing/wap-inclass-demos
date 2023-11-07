function foo(arg1, arg2){
    console.log(this);
    console.log(arguments);
    console.log(arg1, arg2);
}

// foo(1, 2);
//the first argument you passed to call is going to be the value of this keyword inside the function foo
// foo.call({firstsname: 'John'}, 'Hi'); 

//the first argument you passed to call is going to be the value of this keyword inside the function foo
// foo.apply({firstname: 'john'}, ['hi', 'world', 'abc']);

// the first argument you passed to call is going to be the value of this keyword inside the function foo
const bindedFoo = foo.bind({firstname: 'john'}, 'Hi.....'); //won't invoke the function
console.log(bindedFoo);
console.log('*****************');
bindedFoo('Hello', 'World');
// bindedFoo('world......');