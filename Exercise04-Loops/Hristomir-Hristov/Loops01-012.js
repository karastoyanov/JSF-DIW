/*
Write a program to print the coordinates of a table cells in the format:
( x, y ). The table sizes will not be changed within the program.
*/

let rows = 5;
let columns = 6;

for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= columns; j++) {
        console.log(`${i}, ${j}`);
    }
}