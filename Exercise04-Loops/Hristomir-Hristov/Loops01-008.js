/*
Write a program to calculate the mathematical function factorial of a given number n.
*/

let num = -2;

if (num < 0) {
    console.log(`The number must be positive!`);
} else {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log(result);
}