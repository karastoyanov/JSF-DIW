//Write a program to print only the positive elements from one-dimensional array.

let numbers = [-4, 7, -22, 6, 0, -22, 5];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > 0) {
        console.log(numbers[index])
    }
    
}