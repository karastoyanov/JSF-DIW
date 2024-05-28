/*

Declare a variable. Assign one letter from the English alphabet. Print on the
console the reverse – if the letter is capital, print it in lowercase; if the letter is in
uppercase, print it in lowercase. Hint: Use the encoding table/codes/location in the
table.

*/

let letter;
letter = "l";

let result1 = letter <= 'Z' && letter >= 'A';
let result2 = letter <= 'z' && letter >= 'a';

let printResult = (result2 ? letter.toUpperCase() : '') || (result1 ? letter.toLowerCase() : '');
console.log(printResult);