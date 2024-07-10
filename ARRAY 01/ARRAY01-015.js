/*
ARRAY01-015: From a given table, find the column with the largest sum of its elements.
*/

// Jesus this took a long time. I am positive there is a much ellegant solution to this but I couldn't find it.

const arr = [[1400, 95, 68], [-9, 0, 84], [-16, -19, -158], [0, 300, 0], [111, 222, 333]];
let tempSum = 0;
let biggerSum = 0;
let tempArrIndex = [];
let biggestSum = Number.MIN_SAFE_INTEGER;
let permArrIndex = [];

for (let index = 0; index < arr.length; index++) {  
    biggerSum = 0;
    tempArrIndex = [];

    for (let i = 0; i < arr.length; i++) {

        tempSum = 0;

        for (let j = index; j < arr[i].length; j++) {  //Need to fix. It is not OK to have j= index
            tempSum += arr[i][j];
            biggerSum += tempSum;
            tempArrIndex.push(arr[i][j]);
            break;
        }
    }
    if (biggerSum >= biggestSum) {
        biggestSum = biggerSum;
        permArrIndex = tempArrIndex;
    }


}
console.log(`The row with the biggest sum is ${permArrIndex} with the sum of ${biggestSum}.`);
