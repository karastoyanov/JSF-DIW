// BASICS02-014: Declare a variable. Assign one letter from the English alphabet. Print on the 
// console the reverse – if the letter is capital, print it in lowercase; if the letter is in 
// uppercase, print it in lowercase. Hint: Use the encoding table/codes/location in the 
// table

let letter = 'B';

let code = letter.charCodeAt(0);

code >= 65 && code <=90 ? console.log(String.fromCharCode(code + 32))
    : code >= 97 && code <= 122 
    ? console.log(String.fromCharCode(code -32))
    : null;