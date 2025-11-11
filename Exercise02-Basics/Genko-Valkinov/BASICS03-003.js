// BASICS03-003: Declare four variables. On two of them assign integer numbers. The third set 
// with the division remainder. The fourth one set with the quotient (частното -> цялата 
// част от делението). Print on the console the four variables with appropriate 
// description.

let firstNumber = 17;
let secondNumber = 7;
let thirdNumber = firstNumber % secondNumber;
let fourthNumber = firstNumber / secondNumber;

console.log(`First number ${firstNumber}`);
console.log(`Second number ${secondNumber}`);
console.log(`Remainder between first and second number ${thirdNumber}`);
console.log(`Quotient between first and second nubmer ${fourthNumber.toFixed(0)}`);