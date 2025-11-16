"use strict"
/*
FUNCTIONS01-003: Write a function that takes a number as an argument and returns:
• “Fizz” if the number is divisible by 3
• “Buzz” if the number is divisible by 5
• “FizzBuzz” if the number is divisible by both 3 and 5
• The number itself if it is divisible by neither
*/

function Division(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz');
    } else if (num % 3 === 0) {
        console.log('Fizz');
    } else if (num % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(num)
    }
}

Division(15);
Division(3);
Division(5);
Division(7);