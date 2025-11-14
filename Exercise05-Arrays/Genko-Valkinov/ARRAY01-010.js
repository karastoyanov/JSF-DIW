// ARRAY01-010: Find the minimum elements from each column in two-dimensional array.

const matrix = [
    [15, 512, 123, 2512, 17, 124],
    [241, 12, 54, 7, 123, 22],
    [23, 12, 135, 3, 12, 23]
];

const printSmallestNumber = input => {
    for (let i = 0; i < matrix.length; i++) {
        let smallest = input[i][0];
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] < smallest) {
                smallest = input[i][j];
            }
        }
        console.log(smallest);
    }
}

printSmallestNumber(matrix);