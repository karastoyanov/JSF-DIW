/**
 * ARRAY01-021: Print on the console all elements (numbers) of a table (N x N), using exactly 5
positions for each element, right justified.
 */

const arr = [
  [1, 2, 3],
  [10, 20, 30],
  [4, 5, 6]
];


for (let row of arr) {
  let line = row.map(num => String(num).padStart(5, ' ')).join('');

  console.log(line);
}
