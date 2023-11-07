function foo(x) {
    let m;
    console.log(x, y);
    if (x > 5) {
        var y = 5;
        m = x + y;
    } else {

        let z = 10;
        m = z;
        const bar = function(){
            console.log('bar');
        }
    }
    bar();
    // console.log(z);

    x = m;
    console.log(x, y);
}
bar();
var x = 10;
foo(3);
console.log(x);