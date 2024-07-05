/*
Write a function that takes a number as an argument and returns: 
• “Fizz” if the number is divisible by 3 
• “Buzz” if the number is divisible by 5 
• “FizzBuzz” if the number is divisible by both 3 and 5 
• The number itself if it is divisible by neither 
*/

function num(n) {
    if (n % 3 == 0 && n % 5 != 0) {
        return ("Fizz");
    } else if (n % 5 == 0 && n % 3 != 0) {
        return ("Buzz");
    } else if (n % 3 == 0 && n % 5 == 0) {
        return ("FizzBuzz");
    } else if (n % 3 != 0 && n % 5 != 0) {
        return n;
    }
}
console.log(num(10));