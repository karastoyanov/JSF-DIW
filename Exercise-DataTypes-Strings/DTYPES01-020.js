/*Print all even (чеiнq) numbers from the string:
The number 28469 is not so big.
Hint 1: Check the remainder of integer division by two.
Hint 2: Use the ternary operator.*/

let text = `The number 28469 is not so big.`;
let num1 = parseInt(text.charAt(11));
let num2 = parseInt(text.charAt(12));
let num3 = parseInt(text.charAt(13));
let num4 = parseInt(text.charAt(14));
let num5 = parseInt(text.charAt(15));

num1 % 2 === 0 ? console.log(num1) : null;
num2 % 2 === 0 ? console.log(num2) : null;
num3 % 2 === 0 ? console.log(num3) : null;
num4 % 2 === 0 ? console.log(num4) : null;
num5 % 2 === 0 ? console.log(num5) : null;

