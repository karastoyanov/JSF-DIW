/*
DTYPES01-017: Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one 
column, right justified. Pad all the digits with zeros so that the column is right-justified,
and the width is exactly eight characters. Also, replace all eights with the digit nine, and 
all nines with the digit one.
*/

let num1 = 1;
let num2 = 10;
let num3 = 38;
let num4 = 4;
let num5 = 824;
let num6 = 120;
let num7 = 999;
let num8 = 64;

let width = 8;

let str1 = String(num1).padStart(width, '0').replace(/8/g, '9').replace(/9/g, '1');
let str2 = String(num2).padStart(width, '0').replace(/8/g, '9').replace(/9/g, '1');
let str3 = String(num3).padStart(width, '0').replace(/8/g, '9').replace(/9/g, '1');
let str4 = String(num4).padStart(width, '0').replace(/8/g, '9').replace(/9/g, '1');
let str5 = String(num5).padStart(width, '0').replace(/8/g, '9').replace(/9/g, '1');
let str6 = String(num6).padStart(width, '0').replace(/8/g, '9').replace(/9/g, '1');
let str7 = String(num7).padStart(width, '0').replace(/8/g, '9').replace(/9/g, '1');
let str8 = String(num8).padStart(width, '0').replace(/8/g, '9').replace(/9/g, '1');

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
console.log(str7);
console.log(str8);