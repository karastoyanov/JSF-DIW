/*
BASICS03-005
Declare three variables and assign them with three randomly selected integer
numbers. Print on the console those two of them, which have the biggest sum.
Hint: Use the ternary operators.
*/

let num1 = 5;
let num2 = 7;
let num3 = 3;

let sum1 = num1 + num2;
let sum2 = num1 + num3;
let sum3 = num2 + num3;

let result = (sum1 >= sum2 && sum1 >= sum3) ? `${num1} and ${num2}` : 
             (sum2 >= sum1 && sum2 >= sum3) ? `${num1} and ${num3}` : 
             `${num2} and ${num3}`;

console.log(`The two numbers with the biggest sum are ${result}.`);