/**
 * ARRAY01-008: Write a program to create and print one-dimensional array in reverse order.
 */

let arr = [1, 20, 3, 50, 3, 2, 1, 11, -3];
console.log(arr);

for (let i = arr.length - 1; i > 0; i--) {
  console.log(arr[i]);
}

// 2nd way
arr.reverse();
console.log(arr);
