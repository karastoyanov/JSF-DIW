//Write a function that takes three numbers as arguments and returns the biggest sum of two of the numbers.

let numOne = 1;
let numTwo = 2;
let numThree = 3;

function compareThreeNumbers(a, b, c){

    let arrayNums = [a, b, c];
    let currentBiggest = arrayNums[0];

    for (let i = 1; i < arrayNums.length; i++) {
        
        if (arrayNums[i] > currentBiggest) {
            currentBiggest = arrayNums[i]
        }
    }

    return currentBiggest;
}

console.log(compareThreeNumbers(numOne, numTwo, numThree));
