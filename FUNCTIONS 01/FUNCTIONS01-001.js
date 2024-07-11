/*
FUNCTIONS01-001: Write a function that takes two numbers as arguments and returns the
largest of them.
*/

function biggestNumber(x, y) {
    if (x > y) {
        console.log(`${x} is bigger than ${y}.`);
    }
    else if (y > x) {
        console.log(`${y} is bigger than ${x}.`);
    }
    else {
        console.log(`The numbers are equal.`);
    }
    return;
}

biggestNumber(9, 8);