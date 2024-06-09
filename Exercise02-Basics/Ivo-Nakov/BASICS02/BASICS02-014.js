/*
BASICS02-014
Declare a variable. Assign one letter from the English alphabet.
Print on the console the reverse – if the letter is capital, print it in lowercase.
If the letter is in uppercase, print it in lowercase.
Hint: Use the encoding table/codes/location in the table.
*/

let letter = 'L';
const Cipher = 4;

let base = 'A'.charCodeAt(0);
let newPosition = (letter.charCodeAt(0) - base + Cipher) % 26;
let resultLetter = String.fromCharCode(base + newPosition);

console.log(resultLetter);