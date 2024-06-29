/*
Write a program to find the maximum element from a one-dimensional array.
*/

const sequence = [5, 112, -223, -55, 22, 293];
if (sequence.length == 0) {
    console.log('no elements')
} else {
    let maxEl = sequence[0];

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] > maxEl) {
            maxEl = sequence[i];
        }
    }
    console.log(maxEl);
}