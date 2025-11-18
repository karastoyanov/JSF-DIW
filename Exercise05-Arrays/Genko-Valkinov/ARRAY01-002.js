// ARRAY01-002: Write a program to find the maximum element from a one-dimensional array.

const biggestNumber = input => {
    let biggest = input[0];
    for(let i=0; i<input.length; i++){
        if(biggest < input[i]){
            biggest = input[i];
        }
    }
    return biggest;
}

console.log(biggestNumber([17, 125, 6346, 7, 124, 330]));


// As a one-liner
//
// const biggestNumber = arr => arr.reduce((acc, cur) => cur > acc ? cur : acc);