// Count the amount of elements (numbes) in a two-dimensional array, 
// who are bellow a certain threshold.

const array = [[21, 3, 77, 24, 61, -123, 89, -94, 0], [-34, 78, 0, -99, 12, 45, -7, 88, -56, 23, 91, -12]];

let threshold = 17;
let count = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] < threshold) {
            count++;
        }
    }
}

console.log(`The ammount of numbers below ${threshold} is ${count}.`);