"use strict"
/* 
LOOPS01-012: Write a program to print the coordinates of a table cells in the format:
( x, y ). The table sizes will not be changed within the program.
*/

const X = 2;
const Y = 3;

for (let i = 1; i <= X; i++) {
  let output = '';
  for (let j = 1; j <= Y; j++) {
    output += `(${i}, ${j}) `;
  }
  console.log(output);
}
