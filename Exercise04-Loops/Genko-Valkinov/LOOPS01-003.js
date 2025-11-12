// LOOPS01-003: There are given two variables initialized with numbers. Write a program to 
// determine which one is the greater

let firstNumber = 9
let secondNumber = 17;

if(firstNumber > secondNumber){
    console.log(`${firstNumber} is greater than ${secondNumber}`);
}else if(firstNumber < secondNumber){
    console.log(`${secondNumber} is greater than ${firstNumber}`);
}else {
    console.log(`${firstNumber} and ${secondNumber} are equal.`)
}