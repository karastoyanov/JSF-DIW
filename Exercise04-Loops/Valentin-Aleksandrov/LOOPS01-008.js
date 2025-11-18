/* : Write a program to calculate the mathematical function factorial of a given 
number n.
0! = 1
1! = 1
2! = 1 . 2
3! = 1 . 2 . 3
n! = 1 . 2 . 3 . ……. . n */

let n = 4;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}

console.log("Factorial of " + n + " is: " + factorial);
