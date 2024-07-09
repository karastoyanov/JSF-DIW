/*
FUNCTIONS01-003: Write a function that takes a number as an argument and returns:
• “Fizz” if the number is divisible by 3
• “Buzz” if the number is divisible by 5
• “FizzBuzz” if the number is divisible by both 3 and 5
• The number itself if it is divisible by neither
*/

function checkThem(b){

    if(b % 3 == 0 && b % 5 == 0) {
        return("FizzBuzz");
        
    }else if (b % 3 == 0) {

        return("Fizz");
    }else if (b % 5 == 0){
        console.log("Buzz")

    }else{
        return b;
    }
}
console.log(checkThem(15));