/*
DTYPES01-019: Print all even (четни) numbers from the string:
The number 28469 is not so big.
Hint 1: Check the remainder of integer division by two.
Hint 2: Use the ternary operator.
*/

let text = "The number 28469 is not so big.";

let digit0 = parseInt(text.charAt(11));
let digit1 = parseInt(text.charAt(12));
let digit2 = parseInt(text.charAt(13));
let digit3 = parseInt(text.charAt(14));
let digit4 = parseInt(text.charAt(15));

console.log(digit0 % 2 === 0 ? digit0 : "");
console.log(digit1 % 2 === 0 ? digit1 : "");
console.log(digit2 % 2 === 0 ? digit2 : "");
console.log(digit3 % 2 === 0 ? digit3 : "");
console.log(digit4 % 2 === 0 ? digit4 : "");