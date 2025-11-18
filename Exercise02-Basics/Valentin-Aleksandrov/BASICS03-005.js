/* Declare three variables and assign them with three randomly selected integer 
numbers. Print on the console those two of them, which have the biggest sum. Hint: Use 
the ternary operators. */

let a = 4;
let b = 7;
let c = 11;

let sum1 = (a + b);
let sum2 = (a + c);
let sum3 = (b + c);

let checkup = sum1 > sum2 > sum3 ? "Sum1 is the biggest" : sum2 > sum1> sum3 ? "Sum2 is the biggest" : "Sum3 is the biggest"; 

console.log(checkup);
