/* BASICS02-013: Declare two variables. Assign them with one English alphabet character and 
one number character. Compare them with the “greater than” operator (>) and print on 
the console the result. Can you describe the result? */

let alphabetChar;
let numberChar;

alphabetChar = "F";
numberChar = 8;
let result = alphabetChar > numberChar;

console.log(result);

/* Operations are not in the same type so "x" is being converted to numeric (NaN) for "grater than" operation to proceed.
x = NaN, NaN is considered for the lowest value in JavaScript.
Result is false, because NaN is lower than 8. */