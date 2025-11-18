// Write a program to check if a given number is prime (divisible only by 1 and itself).

let x = 1000000005721;
let prime = true;

if (x <= 1) {
    prime = false;
} else if (x % 2 === 0 && x % 3 === 0) {
    prime = false;
} else {
    for (let i = 2; i <= Math.sqrt(x); i++) { // 
        if (x % i === 0) {
            prime = false;
            break;
        }
    }
}

if (prime) {
    console.log(`${x} is a prime number.`);
} else {
    console.log(`${x} is NOT a prime number.`);
}
