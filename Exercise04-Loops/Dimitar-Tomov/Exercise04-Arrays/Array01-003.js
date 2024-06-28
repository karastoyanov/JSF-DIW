/*ARRAY01-003: Write a program to find the difference between the maximum element and 
the minimum element from a one-dimensional array.*/

const sequence = [12, 13, 14, 15, 16, 17, 0, -100, -1, -50, -25];
let minElement = sequence[0];
let maxElement = sequence[0];
for (let i = 1; i < sequence.length; i++) {
   if (sequence[i] < minElement) {
       minElement = sequence[i];
   }
   if (sequence[i] > maxElement) {
       maxElement = sequence[i];
   }
}
let difference = maxElement - minElement;
console.log(`difference between maximum and minimum: ${difference}`);