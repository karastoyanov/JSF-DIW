/*
BASICS03-005: Declare three variables and assign them with three randomly selected integer
numbers. Print on the console those two of them, which have the biggest sum. Hint: Use
the ternary operators.
*/

let a = 10;
let b = 15;
let c = 20;

let AB = a+b;
let AC = a+c;
let BC = b+c;

let check = (AB >= AC && AB >= BC) ? `a and b: ${a} + ${b} = ${AB}` : (AC >= AB && AC >= BC) ? `a and c: ${a} + ${c} = ${AC}` : `b and c: ${b} + ${c} = ${BC}`;

console.log(`Two numbers with the largest sum are: ${check}`);