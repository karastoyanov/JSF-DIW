/* Write a function that takes three numbers as arguments and returns the biggest sum of two of the numbers. */

function biggestSumOfTwo(num1, num2, num3) {
    let sum1 = num1 + num2;
    let sum2 = num1 + num3;
    let sum3 = num2 + num3;

    let maxSum = sum1;
    
    if (sum2 > maxSum) {
        maxSum = sum2;
    }
    
    if (sum3 > maxSum) {
        maxSum = sum3;
    }

    return maxSum;
}

console.log(biggestSumOfTwo(10, 20, 30)); 

