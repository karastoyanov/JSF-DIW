/* Write a program to calculate the mathematical function factorial of a given number n. */

let num = 5; 
let factorial = 1;

if (num < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else {
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${num} is: ${factorial}`);
}
