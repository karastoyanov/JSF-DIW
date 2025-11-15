//  Write a program to print the coordinates of a table cells in the format: ( x, y ).
//  The table sizes will not be changed within the program.

let rows = 7;
let columns = 2;
let table = ""

for (let x = 1; x <= rows; x++) {
    for (let y = 1; y <= columns; y++) {
        table += `[${x}, ${y}]\t`;
    }
    table += "\n";
}

console.log(table);