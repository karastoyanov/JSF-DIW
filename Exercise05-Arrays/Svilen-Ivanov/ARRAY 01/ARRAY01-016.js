// ARRAY01-016: From a given N x N table, find the sum of its two main diagonals .

const arr = [[43, 95, 68, 89], [-9, 0, 84, 300], [-16, -19, -158, 222], [65, -19, 5, 21]];
let sumTopLeftToBottomRightDiag = 0;
let sumTopRightBottomLeftDiag = 0;
/* As a it should look something like this

 43,  95,  68,  89
-90,   0,  84, 300
-16, -19,-158, 222
 65, -19,   5,  20

*/

for (let i = 0; i < arr.length; i++){

    for (let j = i; j < arr[i].length; j++) {
        sumTopLeftToBottomRightDiag += arr[i][j];
        break;
    }

    for (let j = arr[i].length - (i + 1); j >= 0; j--) {
        sumTopRightBottomLeftDiag += arr[i][j];
        break;
    }
}

console.log(`The sum of the numbers from one of the diagonals is ${sumTopLeftToBottomRightDiag} 
and from the other one is ${sumTopRightBottomLeftDiag}`);
