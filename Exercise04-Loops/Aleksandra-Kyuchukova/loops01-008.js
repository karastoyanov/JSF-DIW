"use strict"
/* 
LOOPS01-008: Write a program to calculate the mathematical function factorial of a given 
number n.
0! = 1
1! = 1
2! = 1 . 2
3! = 1 . 2 . 3
n! = 1 . 2 . 3 . ……. . n
*/
let num = 7;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact *= i;
}
 console.log(fact);