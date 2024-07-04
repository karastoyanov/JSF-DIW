/*
Write a program to find the average value from one-dimensional array, filled in with numbers. 
Create a new array, having the elements from the first one but each of them increased with the average value. 
*/

const sequence = [10, 20, 30, 40];
const new_seq = [];
let sum = 0;
let avg = 0;

for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];
    avg = sum / sequence.length;
    for (let j = 0; j < sequence.length; j++) {
        new_seq[j] = sequence[j] + avg;
    }
}
console.log(new_seq);