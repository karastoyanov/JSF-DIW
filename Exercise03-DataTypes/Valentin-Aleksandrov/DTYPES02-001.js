/* Define two number variables without decimal, two with decimal, two number 
variables in exponential notation; two variables in exponential notation (but with 4 digits 
for the whole part and 7 digits for the fractional part (остатък)). */

let firstNumber = 1;
let secondNumber = 2;
let thirdNumber = 1.5;
let fourthNumber = 2.5;
let fifthNumber = (4).toExponential();
let sixthNumber = (7).toExponential();
let seventhNumber = (4444.7777777).toExponential();
let eightNumber = (3333.5555555).toExponential();

console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
console.log(fourthNumber);
console.log(fifthNumber);
console.log(sixthNumber);
console.log(seventhNumber);
console.log(eightNumber);
