// Print on the console all elements (numbers) of a table (N x N), 
// using exactly 5 positions for each element, right justified.

const table = [
    [-34, 78, 0, -99],
    [12, 45, -7, 88],
    [3, 77, 24, 61],
    [-123, 89, -94, 0]
];

for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
        console.log(table[i][j].toString().padStart(5, " "));
    }
}