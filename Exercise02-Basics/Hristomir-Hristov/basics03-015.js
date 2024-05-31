/*

Declare a variable. Assign one digit from the range of [1;9]. Print on the
console the multiplication table with that variable, but in reverse order – first print the
multiplication with 10, then with 9, etc. Also, print on each line the calculated result from
the multiplication raised to the second power.

*/

let num;
num = 5;

let mult10 = (num * 10) ** 2;
let mult9 = (num * 9) ** 2;
let mult8 = (num * 8) ** 2;
let mult7 = (num * 7) ** 2;
let mult6 = (num * 6) ** 2;
let mult5 = (num * 5) ** 2;
let mult4 = (num * 4) ** 2;
let mult3 = (num * 3) ** 2;
let mult2 = (num * 2) ** 2;
let mult1 = (num * 1) ** 2;


console.log(num + " * 10 = " + num * 10 + ", which on the second power is " + mult10);
console.log(num + " * 9 = " + num * 9 + ", which on the second power is " + mult9);
console.log(num + " * 8 = " + num * 8 + ", which on the second power is " + mult8);
console.log(num + " * 7 = " + num * 7 + ", which on the second power is " + mult7);
console.log(num + " * 6 = " + num * 6 + ", which on the second power is " + mult6);
console.log(num + " * 5 = " + num * 5 + ", which on the second power is " + mult5);
console.log(num + " * 4 = " + num * 4 + ", which on the second power is " + mult4);
console.log(num + " * 3 = " + num * 3 + ", which on the second power is " + mult3);
console.log(num + " * 2 = " + num * 2 + ", which on the second power is " + mult2);
console.log(num + " * 1 = " + num * 1 + ", which on the second power is " + mult1);