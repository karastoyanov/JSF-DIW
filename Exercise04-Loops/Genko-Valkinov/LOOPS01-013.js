// LOOPS01-013: Like task LOOPS01-012 but use exactly 3 positions for each number in the 
// coordinates and when printing them on the console, right-justify the numbers.

let x = 12;
let y = 17;

for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
        console.log(`${i.toString().padStart(3, 0)}, ${j.toString().padStart(3, 0)}`);
    }
}