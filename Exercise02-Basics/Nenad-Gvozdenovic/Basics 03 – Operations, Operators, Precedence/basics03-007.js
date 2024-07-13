/*
BASICS03-007: Declare a constant and assign one digit. Print on one line the constant, the 
power of two (N2), the power of three (N3) on the console.
*/

const A = 5;
/* excluding the below math usage : 
let N2 = (Math.pow(a, 2));
let N3 = (Math.pow(a, 3));
console.log(a, "N2="+N2," N3="+N3);
*/
let numberOnTwo = A ** 2;   
let numberOnThree = A ** 3;

console.log(`The number ${A} on power of two is ${numberOnTwo} and on power of three is ${numberOnThree}`);