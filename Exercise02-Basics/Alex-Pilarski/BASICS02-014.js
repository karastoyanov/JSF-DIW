// Declare a variable. Assign one letter from the English alphabet. Print on the 
// console the reverse – if the letter is capital, print it in lowercase; if the letter is in
// uppercase, print it in lowercase. Hint: Use the encoding table/codes/location in the table.

let char = "A";

// Check if the character is uppercase
let isUpperCase = char >= "A" && char <= "Z";

// Convert the character to lowercase if it's uppercase  and vice versa
let convertedChar = isUpperCase ? String.fromCharCode(char.charCodeAt(0) + 32) : String.fromCharCode(char.charCodeAt(0) - 32);

console.log(convertedChar);

