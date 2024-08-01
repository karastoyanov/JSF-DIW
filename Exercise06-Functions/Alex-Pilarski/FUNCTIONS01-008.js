/* Write a function that calculates the average value of numbers in an array. */

function calculateAverage(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }

    const average = sum / numbers.length;

    return average;
}

console.log(calculateAverage([1, 2, 3, 4, 5])); 


