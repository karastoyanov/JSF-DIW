// ARRAY01-012: Add two N x N arrays. 
// Hint: each element is the addition of the corresponding elements from both N x N 
// arrays:
// resultArr[0,0] = A[0][0] + B[0][0]

const matrix1 = [
    [1, 3, 5, 7, 9],
    [2, 5, 7, 2, 13]
];

const matrix2 = [
    [10, 30, 50, 70, 90],
    [20, 50, 70, 20, 130]
];

const addMatrix = (matrix1, matrix2) => {
    let addedMatrix = [];

    for (let i = 0; i < matrix1.length; i++) {
        addedMatrix[i] = [];

        for (let j = 0; j < matrix1[i].length; j++) {
            addedMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return addedMatrix;
};

console.table(addMatrix(matrix1, matrix2));