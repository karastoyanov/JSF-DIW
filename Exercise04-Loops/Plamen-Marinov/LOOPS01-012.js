/*
LOOPS01-012: Write a program to print the coordinates of a table cells in the format:
( x, y ). The table sizes will not be changed within the program.
*/

const rows = 2;
const cols = 3;

for (let x = 1; x <= rows; x++) {
  for (let y = 1; y <= cols; y++) {
    console.log("(" + x + ", " + y + ")");
  }
}