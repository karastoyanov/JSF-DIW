// Count the even numbers in a two-dimensional array. 
// Calculate the percentage of this amount from the total amount of numbers in the array.

const array = [[21, 3, 77, 24, 61, -123, 89, -94, 0], [-34, 78, 0, -99, 12, 45, -7, 88, -56, 23, 91, -12]];
let percentageEven = 0;
let allNumbers = 0;
let evenNumers = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] % 2 === 0) {
            evenNumers++
        }
        allNumbers++;
    }
}

percentageEven = Math.round((evenNumers / allNumbers) * 100);

console.log(`The count of even numbers is ${evenNumers}. And their percentage of all numbers is ${percentageEven}%.`);