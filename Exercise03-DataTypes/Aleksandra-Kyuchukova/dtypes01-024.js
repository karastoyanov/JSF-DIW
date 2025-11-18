"use strict"
/*
DTYPES01-024: Count the number of occurrences of each digit in the following text:
“19002288034”
Print in ascending order all numbers encountered in the string and the number of times 
they occur in the text, separated with a colon character “:”.
*/

let text = '“19002288034”';

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

let pNum0 = num0 > 0 ? console.log(`0 : ${num0}`) : 'not found';
let pNum1 = num1 > 0 ? console.log(`1 : ${num1}`) : 'not found';
let pNum2 = num2 > 0 ? console.log(`2 : ${num2}`) : 'not found';
let pNum3 = num3 > 0 ? console.log(`3 : ${num3}`) : 'not found';
let pNum4 = num4 > 0 ? console.log(`4 : ${num4}`) : 'not found';
let pNum5 = num5 > 0 ? console.log(`5 : ${num5}`) : 'not found';
let pNum6 = num6 > 0 ? console.log(`6 : ${num6}`) : 'not found';
let pNum7 = num7 > 0 ? console.log(`7 : ${num7}`) : 'not found';
let pNum8 = num8 > 0 ? console.log(`8 : ${num8}`) : 'not found';
let pNum9 = num9 > 0 ? console.log(`9 : ${num9}`) : 'not found';



