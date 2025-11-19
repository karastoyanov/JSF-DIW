/*
ARRAY01-008: Write a program to create and print one-dimensional array in reverse order.
*/

const arr = [232, 321, 4234, -133, 4134, 9]

let reversed = []

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}

console.log(reversed);