/* Write a program to print the coordinates of a table cells in the format:
( x, y ). The table sizes will not be changed within the program. 
LOOPS01-013: Like task LOOPS01-012 but use exactly 3 positions for each number in the 
coordinates and when printing them on the console, right-justify the numbers. */

let rows = 8;
let columns = 8;

for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= columns; j++) {
        console.log(`${i.toString().padStart(3, 0)}, ${j.toString().padStart(3, 0)}`);
    }
}
