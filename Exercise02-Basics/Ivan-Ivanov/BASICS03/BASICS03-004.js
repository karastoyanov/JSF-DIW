/*
BASICS03-004: Define a constant. Check and print on the console if the constant is positive,
negative or zero. Hint: Use ternary operators. How many operators do you need?
*/
const a = -20;  

const check = a > 0 ? 'positive' : (a < 0 ? 'negative' : 'zero');

console.log(check);

//Only 1 ternary operator is needed here