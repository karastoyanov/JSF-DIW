/*Array A has N elements. The two-dimensional array B has N x N size. Check if 
the array A matches any of the rows in array B. Print the row number if matches, 
otherwise – print “no match with the rows”.*/

let arrayA = [4, 5, 6];
let arrayB = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 10]
];

let flag = false;
let rowMatched = 0;

for (let i = 0; i < arrayA.length; i++) {
    let matchCount = 0;
    for (let k = 0; k < arrayA.length; k++) {
        if (arrayA[k] != arrayB[i][k]) {
            continue;
        }else{
        matchCount++;
        }

    }
    if (matchCount == arrayA.length) {
        flag = true;
        rowMatched = i;
    }
    
}
if (flag) {
    console.log(rowMatched);
} else {
    console.log("no match with the rows");
}