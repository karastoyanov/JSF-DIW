/*
FUNCTIONS01-002: Write a function that takes a single number as an argument and returns
true if the number is even, and false otherwise.
*/

function evenOrOdd(z) {
    if (z % 2 == 0) {
        console.log(`The number is even.`);
    }
    else {
        console.log(`The number is odd.`);
    }
    return;
}

evenOrOdd(345324);