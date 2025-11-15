/*Write a function that takes a number as an argument and returns:
• “Fizz” if the number is divisible by 3
• “Buzz” if the number is divisible by 5
• “FizzBuzz” if the number is divisible by both 3 and 5
• The number itself if it is divisible by neither*/

let num = 15;

function checkNumber(a){

    if (a % 3 == 0 && a % 5 == 0) {
        return "FizzBuzz";
    } else if (a % 3 == 0){
        return "Fizz";
    } else if (a % 5 == 0){
        return "Buzz";
    } else{
        return a;
    }
}

console.log(checkNumber(num));