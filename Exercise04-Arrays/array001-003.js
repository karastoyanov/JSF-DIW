//: Write a program to find the difference between the maximum element and the minimum element from a one-dimensional array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let minValue = numbers[0];
let maxValue = numbers[0];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > maxValue) {
        maxValue = numbers[index];
    }
    if (numbers[index] < minValue) {
        minValue = numbers[index];
    }
}

console.log(`Max value is ${maxValue}`);
console.log(`Min value is ${minValue}`);

let result = maxValue - minValue;
console.log(result);