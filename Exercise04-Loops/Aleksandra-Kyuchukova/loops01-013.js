"use strict"
/* 
LOOPS01-013: Like task LOOPS01-012 but use exactly 3 positions for each number in the 
coordinates and when printing them on the console, right-justify the numbers.
*/

const X = 2;
const Y = 3;

for (let i = 1; i <= X; i++) {
  let output = '';
  for (let j = 1; j <= Y; j++) {
    let posI = i.toString().padStart(3, '0');
    let posJ = j.toString().padStart(3, '0');
    output += `(${posI}, ${posJ}) `;
  }
  console.log(output);
}
