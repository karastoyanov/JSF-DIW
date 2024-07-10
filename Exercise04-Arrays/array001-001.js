// Write a program to find the minimum element from a one-dimensional array.

let currentArray = [81, 5, 6, 7, 7, 8, 9];
let minValue = currentArray[0];

for (let index = 1; index < currentArray.length; index++) {
    if (currentArray[index] < minValue) {
        minValue = currentArray[index];
    }
    
}

console.log(minValue);