/**
 * LOOPS01-013: Like task LOOPS01-012 but use exactly 3 positions for each number in the
  coordinates and when printing them on the console, right-justify the numbers.
 */

let x = 3, y = 3;
let row = "";

for (let i = 0; i < x; i++) {
  for (let j = 0; j < y; j++) {
    row += `( ${String(i).padStart(3, '0')}, ${String(j).padStart(3, '0')} )`;
  }

  console.log(row);
  row = '';
}
