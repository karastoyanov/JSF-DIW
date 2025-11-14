// ARRAY01-021: Print on the console all elements (numbers) of a table (N x N), using exactly 5 
// positions for each element, right justified.

const matrix = [
    [1, 3, 5, 7],
    [6, 77, 12, 24],
    [155, 12, 123, 223],
    [30, 32, 36, 40]
];

const printRightJustifiedFive = input => input.flat().forEach(el => console.log(`${el}`.padStart(5, 0)));

printRightJustifiedFive(matrix);