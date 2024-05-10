
/*
BASICS03-005: Declare three variables and assign them with three randomly selected integer 
numbers. Print on the console those two of them, which have the biggest sum. Hint: Use 
the ternary operators.
*/

let x = 3;
let y = 5;
let z = 8;
let result1 = x + y;
let result2 = x + z;
let result3 = y + z;
let comparison1 = result1 > result2 && result1 > result3;
let comparison2 = result2 > result1 && result2 > result3;
console.log(comparison1 ? x + " " + y : (comparison2 ?  x + " " + z : y + " " + z));
