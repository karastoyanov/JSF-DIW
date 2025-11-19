/*
ARRAY01-012: Add two N x N arrays. 
Hint: each element is the addition of the corresponding elements from both N x N 
arrays:
resultArr[0,0] = A[0][0] + B[0][0]
*/

const arrA = [[11, 12, 13], [24, 25, 26], [37, 38, 39]];

const arrB = [[49, 48, 47], [56, 55, 54], [63, 62, 61]];

const N = arrA.length;

let resultArr = [];

for (let i = 0; i < N; i++) {
  resultArr[i] = [];
  for (let j = 0; j < N; j++) {
    resultArr[i][j] = arrA[i][j] + arrB[i][j];
  }
}

console.log("Resulting Array:");
console.log(resultArr);