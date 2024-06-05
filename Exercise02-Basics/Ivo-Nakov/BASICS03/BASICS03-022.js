/*
BASICS03-022
You have the following excerpt of a JavaScript code:
let a = 1;
let b = 3;
let result = a**++b/b++**a;
Try to calculate the value of the result variable, without executing the code.
*/

/*
BASICS03-022 - SOLUTION
++b: // b becomes 4
a ** 4: // a to power of 4 equals 1
b++: // b is still 4
b++ ** 1: // b++ ** 1 equals 4
1 / 4: // Divide 1 by 4 equals 0.25
*/

console.log("The result is 0.25");