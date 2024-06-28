/*ARRAY01-004: Write a program to print only the positive elements from one-dimensional 
array.*/

const sequence = [12, 13, 14, 15, 16, 17, 0, 100, -1, -50, -25];
for (let i = 0; i < sequence.length; i++) {
   if (sequence[i] > 0) {
       console.log(sequence[i]);
   }
}
