// Write a program to calculate the mathematical function factorial of a given number n.
// 0! = 1
// 1! = 1
// 2! = 1 . 2
// 3! = 1 . 2 . 3
// n! = 1 . 2 . 3 . ……. . n

let x = 7;
let factorial = 1;

for (let i = 1; i <= x; i++) {
    factorial = factorial * i;
}

console.log(`The factorial of the number ${x} is ${factorial}.`);