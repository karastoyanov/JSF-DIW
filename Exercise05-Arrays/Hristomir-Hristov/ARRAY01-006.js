/*
 Write a program to print the odd elements greater than a certain const value from one-dimensional array. 
 */

const sequence = [100, -52, 13, -23, 555, 880, 293];
const VALUE = 10;

for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] > VALUE && sequence[i] % 2 != 0 ) {
        console.log(sequence[i]);
    }
}