/* LOOPS01-013: Like task LOOPS01-012 but use exactly 3 positions for each number in the 
coordinates and when printing them on the console, right-justify the numbers. */

const size = 3;

//let x = 1;
//let x1 = x.
//let yi;

for (x = 1; x <= size; x++) {
    for (y = 1; y <= size; y++) {
        x1 = x.toString();
        y1 = y.toString();        
        console.log(x1.padStart(3, "0"), ":", y1.padStart(3, "0"));
    }
} 