/*
ARRAY01-005: Write a program to print only the elements greater than or equal to a certain 
value, from one-dimensional array.
*/

const arr = [433, 321, 54, -22, 52, -1];

let value = 200

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= value) {
    console.log(arr[i]);
  }
}