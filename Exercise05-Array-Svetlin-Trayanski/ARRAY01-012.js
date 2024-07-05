/*Add two N x N arrays.
Hint: each element is the addition of the corresponding elements from both N x N
arrays:
resultArr[0,0] = A[0][0] + B[0][0]*/


const arr1 = [1, 1, 1, 1];
const arr2 = [2, 2, 2, 2];

let resultArr = [];


    for (let i = 0; i < arr1.length; i++) {
        resultArr[i] = arr1[i] + arr2[i];
    }

    console.log(resultArr);
