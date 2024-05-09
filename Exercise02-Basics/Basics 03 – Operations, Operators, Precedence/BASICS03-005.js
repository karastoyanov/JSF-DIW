/*
BASICS03-005: Declare three variables and assign them with three randomly selected integer
numbers. Print on the console those two of them, which have the biggest sum. Hint: Use
the ternary operators.
*/

let a = 12;
let b = 15
let c = 18;


(a+b) < (b+c) ? ((a+c) < (b+c) ? console.log(b, c) : console.log(a, c)) : console.log(a, b);