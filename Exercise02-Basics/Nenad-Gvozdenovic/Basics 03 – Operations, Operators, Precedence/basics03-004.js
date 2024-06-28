/*
BASICS03-004: Define a constant. Check and print on the console if the constant is positive, 
negative or zero. Hint: Use ternary operators. How many operators do you need?
*/

const a = 0;
let numberSign = a < 0 ? "Negative" : a > 0 ? "Positive" : "Zero";

console.log(numberSign);