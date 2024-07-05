/*
 Write a function that takes a single number as an argument and returns true if the number is even, and false otherwise.
 */

function evenOrOdd(x) {
    if (x % 2 == 0) {
        return true;
    }
    return false;
}
console.log(evenOrOdd(6));