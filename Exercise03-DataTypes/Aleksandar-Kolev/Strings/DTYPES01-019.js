// Print all even (четни) numbers from the string:
// The number 28469 is not so big.
// Hint 1: Check the remainder of integer division by two.
// Hint 2: Use the ternary operator.

let text = "The number 28469 is not so big.";


let evenNumbers = text.replace(/\d/g, d => d % 2 === 0 ? d : '').replace(/\D/g, '');

console.log(evenNumbers);