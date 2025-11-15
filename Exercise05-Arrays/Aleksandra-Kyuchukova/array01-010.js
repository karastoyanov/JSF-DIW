"use strict"
/* 
ARRAY01-010: Find the minimum elements from each column in two-dimensional array.
*/

const arr = [
  [1, 2, 3], 
  [4, 3, 6], 
  [7, 8, 0]
];

for (let j = 0; j < arr[0].length; j++) {
  let minColEl = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][j] < minColEl) {
      minColEl = arr[i][j];
    }
  }
  console.log(minColEl);
}


