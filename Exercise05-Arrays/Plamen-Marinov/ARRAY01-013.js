/*
ARRAY01-013: Transpose a square matrix.
[БГ]: Транспониране на матрица:
редовете на A стават стълбове (колони) на AT; 
стълбовете (колоните) на A стават редове на AT.
*/

const tableOne = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let tableTwo = [];

for (let i = 0; i < tableOne.length; i++) {
  let currentRowArray = [];
  for (let l = 0; l < tableOne.length; l++) {
    currentRowArray.push(tableOne[l][i]);
  }
  tableTwo.push(currentRowArray);
}

console.log("Transposed Table:");
for (let i = 0; i < tableTwo.length; i++) {
  console.log(tableTwo[i]);
}