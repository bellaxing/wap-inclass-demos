function findMax() {
    console.log('arguments: ', arguments); //arguments implicit object existing in every function
    let max = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        if(max < arguments[i]){
            max = arguments[i];
        }
    }
    return max;
}

const result = findMax(5, 7, 1, 2, 3);
console.log(result);
findMax(5, 7, 1, 2, 3, 9, 90, 39);
findMax(5, 7);
findMax(5, 7, 8, 5);