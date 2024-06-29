*ARRAY01-001: Write a program to find the minimum element from a one-dimensional array. */

const sequence = [12, 13, 14, 15, 16, 17, 0, 100, -1, -50, -25];
let minElement = sequence[0];
for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] < minElement) {
        minElement = sequence[i];
    }
}
console.log(`minimum element is: ${minElement}`);



/*
const sequence = [];
if (sequence.length == 0) {
    console.log(`no elements`);
} else {
    let minElement = sequence[0];
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] < minElement) {
            minElement = sequence[i];
        }
        console.log(`minimum element is: ${minElement}`);
    }
}*/

