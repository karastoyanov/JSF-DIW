"use strict"
/* 
FUNCTIONS03-002: Write a recursive function that takes a number n and returns the n-th 
Fibonacci sequence number (assume that the first 2 numbers are: 0, 1).
*/

function recursiveFibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6));