/*
ARRAY01-019: Count the even numbers in a two-dimensional array. Calculate the 
percentage of this amount from the total amount of numbers in the array.
*/

const arr = [[1171, 23, 1], [-21, 111, 21], [91, 91, -33], [7, 1, 18]];

let countAllNumber = 0;
let countOddNumber = 0;
let percentage = 0

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] % 2 != 0) {
      countOddNumber++;
    }
    countAllNumber++;
  }
}
percentage = ((countOddNumber / countAllNumber) * 100)


console.log(`The table has ${countOddNumber} odd numbers which is ${percentage} of total numbers in the table.`);