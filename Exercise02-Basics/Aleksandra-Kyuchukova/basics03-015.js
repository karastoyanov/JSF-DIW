"use strict"
/*
BASICS03-015: Declare a variable. Assign one digit from the range of [1;9]. Print on the 
console the multiplication table with that variable, but in reverse order – first print the 
multiplication with 10, then with 9, etc. Also, print on each line the calculated result 
from the multiplication raised to the second power (на степен 2). 
*/

let numOne = 2;

console.log(`${numOne} * 10 = ${numOne * 10}, ${(numOne * 10) ** 2}`);
console.log(`${numOne} * 9 = ${numOne * 9}, ${(numOne * 9) ** 2}`);
console.log(`${numOne} * 8 = ${numOne * 8}, ${(numOne * 8) ** 2}`);
console.log(`${numOne} * 7 = ${numOne * 7}, ${(numOne * 7) ** 2}`);
console.log(`${numOne} * 6 = ${numOne * 6}, ${(numOne * 6) ** 2}`);
console.log(`${numOne} * 5 = ${numOne * 5}, ${(numOne * 5) ** 2}`);
console.log(`${numOne} * 4 = ${numOne * 4}, ${(numOne * 4) ** 2}`);
console.log(`${numOne} * 3 = ${numOne * 3}, ${(numOne * 3) ** 2}`);
console.log(`${numOne} * 2 = ${numOne * 2}, ${(numOne * 2) ** 2}`);
console.log(`${numOne} * 1 = ${numOne * 1}, ${(numOne * 1) ** 2}`);