/*

Declare four variables. On two of them assign integer numbers. The third set
with the division remainder. The fourth one set with the quotient. Print on the console the four variables with appropriate
description.

*/

let num1, num2, rem, quo;

num1 = 11;
num2 = 4;
rem = num1 % num2;
quo = (num1 / num2) >> 0;

console.log("The first number is " +num1);
console.log("The second number is " +num2);
console.log("The division remainder is " +rem);
console.log("The quotient is " +quo);