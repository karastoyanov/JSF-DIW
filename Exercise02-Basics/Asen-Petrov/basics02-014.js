/* Solution using ternary operators */

let letter = 'A';

let result = (letter >= 'A' && letter <= 'Z') ? letter.toLowerCase() : (letter >= 'a' && letter <= 'z') ? letter.toUpperCase() : letter;

console.log(result);
