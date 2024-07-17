// Find the maximum elements from each row in two-dimensional array.

let numbers = [
    [11, 22, 33],
    [44, 55, 66],
    [77, 88, 99]
];
let arrayMaxNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    let currentRowMax = numbers[i][0];;

    for (let l = 0; l < numbers[i].length; l++) {
        if (numbers[i][l] > currentRowMax) {
            currentRowMax = numbers[i][l];
        }
        
    }
    arrayMaxNumbers.push(currentRowMax);
}

console.log(arrayMaxNumbers)