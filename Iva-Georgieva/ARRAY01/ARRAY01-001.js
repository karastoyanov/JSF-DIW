/* Write a program to find the minimum element from a one-dimensional array. */

const sequence = [6, 2, 100, 0, 5, 7, 7];
let minElement = sequence[0];

for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] < minElement) {
        minElement = sequence[i]
    }
}

console.log (`min element is ${minElement}`);
