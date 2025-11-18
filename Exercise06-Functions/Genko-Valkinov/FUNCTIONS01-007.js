// FUNCTIONS01-007: Write a function that takes three numbers as arguments and returns the 
// biggest sum of two of the numbers.

const biggestSumOfTwoFromTheThreeNumbers = (first, second, third) =>
    (first + second > first + third && first + second > second + third) ? first + second :
        (first + third > first + second && first + third > second + third) ? first + third :
            second + third;

console.log(biggestSumOfTwoFromTheThreeNumbers(10, 20, 55));