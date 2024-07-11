/*
LOOPS01-013: Like task LOOPS01-012 but use exactly 3 positions for each number in the
coordinates and when printing them on the console, right-justify the numbers.
*/

/*
let rows = 7;
let columns = 6;

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
        console.log(`${i.toString().padStart(3, '0')},${j.toString().padStart(3, '0')}  `);
    }
    console.log();
}

*/

//Alternative solution which I like better.

let rows = 7;
let columns = 6;

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
        process.stdout.write(`${i.toString().padStart(3, '0')},${j.toString().padStart(3, '0')}  `);  // Found process.stdout.write on the net while looking for console.log without new line
    }
    console.log();
}
