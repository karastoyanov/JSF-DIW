
/*
BASICS03-004: Define a constant. Check and print on the console if the constant is positive, 
negative or zero. Hint: Use ternary operators. How many operators do you need?
*/

let a = 3;

let result = (a >= 0) ? 'positive' : 'negative';
let resultComparisedWithZero = (a == 0) ? "is null" : "is not null"
console.log("the result is " + result + " and " + resultComparisedWithZero);
