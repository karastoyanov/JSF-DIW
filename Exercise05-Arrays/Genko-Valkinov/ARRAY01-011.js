// ARRAY01-011: Find the maximum elements from each row in two-dimensional array

const matrix = [
    [15, 512, 123, 2512, 17, 124],
    [241, 12, 54, 7, 123, 22],
    [23, 12, 135, 3, 12, 23]
];

const printBiggestNumber = input => {
    for (let i = 0; i < matrix.length; i++) {
        let biggest = input[i][0];
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] > biggest) {
                biggest = input[i][j];
            }
        }
        console.log(biggest);
    }
}

printBiggestNumber(matrix);