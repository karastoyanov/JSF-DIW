// ARRAY01-003: Write a program to find the difference between the maximum element and 
// the minimum element from a one-dimensional array.


const differenceBetweenMaximumAndMinimumNumbers = input => {
    let biggest = input[0];
    let smallest = input[0];
    for (let i = 0; i < input.length; i++) {
        if (biggest < input[i]) {
            biggest = input[i];
        }
        if (smallest > input[i]) {
            smallest = input[i];
        }
    }

    return biggest - smallest;
}

console.log(differenceBetweenMaximumAndMinimumNumbers([17, 125, 6346, 7, 124, 330]));