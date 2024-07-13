/*ARRAY01-002: Write a program to find the maximum element from a one-dimensional array.*/

const sequence = [12, 13, 14, 15, 16, 17, 0, -100, -1, -50, -25];
let maxElement = sequence[0];
for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] > maxElement) {
        maxElement = sequence[i];
    }
}
console.log(`maximum element is: ${maxElement}`);