/*: Array A has N elements. The two-dimensional array B has N x N size. Check if 
the array A matches any of the columns in array B. Print the column number if matches, 
otherwise – print “no match with the columns”*/

let arrayA = [4, 5, 6];
let arrayB = [
    [1, 2, 4],
    [4, 5, 5],
    [7, 8, 6]
];

let flag = false;
let columnMatched = 0;

for (let i = 0; i < arrayA.length; i++) {
    let matchCount = 0;
    for (let k = 0; k < arrayA.length; k++) {
        if (arrayA[k] != arrayB[k][i]) {
            continue;
        }else{
        matchCount++;
        }

    }
    if (matchCount == arrayA.length) {
        flag = true;
        columnMatched = i;
    }
    
}
if (flag) {
    console.log(columnMatched);
} else {
    console.log("no match with the columns");
}