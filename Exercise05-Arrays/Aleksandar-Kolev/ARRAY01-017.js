// Find the first n-elements from Fibonacci sequence, having the first two 
// elements 1 and 1, and every sequential element is the sum from the previous two. Put 
// the elements in an array. Find their sum.

let nElem = 11;
let sum = 0;

const fibArr = [];
fibArr[0] = 1;
fibArr[1] = 1;

for (let i = 2; i < nElem; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
}

for (let i = 0; i < nElem; i++) {
    sum += fibArr[i];
}

console.log(`Fibonacci sequence with ${nElem} elements: ${fibArr}`);
console.log(`Sum of all elements: ${sum}`);