"use strict"
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

let str1 = num1.toString().padStart(8, 0);
let str2 = num2.toString().padStart(8, 0);
let str3 = num3.toString().replace(/8/g, 9).padStart(8, 0);
let str4 = num4.toString().padStart(8, 0);
let str5 = num5.toString().replace(/8/g, 9).padStart(8, 0);
let str6 = num6.toString().padStart(8, 0);
let str7 = num7.toString().replace(/9/g, 1).padStart(8, 0);
let str8 = num8.toString().padStart(8, 0);

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
console.log(str7);
console.log(str8);



