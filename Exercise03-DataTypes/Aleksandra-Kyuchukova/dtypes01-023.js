"use strict"
/*
DTYPES01-023: Count the number of occurrences of each digit in the following text:
“193817588”
Print in ascending order all numbers from 0 to 9 and the number of times they occur in 
the text, separated with a comma.
*/

let text = '193817588';

let num0 = (text.match(/0/g) || '').length;
let num1 = (text.match(/1/g) || '').length;
let num2 = (text.match(/2/g) || '').length;
let num3 = (text.match(/3/g) || '').length;
let num4 = (text.match(/4/g) || '').length;
let num5 = (text.match(/5/g) || '').length;
let num6 = (text.match(/6/g) || '').length;
let num7 = (text.match(/7/g) || '').length;
let num8 = (text.match(/8/g) || '').length;
let num9 = (text.match(/9/g) || '').length;

console.log(`0, ${num0}`);
console.log(`1, ${num1}`);
console.log(`2, ${num2}`);
console.log(`3, ${num3}`);
console.log(`4, ${num4}`);
console.log(`5, ${num5}`);
console.log(`6, ${num6}`);
console.log(`7, ${num7}`);
console.log(`8, ${num8}`);
console.log(`9, ${num9}`);

