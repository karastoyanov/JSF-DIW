/*
Write a program to find the minimum element from a one-dimensional array.
*/

const sequence = [5, 12, -223, -55, "ab", 293];
if (sequence.length == 0) {
    console.log('no elements')
} else {
    let minElement = sequence[0];

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] < minElement) {
            minElement = sequence[i];
        }
    }
    console.log(minElement);
}
