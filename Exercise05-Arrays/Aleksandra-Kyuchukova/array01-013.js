"use strict"
/* 
ARRAY01-013: Transpose a square matrix.
// [БГ]: Транспониране на матрица:
// редовете на A стават стълбове (колони) на AT; 
// стълбовете (колоните) на A стават редове на AT.
*/

const arr = [
  [1, 2, 3], 
  [4, 3, 6], 
  [7, 8, 0]
];

const transposedtArr = [];

for (let i = 0; i < arr.length; i++) {
  transposedtArr[i] = [];
  for (let j = 0; j < arr.length; j++) {
    transposedtArr[i][j] = arr[j][i];
  }
}

console.table(transposedtArr);


