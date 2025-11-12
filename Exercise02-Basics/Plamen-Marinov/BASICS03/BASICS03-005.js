/*
BASICS03-005: Declare three variables and assign them with three randomly selected integer 
numbers. Print on the console those two of them, which have the biggest sum. Hint: Use 
the ternary operators.
*/

let x = 5;
let y = 10;
let z = 15;

let sum1 = x + y;
let sum2 = y + z;
let sum3 = x + z;

console.log("Biggest sum pair:", sum1 > sum2 && sum1 > sum3 ? [x, y] : sum2 > sum3 ? [y, z] : [x, z]);