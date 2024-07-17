//Write a program to find the maximum element from a one-dimensional arra

let currentArray = [81, 5, 6, 7, 75532, 8123, 999];
let maxValue = currentArray[0];

for (let index = 1; index < currentArray.length; index++) {
    if (currentArray[index] > maxValue) {
        maxValue = currentArray[index];
    }
    
}

console.log(maxValue);