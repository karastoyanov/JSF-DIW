"use strict"
/* 
ARRAY01-012: Add two N x N arrays. 
Hint: each element is the addition of the corresponding elements from both N x N 
arrays:
resultArr[0,0] = A[0][0] + B[0][0]
*/

const arr1 = [
  [1, 2, 3], 
  [4, 3, 6], 
  [7, 8, 0]
];

const arr2 = [
  [1, 1, 1], 
  [1, 1, 1], 
  [1, 1, 1]
];

const resultArr = [];

for (let i = 0; i < arr1.length; i++) {
  resultArr[i] = [];
  for (let j = 0; j < arr1[i].length; j++) {
    resultArr[i][j] = arr1[i][j] + arr2[i][j];
  }
}

console.table(resultArr);


