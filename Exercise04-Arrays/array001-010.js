//Find the minimum elements from each column in two-dimensional array.

let numbers = [
    [11, 22, 33],
    [44, 55, 66],
    [77, 88, 99]
];
let arrayMinNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    let currentColumnMin = numbers[0][i];;

    for (let l = 0; l < numbers[i].length; l++) {
        if (numbers[i][l] < currentColumnMin) {
            currentColumnMin = numbers[i][l];
        }
        
    }
    arrayMinNumbers.push(currentColumnMin);
}

//printing min number from each column (11, 22, 33)
console.log(arrayMinNumbers);
