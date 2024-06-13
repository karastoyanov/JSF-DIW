
/*
DTYPES01-020: Print all even (четни) numbers from the string:
The number 28469 is not so big.
Hint 1: Check the remainder of integer division by two.
Hint 2: Use the ternary operator.
*/

let number = '28469';

Number(number[0]) % 2 == 0 ? console.log(Number(number[0])) : false;
Number(number[1]) % 2 == 0 ? console.log(Number(number[1])) : false;
Number(number[2]) % 2 == 0 ? console.log(Number(number[2])) : false;
Number(number[3]) % 2 == 0 ? console.log(Number(number[3])) : false;
Number(number[4]) % 2 == 0 ? console.log(Number(number[4])) : false;