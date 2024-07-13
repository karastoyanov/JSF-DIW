/*
Write a function that takes three numbers as arguments and returns the biggest sum of two of the numbers. 
*/

let biggestSum = 0;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

function words(a, b, c) {
    sum1 = a + b;
    sum2 = a + c;
    sum3 = b + c;

    if (sum1 > sum2 && sum1 > sum3) {
        return biggestSum = sum1;
    } else if (sum2 > sum1 && sum2 > sum3) {
        return biggestSum = sum2;
    } else
        return biggestSum = sum3;
}
console.log(words(3, 5, 8));