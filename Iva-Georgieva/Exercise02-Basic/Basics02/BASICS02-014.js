/* BASICS02-014: Declare a variable. Assign one letter from the English alphabet. Print on the 
console the reverse – if the letter is capital, print it in lowercase; if the letter is in 
uppercase, print it in lowercase. Hint: Use the encoding table/codes/location in the table. */

let alphabetChar;

alphabetChar = "y";
let result = (alphabetChar >= "a" && alphabetChar <= "z") ? console.log(alphabetChar.toUpperCase()) : console.log(alphabetChar.toLowerCase());


