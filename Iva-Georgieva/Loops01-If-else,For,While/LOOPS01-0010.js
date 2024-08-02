// LOOPS01-010: Write a program to check if a given number is prime (divisible only by 1 and itself).

let primeCheck = 9;


if (primeCheck === 2 || primeCheck === 3) {
    console.log(primeCheck, `is a Prime Number`);

} else {
    if (primeCheck % 2 == 0) {
        console.log(`${primeCheck} is NOT a Prime Number`);

    } else if (primeCheck % 3 == 0) {
        console.log(`${primeCheck} is NOT a Prime Number`);

    } else if (primeCheck % primeCheck == 0) {
        console.log(`${primeCheck} is a Prime Number`);
    }
}