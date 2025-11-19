/*
ARRAY01-018: Find the sum of all numbers in a table. Assume that the table contains only 
numbers.
*/

const table = [[76, 23, 1], [-2, 124, 54], [90, 91, -23], [9, -1, 88]];

let totalSum = 0

for (let i = 0; i < table.length; i++) {
  for (let j = 0; j < table[1].length; j++) {
    totalSum += table[i][j];
  }
}

console.log("The total sum of all numbers in the table is:", totalSum);