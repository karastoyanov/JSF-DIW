/*
BASICS03-003
Declare four variables. On two of them assign integer numbers.
The third set with the division reminder. The fourth one set with the quotient.
Print on the console the four variables with appropriate description.
*/

let num1 = 10;
let num2 = 3;

let remainder = num1 % num2;
let quotient = (num1 - remainder) / num2;

console.log(`The first number is ${num1}.`);
console.log(`The second number is ${num2}.`);
console.log(`The division remainder is ${remainder}.`);
console.log(`The quotient is ${quotient}.`);