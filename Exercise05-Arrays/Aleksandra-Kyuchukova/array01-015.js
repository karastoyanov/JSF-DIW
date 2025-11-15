"use strict"
/* 
ARRAY01-015: From a given table, find the column with the largest sum of its elements.
*/

const arr = [
  [1, 2, 3], 
  [4, 3, 6], 
  [7, 8, 0]
];

let maxSum = Number.MIN_SAFE_INTEGER;
let col = 0;

for (let j = 0; j < arr.length; j++) {
  let colSum = 0;
  for (let i = 0; i < arr.length; i++) {
    colSum += arr[i][j];
  }
  if (colSum > maxSum) {
    maxSum = colSum;
    col = j;
  }
}

console.table(`Column with index: ${col}, Sum: ${maxSum}`);
