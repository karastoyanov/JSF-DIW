/*
ARRAY01-019: Count the even numbers in a two-dimensional array. Calculate the
percentage of this amount from the total amount of numbers in the array.
*/

const arr = [[43, 95, 68, 89], [-9, 0, 84, 300], [-16, -19, -158, 222], [65, -19, 5, 53]];
let countOddNumbers = 0;
let countAllNumbers = 0;
let percentageOddFromAll = 0

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] % 2 != 0) {
            countOddNumbers ++;
        }
        countAllNumbers++;
    }
}
percentageOddFromAll = ((countOddNumbers / countAllNumbers) * 100)


console.log(`There are ${countOddNumbers} odd numbers, which is a ${percentageOddFromAll}% of the total amount of numbers in the array`);
