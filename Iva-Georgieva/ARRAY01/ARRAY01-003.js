/* Write a program to find the difference between the maximum element and 
the minimum element from a one-dimensional array. */

const sequence = [23, -456, 89, 5, 11];
let maxElement = sequence[0];
let minElement = sequence[0];

let x = sequence.length;

for (let i = 1; i < x; i++ ) {
    if ( minElement > sequence[i] ) {
        minElement = sequence[i];
    } 
    if ( maxElement < sequence[i] ) {
        maxElement = sequence[i];
    }
}

//let difference = maxElement - minElement;
//console.log(`The difference between ${maxElement} and ${minElement} is ${difference}`);

console.log(`The difference between ${maxElement} and ${minElement} is ${maxElement - minElement}`);