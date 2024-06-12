/*

Declare three variables and assign them with three randomly selected integer
numbers. Print on the console those two of them, which have the biggest sum. Hint: Use
the ternary operators.

*/

let num1, num2, num3;

num1 = 20;
num2 = 10;
num3 = 30;

sum1 = num1 + num2;
sum2 = num1 + num3;
sum3 = num2 + num3;

let result = (sum1 > sum2) ? (sum1 > sum3 ? console.log(num1, num2) : console.log(num2, num3)) : (sum2 > sum3 ? console.log(num1, num3) : console.log(num2, num3));
