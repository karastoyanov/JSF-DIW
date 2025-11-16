"use strict"
/* 
FUNCTIONS03-003: Write a recursive function that takes two numbers and returns their 
greatest common divisor (GCD) – най-голям общ делител. The greatest common divisor 
(GCD) of two numbers is the greatest common factor number that divides them without 
reminder (без остатък, точно).
For example: The GCD of 21 and 14 is 7.
*/

function recursiveGCD(n1, n2) {
  if (n2 === 0) {
    return n1;
  }

  return recursiveGCD(n2, n1 % n2);
} 

console.log(recursiveGCD(21, 14));