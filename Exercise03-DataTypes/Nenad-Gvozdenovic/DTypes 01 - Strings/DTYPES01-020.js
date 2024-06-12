/*
DTYPES01-020: 
Print all even (chetni) numbers from the string:
The number 28469 is not so big.
Hint 1: Check the remainder of integer division by two.
Hint 2: Use the ternary operator. 
*/

const TEXT ='The number 28469 is not so big.';

let numbers = TEXT.substring(11,16);

numbers[0] % 2 == 0 ? console.log(numbers[0]):'';
numbers[1] % 2 == 0 ? console.log(numbers[1]):'';
numbers[2] % 2 == 0 ? console.log(numbers[2]):'';
numbers[3] % 2 == 0 ? console.log(numbers[3]):'';
numbers[4] % 2 == 0 ? console.log(numbers[4]):'';