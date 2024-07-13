/*
FUNCTIONS01-005: Write a function that takes a number as an argument and returns the sum
of its digits.
*/
function sumOfDigits(number) {
    let sum = 0;
    const arr = number.toString().split("");
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    console.log(`The sum is "${sum}" `);
    return;
}

sumOfDigits(3541819);