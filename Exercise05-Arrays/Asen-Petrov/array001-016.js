// From a given N x N table, find the sum of its two main diagonals .
let table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 10]
];

let principalDiagonal = 0
let secondaryDiagonal = 0;
for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table.length; j++) {
 
            // Condition for principal diagonal
            if (i == j)
            principalDiagonal += table[i][j];
 
            // Condition for secondary diagonal
            if ((i + j) == (table.length - 1))
            secondaryDiagonal += table[i][j];
        }
    }
 console.log(principalDiagonal);
 console.log(secondaryDiagonal);
 console.log(principalDiagonal + secondaryDiagonal);