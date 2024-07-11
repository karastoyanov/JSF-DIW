//Write a program to print only the elements greater than or equal to a certain value, from one-dimensional array

let numbers = [-4, 7, -22, 6, 0, -22, 5, 6, 99, 213, 6666, 21312321, 654, 403];
let numberToCompare = 403;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] >= numberToCompare) {
        console.log(numbers[index]);
    }
    
}