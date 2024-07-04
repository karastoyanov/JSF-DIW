/*
Write a program to print the positive even elements, greater than a certain const value from one-dimensional array.
*/

const sequence = [100, -40, 10, -2, 555, 880, 293];
const VALUE = -50;

for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] > VALUE && sequence[i] % 2 == 0 && sequence[i] > 0 ) {
        console.log(sequence[i]);
    }
}