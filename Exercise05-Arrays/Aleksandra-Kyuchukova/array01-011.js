"use strict"
/* 
ARRAY01-011: Find the maximum elements from each row in two-dimensional array
*/

const arr = [
  [1, 2, 3], 
  [4, 3, 6], 
  [7, 8, 0]
];

for (let i = 0; i < arr.length; i++) {
  let maxRowEl = Number.MIN_SAFE_INTEGER;
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > maxRowEl) {
      maxRowEl = arr[i][j];
    }
  }
  console.log(maxRowEl);
}
