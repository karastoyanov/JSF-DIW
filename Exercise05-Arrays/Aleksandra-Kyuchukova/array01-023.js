"use strict"
/* 
ARRAY01-023: Array A has N elements. The two-dimensional array B has N x N size. Check if 
the array A matches any of the columns in array B. Print the column number if matches, 
otherwise – print “no match with the columns”
*/

const arr1 = [4, 3, 1];

const arr2 = [
  [4, 4, 2], 
  [3, 3, 5], 
  [4, 1, 2]
];
let col = -1;

for (let j = 0; j < arr2.length; j++) {
  let match = true;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i][j] !== arr1[i]) {
      match = false;
      break;
    }
  }
  if (match) {
    col = j;
  }
}
if (col === -1) {
  console.log(`No match with the columns`)
} else {
  console.log(`Column with index: ${col}`);
}