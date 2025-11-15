//  What is the result of the following arithmetic operations:
// 1) NaN++
// 2) NaN - NaN
// 3) Infinity - Infinity
// 4) 5 - true
// 5) Boolean(true-true)*true

let x = NaN++; // NaN
let y = NaN - NaN; // NaN
let z = Infinity - Infinity; // NaN
let a = 5 - true; // 4
let b = Boolean(true-true)*true; // 0