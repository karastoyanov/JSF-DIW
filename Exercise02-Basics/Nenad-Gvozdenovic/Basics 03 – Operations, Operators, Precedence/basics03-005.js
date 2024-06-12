/*
BASICS03-005: Declare three variables and assign them with three randomly selected integer 
numbers. Print on the console those two of them, which have the biggest sum. Hint: Use 
the ternary operators.
*/

let a = 15;
let b = 19;
let c = 23;

let sumAB = a + b;
let sumBC = b + c;
let sumAC = a + c;

tmpResult1 = (sumAB >= sumBC) ? 'AB' : 'BC';
tmpResult2 = (sumAB >= sumAC) ? 'AB' : 'AC';
tmpResult3 = (sumBC >= sumAC) ? 'BC' : 'AC';

console.log (a, b, c);
console.log (sumAB, sumBC, sumAC);
(a+b) < (b+c) ? ((a+c) < (b+c)) ? console.log (b, c) : console.log (a, c) : console.log (a , b)
sumAB < sumBC ? (sumAC < sumBC ? console.log(sumBC) : console.log(sumAC)) : console.log(sumAB);