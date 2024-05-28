/*
Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one
column, right justified. Pad all the digits with zeros so that the column is right-justified,
and the width is exactly eight characters. Also, replace all eights with the digit nine, and
all nines with the digit one.
*/

let num1 = "1";
let num2 = "10";
let num3 = "38";
let num4 = "4";
let num5 = "824";
let num6 = "120";
let num7 = "999";
let num8 = "64";

let modNum1 = ((num1.padStart(8, 0)).replaceAll(8, 9)).replaceAll(9, 1);
let modNum2 = ((num2.padStart(8, 0)).replaceAll(8, 9)).replaceAll(9, 1);
let modNum3 = ((num3.padStart(8, 0)).replaceAll(8, 9)).replaceAll(9, 1);
let modNum4 = ((num4.padStart(8, 0)).replaceAll(8, 9)).replaceAll(9, 1);
let modNum5 = ((num5.padStart(8, 0)).replaceAll(8, 9)).replaceAll(9, 1);
let modNum6 = ((num6.padStart(8, 0)).replaceAll(8, 9)).replaceAll(9, 1);
let modNum7 = ((num7.padStart(8, 0)).replaceAll(8, 9)).replaceAll(9, 1);
let modNum8 = ((num8.padStart(8, 0)).replaceAll(8, 9)).replaceAll(9, 1);

console.log(modNum1);
console.log(modNum2);
console.log(modNum3);
console.log(modNum4);
console.log(modNum5);
console.log(modNum6);
console.log(modNum7);
console.log(modNum8);