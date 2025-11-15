"use strict"
/* 
ARRAY01-022: Array A has N elements. The two-dimensional array B has N x N size. Check if 
the array A matches any of the rows in array B. Print the row number if matches, 
otherwise – print “no match with the rows”.
*/

const arr1 = [4, 3];

const arr2 = [
  [4, 3], 
  [1, 2]
];

let row = -1;
let arr1Str = '';

for (let i = 0; i < arr1.length; i++) {
  arr1Str += arr1[i];
}

for (let i = 0; i < arr2.length; i++) {
  let rowSt = '';
  for (let j = 0; j < arr2[i].length; j++) {
    rowSt += arr2[i][j];
  }
  if (arr1Str === rowSt) {
    row = i;
  }
}
if (row === -1) {
  console.log(`No match with the rows`)
} else {
  console.log(`Row with index: ${row}`);
}



