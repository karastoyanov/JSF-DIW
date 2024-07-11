/*
LOOPS01-008: Write a program to calculate the mathematical function factorial of a given
number n.
*/

let n = 6;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

console.log (`The factorial of ${n} is ${factorial}`);