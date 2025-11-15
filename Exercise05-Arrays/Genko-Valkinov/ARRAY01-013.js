// ARRAY01-013: Transpose a square matrix.
// // [БГ]: Транспониране на матрица:
// // редовете на A стават стълбове (колони) на A
// T
// ; 
// // стълбовете (колоните) на A стават редове на A
// T
// .

const matrix1 = [
    [1, 3, 5, 7],
    [6, 77, 12, 24],
    [155, 12, 123, 223],
    [30, 32, 36, 40]
];

const transpose = (matrix) => {
    const result = [];

    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    return result;
};

console.table(transpose(matrix1));
