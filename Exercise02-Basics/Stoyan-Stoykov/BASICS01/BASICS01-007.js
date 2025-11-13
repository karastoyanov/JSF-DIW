// Declare ten variables
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;
let g = 7;
let h = 8;
let i = 9;
let j = 10;

// Store all variables in an array for easier processing
let numbers = [a, b, c, d, e, f, g, h, i, j];

let oddCount = 0;
for (let num of numbers) {
  if (num % 2 !== 0) {
    console.log(num);
    oddCount++;
  }
  if (oddCount === 3) break;
}
