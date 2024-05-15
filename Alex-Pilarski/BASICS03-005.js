// Declare three variables and assign them with three randomly selected integer numbers. 
// Print on the console those two of them, which have the biggest sum. Hint: Use
// the ternary operators.

let num1 = 12;
let num2 = 15;
let num3 = 18;

(num1 + num2) < (num2 + num3) ? ((num1 + num3) < (num2 + num3) ? console.log(num2, num3) : console.log(num1, num3)) : console.log(num1, num2);

