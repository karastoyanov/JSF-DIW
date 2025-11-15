"use strict"
/* 
ARRAY01-016: From a given N x N table, find the sum of its two main diagonals.
*/

const arr = [
  [1, 2, 3], 
  [4, 3, 6], 
  [7, 8, 0]
];

let sumD1 = 0;
let sumD2 = 0;

for (let i = 0; i < arr.length; i++) {
  sumD1 += arr[i][i];
  sumD2 += arr[i][arr.length - 1 - i];
}

let totalSum = sumD1 + sumD2;

console.table(totalSum);
