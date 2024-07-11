/*
BASICS03-004
Define a constant. Check and print on the console if the constant is positive,
negative or zero. Hint: Use ternary operators. How many operators do you need?
*/


const number = 5;

const result = number > 0 ? "positive" : number < 0 ? "negative" : "zero";

console.log(`The number is ${result}.`);
console.log("Two operators were required.");