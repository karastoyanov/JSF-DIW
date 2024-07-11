/*
LOOPS01-012: Write a program to print the coordinates of a table cells in the format:
( x, y ). The table sizes will not be changed within the program.
*/



let rows = 7;
let columns = 6;

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
        console.log(`${i},${j}  `);
    }
    console.log();
}

/*
//Alternative solution which I like better.

let rows = 7;
let columns = 6;

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
        process.stdout.write(`${i},${j}  `);  // Found process.stdout.write on the net while looking for console.log without new line
    }
    console.log();
}
*/