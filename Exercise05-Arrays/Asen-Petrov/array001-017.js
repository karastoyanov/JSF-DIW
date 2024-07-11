/* Find the first n-elements from Fibonacci sequence, having the first two 
elements 1 and 1, and every sequential element is the sum from the previous two. Put 
the elements in an array. Find their sum.*/

let n = 5;
let arrElements = [1, 1];
let sum = 0;

for (let i = 1; i <= n; i++) {
    let currentNum = arrElements[i] + arrElements[i - 1];
    arrElements.push(currentNum);
}

console.log(arrElements);
for (let l = 0; l < arrElements.length; l++) {
    sum += arrElements[l];
    
}
console.log(sum);