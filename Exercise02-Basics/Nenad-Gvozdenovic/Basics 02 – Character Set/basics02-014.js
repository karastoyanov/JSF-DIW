/*
BASICS02-014: Declare a variable. Assign one letter from the English alphabet. Print on the 
console the reverse – if the letter is capital, print it in lowercase; if the letter is in 
uppercase, print it in lowercase. Hint: Use the encoding table/codes/location in the 
table.
*/

let char = "D";
let reverseChar;
if (char.charCodeAt(0) <= 90) {
    reverseChar = String.fromCharCode(char.charCodeAt(0) + 32);
}
else {
    reverseChar = String.fromCharCode(char.charCodeAt(0) - 32);
}

console.log(reverseChar);