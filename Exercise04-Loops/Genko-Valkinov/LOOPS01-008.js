// LOOPS01-008: Write a program to calculate the mathematical function factorial of a given 
// number n.
// 0! = 1
// 1! = 1
// 2! = 1 . 2
// 3! = 1 . 2 . 3
// n! = 1 . 2 . 3 . ……. . n

let n = 4;

const factorial = input => {
    let currentFactorial = 1;
    for(let i=2; i<=input; i++){
        currentFactorial = currentFactorial * i;
    }
    return currentFactorial;
}

console.log(factorial(n));