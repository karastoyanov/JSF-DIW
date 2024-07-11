/*
Write a program to print only the elements greater than or equal to a certain value, from one-dimensional array. 
*/

const sequence = [100, -52, 14, -23, 555, 881, 293];
let value = 100;

for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] >= value) {
        console.log(sequence[i]);
    }
}