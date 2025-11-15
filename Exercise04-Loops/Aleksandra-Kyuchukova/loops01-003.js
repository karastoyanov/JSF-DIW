"use strict"
/* 
LOOPS01-003: There are given two variables initialized with numbers. Write a program to 
determine which one is the greater.
*/

let num1 = 4;
let num2 = 5;

if (num1 > num2) {
  console.log(`The first number is bigger - ${num1}`);
} else if (num1 < num2) {
  console.log(`The second number is bigger - ${num2}`);
} else {
  console.log(`The numbers are equal`);
}