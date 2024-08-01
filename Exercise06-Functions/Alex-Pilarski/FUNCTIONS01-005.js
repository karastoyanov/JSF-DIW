/* Write a function that takes a number as an argument and returns the sum of its digits. */

function sumOfDigits(number) {
    
    const numberString = number.toString();

    let sum = 0;

    for (const char of numberString) {

        sum += parseInt(char, 10);
    }

    return sum;
}

console.log(sumOfDigits(24680));

