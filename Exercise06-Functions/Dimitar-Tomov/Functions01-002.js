/*JSF-Part1-Exercises page: 15/16 
FUNCTIONS01-002: Write a function that takes a single number as an argument and returns 
true if the number is even, and false otherwise.*/

function evenOdd(n) {
    if (n % 2 == 0) {
        return true;
    }
    return false;
}
console.log(evenOdd(244));