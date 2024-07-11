/*
FUNCTIONS01-007: Write a function that takes three numbers as arguments and returns the
biggest sum of two of the numbers.
*/

function biggestSum(x, y, z) {
    if ((x + y > y + z) && (x + y > x + z)) {
        console.log(`The biggest sum is ${x + y} between ${x} and ${y}`);
    }
    else if ((y + z > x + z) && (y + z > x + y)) {
        console.log(`The biggest sum is ${y + z} between ${y} and ${z}`);
    }
    else if ((x + z > y + z) && (x + z > x + y)) {
        console.log(`The biggest sum is ${x + z} between ${x} and ${z}`);
    }
    return;
}

biggestSum(4, 5, 3);