/*There are given two variables initialized with numbers. Write a program to 
determine which one is the greater*/

let numA = 5;
let numB = 6;

if(numA - numB > 0){
    console.log(`First number is bigger than second number.`)
} else if(numA - numB < 0){
    console.log(`Second number is bigger than first number.`)
} else{
    console.log(`Both numbers are equal.`)
}