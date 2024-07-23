/*FUNCTIONS01-005: Write a function that takes a number as an argument and returns the sum 
of its digits.*/

function sumOfDigits(num) {
    const numStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numStr.lenght; i++) {
        sum +=
        parseInt(numStr[i], 10);
    }
return sum;
}
const number = 12345;
const result = sumOfDigits(number);
console.log(result);