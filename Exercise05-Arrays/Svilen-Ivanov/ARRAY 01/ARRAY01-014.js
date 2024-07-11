/*
ARRAY01-014: From a given table, find the row with the biggest sum of its elements.
*/


const arr = [[14, 95, 68], [-9, 0, 84], [-16, -19, -158], [0, 0, 0], [111, 222, 333]];
let tempSum = 0;
let biggestSum = Number.MIN_SAFE_INTEGER;
let arrIndex;

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {
        tempSum += arr[i][j];
    }
    
    if (biggestSum < tempSum) {
        biggestSum = tempSum;
        arrIndex = arr[i];
    }

    tempSum = 0;
}
console.log(`The row with the biggest sum is ${arrIndex} with the sum of ${biggestSum}.`);
