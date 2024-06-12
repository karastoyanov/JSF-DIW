/* Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one
column, right justified. Pad all the digits with zeros so that the column is right-justified,
and the width is exactly eight characters. Also, replace all eights with the digit nine, and
all nines with the digit one. */

let num = "1";
let num2 = "10";
let num3 = "38";
let num4 = "4";
let num5 = "824";
let num6 = "120";
let num7 = "999";
let num8 = "64";

console.log((num.padStart(8, '0').replaceAll('8', '9')).replaceAll('9', '1'));
console.log((num2.padStart(8, '0').replaceAll('8', '9')).replaceAll('9', '1'));
console.log((num3.padStart(8, '0').replaceAll('8', '9')).replaceAll('9', '1'));
console.log((num4.padStart(8, '0').replaceAll('8', '9')).replaceAll('9', '1'));
console.log((num5.padStart(8, '0').replaceAll('8', '9')).replaceAll('9', '1'));
console.log((num6.padStart(8, '0').replaceAll('8', '9')).replaceAll('9', '1'));
console.log((num7.padStart(8, '0').replaceAll('8', '9')).replaceAll('9', '1'));
console.log((num8.padStart(8, '0').replaceAll('8', '9')).replaceAll('9', '1'));