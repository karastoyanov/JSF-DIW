/*
Write a program to find the difference between the maximum element and
the minimum element from a one-dimensional array.
*/

const sequence = [5, 112, 23, 55, 22, 293];

let maxElement = sequence[0];
let minElement = sequence[0];
let sequenceLenght = sequence.length;

for (let i = 1; i < sequenceLenght; i++) {
    if (sequence[i] > maxElement) {
        maxElement = sequence[i];
    }
     if (sequence[i] < minElement) {
        minElement = sequence[i];
    }
} 
console.log(`The difference between ${maxElement} and ${minElement} is ${maxElement - minElement}`);