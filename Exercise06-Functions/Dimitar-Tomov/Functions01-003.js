/*FUNCTIONS01-003: Write a function that takes a number as an argument and returns: 
• “Fizz” if the number is divisible by 3 
• “Buzz” if the number is divisible by 5 
• “FizzBuzz” if the number is divisible by both 3 and 5 
• The number itself if it is divisible by neither*/

function fizzBuzz(a) {
    if (a % 3 == 0 && a % 5 == 0) {
        return "fizzBuzz";
    } else if (a % 5 == 0) {
        return "Buzz";
    } else if (a % 3 == 0) {
        return "fizz";
    } else return a;
}
console.log(fizzBuzz(15));