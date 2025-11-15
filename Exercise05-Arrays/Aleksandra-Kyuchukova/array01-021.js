"use strict"
/* 
ARRAY01-021: Print on the console all elements (numbers) of a table (N x N), using exactly 5 
positions for each element, right justified.
*/

const arr = [
  [1, 2], 
  [4, 3]
];

for (let i = 0; i < arr.length; i++) {
  let print = '';
  for (let j = 0; j < arr[i].length; j++) {
    print += arr[i][j].toString().padStart(5, '*'); 
  }
  console.log(print);
}

