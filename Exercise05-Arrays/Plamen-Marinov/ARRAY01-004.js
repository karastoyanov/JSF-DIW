/*
ARRAY01-004: Write a program to print only the positive elements from one-dimensional 
array.
*/

const arr = [433, 321, 54, -22, 52, -1];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(arr[i]);
  }
}