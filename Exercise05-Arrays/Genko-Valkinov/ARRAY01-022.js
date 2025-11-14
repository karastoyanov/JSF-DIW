// ARRAY01-022: Array A has N elements. The two-dimensional array B has N x N size. Check if 
// the array A matches any of the rows in array B. Print the row number if matches, 
// otherwise – print “no match with the rows”.

const matrix = [
    [1, 3, 5, 7],
    [6, 77, 12, 24],
    [155, 12, 123, 223],
    [30, 32, 36, 40]
];

const containsRow = (matrix, arr) => {
    const index = matrix.findIndex(row => JSON.stringify(row) === JSON.stringify(arr));
    return index === -1 ? "no match with the rows" : `Row: ${index}`;
};

console.log(containsRow(matrix, [6, 77, 12, 24]));