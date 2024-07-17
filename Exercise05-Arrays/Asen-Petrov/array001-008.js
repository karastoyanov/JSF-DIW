//Write a program to create and print one-dimensional array in reverse order.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reversedNumbers = [];

for (let index = numbers.length - 1; index >= 0; index--) {
    reversedNumbers.push(numbers[index]);
    
}
console.log(reversedNumbers);