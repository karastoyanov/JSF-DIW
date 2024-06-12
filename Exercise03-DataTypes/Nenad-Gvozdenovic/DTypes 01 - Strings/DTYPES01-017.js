/*
DTYPES01-017: 
Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one 
column, right justified. Pad all the digits with zeros so that the column is right-justified,
and the width is exactly eight characters. Also, replace all eights with the digit nine, and 
all nines with the digit one
*/

let number1 = "1";
let number2 = "10";
let number3 = "38";
let number4 = "4";
let number5 = "824";
let number6 = "120";
let number7 = "999";
let number8 = "64";

console.log(number1.padStart(8, 0));
console.log(number2.padStart(8, 0));
console.log((number3).replace(8, 9).padStart(8, 0));
console.log(number4.padStart(8, 0));
console.log((number5.replace(8, 9)).padStart(8, 0));
console.log(number6.padStart(8, 0));
console.log((number7.replace(/9/g, 1)).padStart(8, 0));
console.log(number8.padStart(8, 0));