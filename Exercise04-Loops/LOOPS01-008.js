//  LOOPS01-008: Write a program to calculate the mathematical function factorial of a given number n.

let myNum = 0;
let factorial = 1;
if(myNum < 0) {
    console.log(`${myNum} is number lower than zero! Factorial can't be calculated`)
}

for (let i = myNum; i>=1; i--) {
    
    factorial *= i;
}
console.log(factorial);