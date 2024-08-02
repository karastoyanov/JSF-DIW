/* LOOPS01-012: Write a program to print the coordinates of a table cells in the format:
( x, y ). The table sizes will not be changed within the program. */

const size = 3;

for (x = 1; x <= size; x++) {
    for (y = 1; y <= size; y++){
        console.log(`${x}:${y}`);
    }
}


