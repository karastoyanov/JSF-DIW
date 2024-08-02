/* Write a program to find the maximum element from a one-dimensional array. */

let sequence = [9, -9, 7, 100, 0];
let maxElement = sequence[0];

for ( let i = 0; i < maxElement.length; i++) {
    if (sequence[i] > maxElement) {
        maxElement = sequence[i];

    }
}
console.log(`${maxElement}`);