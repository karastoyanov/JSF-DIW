"use strict"
/*
DTYPES02-011: What will be the result, if you convert an empty string variable to Boolean and 
one more time convert the result to number? Print the result on the console.
*/

let text = '';
let textToBool = Boolean(text);
let boolToNum = Number(textToBool);

console.log(boolToNum);


