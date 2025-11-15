// Add two N x N arrays. 
// Hint: each element is the addition of the corresponding elements from both N x N arrays: 
// resultArr[0,0] = A[0][0] + B[0][0]

const arr1 = [[-34, 78, 0, -99], [12, 45, -7, 88]];
const arr2 = [[3, 77, 24, 61], [-123, 89, -94, 0]];
const resultArr = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        resultArr.push(Number(arr1[i][j]) + Number(arr2[i][j]));
    }
}
console.log(resultArr);