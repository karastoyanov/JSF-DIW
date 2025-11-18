// Transpose a square matrix.
// [БГ]: Транспониране на матрица:
// редовете на A стават стълбове (колони) на AT; 
// стълбовете (колоните) на A стават редове на AT

const matrix = [
    [-34, 78, 0, -99],
    [12, 45, -7, 88],
    [3, 77, 24, 61],
    [-123, 89, -94, 0]
];

const l = matrix.length;
const matrixT = [];

for (let i = 0; i < l; i++) {
    matrixT[i] = [];
}

for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
        matrixT[i][j] = matrix[j][i];
    }
}
console.log(matrixT);