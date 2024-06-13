/*  DTYPES01-020: Print all even numbers from the string: The number 28469 is not so big.
    Hint 1: Check the remainder of integer division by two. Hint 2: Use the ternary operator.
*/

let theString = 'The number 38469 is not so big';

let theNumber = theString.substring(11,16);
console.log(theNumber);

theNumber[0] % 2 == 0 ? console.log(theNumber[0]) : console.log(`${theNumber[0]} is not an even number!`);
theNumber[1] % 2 == 0 ? console.log(theNumber[1]) : console.log(`${theNumber[1]} is not an even number!`);
theNumber[2] % 2 == 0 ? console.log(theNumber[2]) : console.log(`${theNumber[2]} is not an even number!`);
theNumber[3] % 2 == 0 ? console.log(theNumber[3]) : console.log(`${theNumber[3]} is not an even number!`);
theNumber[4] % 2 == 0 ? console.log(theNumber[4]) : console.log(`${theNumber[4]} is not an even number!`);