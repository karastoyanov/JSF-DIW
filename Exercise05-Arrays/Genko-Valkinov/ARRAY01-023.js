// ARRAY01-023: Array A has N elements. The two-dimensional array B has N x N size. Check if 
// the array A matches any of the columns in array B. Print the column number if matches, 
// otherwise – print “no match with the columns”.

const matrix = [
    [1, 3, 5, 7],
    [6, 77, 12, 24],
    [155, 12, 123, 223],
    [30, 32, 36, 40]
];

const containsColumn = (matrix, arr) => {
    const buildColumns = matrix => {
        const columns = [];
        for (let col = 0; col < matrix[0].length; col++) {
            const column = [];
            for (let row = 0; row < matrix.length; row++) {
                column.push(matrix[row][col]);
            }
            columns.push(column);
        }
        return columns;
    };

    const index = buildColumns(matrix).findIndex(col => JSON.stringify(col) === JSON.stringify(arr));

    return index === -1 ? "no match with the columns" : `Column: ${index}`;
};

console.log(containsColumn(matrix, [3, 77, 12, 32]));