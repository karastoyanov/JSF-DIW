/*
ARRAY01-012: Add two N x N arrays.
Hint: each element is the addition of the corresponding elements from both N x N
arrays:
resultArr[0,0] = A[0][0] + B[0][0]
*/


const arrOne = [[1, 2, 3], [4, 5, 6]];
const arrTwo = [[7, 8, 9], [10, 11, 19]];
const arrSum = [];

for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrOne[i].length; j++) {
        arrSum.push(Number(arrOne[i][j]) + Number(arrTwo[i][j]));
    }
}
console.log(arrSum);