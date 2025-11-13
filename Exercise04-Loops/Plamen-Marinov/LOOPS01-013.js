/*
LOOPS01-013: Like task LOOPS01-012 but use exactly 3 positions for each number in the 
coordinates and when printing them on the console, right-justify the numbers.
*/

const rows = 2;
const cols = 3;

for (let x = 1; x <= rows; x++) {
  for (let y = 1; y <= cols; y++) {

    let xStr = String(x).padStart(3, " ");
    let yStr = String(y).padStart(3, " ");
    
    console.log("(" + xStr + ", " + yStr + ")");
  }
}