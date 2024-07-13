/*ARRAY01-008: Write a program to create and print one-dimensional array in reverse order.*/

const sequence = [12, 13, 14, 15, 16, 17, 0, 100, -1, -50, -25];
for (let i = sequence.length - 1; i >= 0; i--) {
   console.log(sequence[i]);
}