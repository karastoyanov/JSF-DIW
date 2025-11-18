// FUNCTIONS02-001: Write a function that takes a nested array (an array containing arrays of 
// numbers) and returns a new nested array with only the even numbers. Try to solve the 
// problem with nested functions.

const matrix = [
    [1, 2, 3, 4, 5, 6],
    [10, 21, 30, 43, 50, 61],
    [100, 217, 300, 439, 500, 677]
];

const filterEvenNested = arr => {
    const filterInner = subArr => subArr.filter(el => el % 2 === 0);

      return arr.map(filterInner);
};

console.table(filterEvenNested(matrix));

