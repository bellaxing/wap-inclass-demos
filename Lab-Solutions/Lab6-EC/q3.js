function printNumber(from, to){
    const timerId = setInterval(() => {
        if(from === to + 1){
            clearInterval(timerId);
        } else {
            console.log(from++);
        }
    }, 1000);   
}

printNumber(3, 10);