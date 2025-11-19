/*
ARRAY01-017: Find the first n-elements from Fibonacci sequence, having the first two 
elements 1 and 1, and every sequential element is the sum from the previous two. Put 
the elements in an array. Find their sum.
*/


const arrElements = [1, 1];
let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
  let currentNum = arrElements[i] + arrElements[i - 1];
  arrElements.push(currentNum);
}

console.log(arrElements);
for (let l = 0; l < arrElements.length; l++) {
  sum += arrElements[l];

}

console.log("Fibonacci sequence: ", arrElements);
console.log("Sum of all elements: ", sum);