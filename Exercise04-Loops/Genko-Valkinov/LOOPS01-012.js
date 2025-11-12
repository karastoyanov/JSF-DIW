// LOOPS01-012: Write a program to print the coordinates of a table cells in the format:
// ( x, y ). The table sizes will not be changed within the program.

let x = 12;
let y = 17;

for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
        console.log(`${i}, ${j}`);
    }
}