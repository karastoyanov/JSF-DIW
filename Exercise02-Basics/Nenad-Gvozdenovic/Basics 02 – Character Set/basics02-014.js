/*
BASICS02-014: Declare a variable. Assign one letter from the English alphabet. Print on the 
console the reverse – if the letter is capital, print it in lowercase; if the letter is in 
uppercase, print it in lowercase. Hint: Use the encoding table/codes/location in the 
table.
*/

let letter = 'f';

let reverseResult = (letter >= 'A' && letter <= 'Z') ? letter.toLowerCase() : (letter >= 'a' && letter <= 'z') ? letter.toUpperCase() : letter;

console.log(reverseResult);