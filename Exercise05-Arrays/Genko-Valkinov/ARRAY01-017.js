// ARRAY01-017: Find the first n-elements from Fibonacci sequence, having the first two 
// elements 1 and 1, and every sequential element is the sum from the previous two. Put 
// the elements in an array. Find their sum.


const makeFibonacciArray = n => {
    let oldPrev = 0;
    let newPrev = 1;
    let fibonacciArray = [1];

    for(let i=2; i<n; i++){
        const next = oldPrev + newPrev;
        fibonacciArray.push(oldPrev + newPrev);
        oldPrev = newPrev;
        newPrev = next;
    }

    return fibonacciArray;
}

const sumFibonacciArray = n => makeFibonacciArray(n).reduce((acc, cur) => acc += cur, 0);

console.log(makeFibonacciArray(10));
console.log(sumFibonacciArray(10));