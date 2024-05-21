/*

Declare two variables. Assign them with one English alphabet character and
one number character. Compare them with the “greater than” operator (>) and print on
the console the result. Can you describe the result?

*/


let var1, var2;

var1 = 'J';
var2 = 3;

let result = var1 > var2;
console.log(result);

/* 
If we try to compare a string with an integer, the result will always be false, since the string cannot be converted.
However, if the integer is converted into a string, the result will be true, as letters have a higher code on the ASCII table.
*/