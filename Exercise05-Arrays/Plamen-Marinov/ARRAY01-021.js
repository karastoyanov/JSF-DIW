/*
ARRAY01-021: Print on the console all elements (numbers) of a table (N x N), using exactly 5 
positions for each element, right justified.
*/

const table = [[76, 23, 1], [-2, 124, 54], [90, 91, -23], [9, -1, 88]];

for (let i = 0; i < table.length; i++) {
  let rowString = "";
  for (let j = 0; j < table[i].length; j++) {
    rowString += table[i][j].toString().padStart(5, " ");
  }
  console.log(rowString);
}