// LOOPS01-010: Write a program to check if a given number is prime (divisible only by 1 and 
// itself).

const number = 9;

const isPrimeNumber = input => {
    for (let i = 2; i < input; i++) {
        if (input % i === 0) {
            return `${input} is not a prime number`
        }
    }
    return `${input} is prime number`
}

console.log(isPrimeNumber(number));