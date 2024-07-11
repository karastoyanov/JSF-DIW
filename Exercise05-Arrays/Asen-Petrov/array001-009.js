/*Write a program to find the average value from one-dimensional array, filled in 
with numbers. Create a new array, having the elements from the first one but each of 
them increased with the average value.*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumNumbers = 0;
let modifiedNumbers = [];

for (let index = 0; index < numbers.length; index++) {
    sumNumbers += numbers[index];
    
}

let average = sumNumbers / numbers.length;
for (let index = 0; index < numbers.length; index++) {
    modifiedNumbers.push(numbers[index] + average);
    
}
console.log(average);
console.log(modifiedNumbers);