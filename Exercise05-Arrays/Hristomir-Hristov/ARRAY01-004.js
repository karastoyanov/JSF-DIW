/*
Write a program to print only the positive elements from one-dimensional array.
*/

const sequence = [-5, 112, -223, -55, 88, 293];

for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] > 0) {
        console.log(sequence[i]);
    }
}