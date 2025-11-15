// Like task LOOPS01-012 but use exactly 3 positions for each number in the 
// coordinates and when printing them on the console, right-justify the numbers.

let rows = 7;
let columns = 2;
let table = ""

for (let x = 1; x <= rows; x++) {
    for (let y = 1; y <= columns; y++) {
        let stringX = x.toString().padStart(3, "0");
        let stringY = y.toString().padStart(3, "0");
        table += `[${stringX}, ${stringY}]\t`;
    }
    table += "\n";
}

console.log(table);