//Write a program to print the positive even elements, greater than a certain 
//const value from one-dimensional array.

let numbers = [-4, 7, -22, 6, 0, -22, 5, 6, 99, 213, 6666, 21312321, 654, 403, 405];
const numberToCompare = -403;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > numberToCompare && numbers[index] % 2 == 0 && numbers[index] > 0) {
        console.log(numbers[index]);
    }
    
}