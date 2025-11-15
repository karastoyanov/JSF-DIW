"use strict"
/*
BASICS02-014: Declare a variable. Assign one letter from the English alphabet. Print on the 
console the reverse – if the letter is capital, print it in lowercase; if the letter is in 
uppercase, print it in lowercase. Hint: Use the encoding table/codes/location in the 
table.
*/

let letter = 'a';
 
let letterCode = letter.charCodeAt(0);
let reversedCode = letterCode >= 65 && letterCode <= 90 ? letterCode + 32 : letterCode - 32;
let reversed = String.fromCharCode(reversedCode);
 
console.log(reversed);

