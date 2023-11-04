let s1 ='this is" a string';
let s2 = "this is another ' string";
// template literal
let s3 = `
    hello
    world
    from 
    " '
    JS!!!
`;

console.log(typeof s1, typeof s2, typeof s3);
console.log(s3.length, s1.charAt(0));
