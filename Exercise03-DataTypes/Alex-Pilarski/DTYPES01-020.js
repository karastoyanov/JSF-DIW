/* Print all even numbers from the string:
The number 28469 is not so big.
Hint 1: Check the remainder of integer division by two.
Hint 2: Use the ternary operator. */

let str = "The number 28469 is not so big.";
let num = str.match(/\d+/g);

num.forEach(number => {
    number.split('').forEach(digit => {
        (parseInt(digit) % 2 === 0) && console.log(parseInt(digit));
    });
});

