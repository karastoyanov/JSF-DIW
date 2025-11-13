/*
LOOPS01-008: Write a program to calculate the mathematical function factorial of a given 
number n.
0! = 1 -> Factorial of 0 is: 1
1! = 1 -> Factorial of 1 is: 1
2! = 1 . 2 -> Factorial of 2 is: 2
3! = 1 . 2 . 3 -> Factorial of 3 is: 6
n! = 1 . 2 . 3 . ……. . n -> Factorial of 10 is: 3628800
*/

let n = 10;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}

console.log("Factorial of " + n + " is: " + factorial);