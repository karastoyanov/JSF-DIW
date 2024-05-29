
/*
DTYPES01-017: Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one 
column, right justified. Pad all the digits with zeros so that the column is right-justified,
and the width is exactly eight characters. Also, replace all eights with the digit nine, and 
all nines with the digit one.
*/

let a = '1';
let b = '10';
let c = '38';
let d = '4';
let e= '824';
let f = '120';
let g = '999';
let h = '64';

console.log(a.padStart(8, 0));
console.log(b.padStart(8, 0));
console.log(c.padStart(8, 0).replaceAll(8, 9));
console.log(d.padStart(8, 0));
console.log(e.padStart(8, 0).replaceAll(8, 9));
console.log(f.padStart(8, 0));
console.log(g.padStart(8, 0).replaceAll(9, 1));
console.log(h.padStart(8, 0));