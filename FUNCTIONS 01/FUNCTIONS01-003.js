/*
FUNCTIONS01-003: Write a function that takes a number as an argument and returns:
• “Fizz” if the number is divisible by 3
• “Buzz” if the number is divisible by 5
• “FizzBuzz” if the number is divisible by both 3 and 5
• The number itself if it is divisible by neither
*/


function fizzbuzz(x) {
    if (x % 15 == 0) {
        console.log(`FizzBuzz`);
    }
    else if (x % 3 ==0) {
        console.log(`Fizz`);
    }
    else if (x % 5 == 0) {
        console.log(`Buzz`);
    }
    else {
        console.log(`The number itself if it is divisible by neither`)
    }
    return;
}

fizzbuzz(31);