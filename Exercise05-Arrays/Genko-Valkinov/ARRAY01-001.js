// ARRAY01-001: Write a program to find the minimum element from a one-dimensional array.

const smallestNumber = input => {
    let smallest = input[0];
    for(let i=0; i<input.length; i++){
        if(smallest > input[i]){
            smallest = input[i];
        }
    }
    return smallest;
}

console.log(smallestNumber([17, 125, 6346, 7, 124, 330]));


// As a one-liner
//
// const smallestNumber = arr => arr.reduce((acc, cur) => cur < acc ? cur : acc);