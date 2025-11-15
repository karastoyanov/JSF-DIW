"use strict"
/* 
ARRAY01-014: From a given table, find the row with the biggest sum of its elements.
*/

const arr = [
  [1, 2, 3], 
  [4, 3, 6], 
  [7, 8, 0]
];

let maxSum = Number.MIN_SAFE_INTEGER;
let row = 0;

for (let i = 0; i < arr.length; i++) {
  let rowSum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    rowSum += arr[i][j];
  }
  if (rowSum > maxSum) {
    maxSum = rowSum;
    row = i;
  }
}

console.table(`Row with index: ${row}, Sum: ${maxSum}`);


