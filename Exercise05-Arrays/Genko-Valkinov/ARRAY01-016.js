// ARRAY01-016: From a given N x N table, find the sum of its two main diagonals .

const matrix = [
    [1, 3, 5, 7],
    [6, 77, 12, 24],
    [155, 12, 123, 223],
    [30, 32, 36, 40]
];

const sumMatrixMainDiagonals = input => {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (i === j) {
                sum += input[i][j];
            }
            if (i + j === input.length - 1) {
                sum += input[i][j];
            }
        }
    }

    if (input.length % 2 === 1) {
        const mid = Math.floor(input.length / 2);
        sum -= input[mid][mid];
    }

    return sum;
}

console.log(sumMatrixMainDiagonals(matrix));