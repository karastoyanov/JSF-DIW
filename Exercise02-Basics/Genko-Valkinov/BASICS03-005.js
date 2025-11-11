// BASICS03-005: Declare three variables and assign them with three randomly selected integer 
// numbers. Print on the console those two of them, which have the biggest sum. Hint: Use 
// the ternary operators.

let firstNumber = 7;
let secondNumber = 17;
let thirdNumber = 11;

let firstNumberAndSecondNumberSum = firstNumber + secondNumber;
let firstNumberAndThirdNumberSum = firstNumber + thirdNumber;
let secondNumberAndThirdNumberSum = secondNumber + thirdNumber;

let firstNumberAndSecondNumberBiggestSumMessage = `First number ${firstNumber} and Second number ${secondNumber} sum ${firstNumberAndSecondNumberSum} is the biggest.`;
let firstNumberAndThirdNumberBiggestSumMessage = `First number ${firstNumber} and Third number ${thirdNumber} sum ${firstNumberAndThirdNumberSum} is the biggest.`;
let secondNumberAndThirdNumberBiggestSumMessage = `Second number ${secondNumber} and Third number ${thirdNumber} sum ${secondNumberAndThirdNumberSum} is the biggest.`;


console.log(
  firstNumberAndSecondNumberSum > firstNumberAndThirdNumberSum && firstNumberAndSecondNumberSum > secondNumberAndThirdNumberSum
    ? firstNumberAndSecondNumberBiggestSumMessage
    : firstNumberAndThirdNumberSum > firstNumberAndSecondNumberSum && firstNumberAndThirdNumberSum > secondNumberAndThirdNumberSum
    ? firstNumberAndThirdNumberBiggestSumMessage
    : secondNumberAndThirdNumberBiggestSumMessage
);