/* Write a function that takes two numbers as arguments and returns the largest of them. */

function getLargestNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let number1 = 10;
let number2 = 20;
let largestNumber = getLargestNumber(number1, number2);

console.log(`The largest number between ${number1} and ${number2} is ${largestNumber}`);
