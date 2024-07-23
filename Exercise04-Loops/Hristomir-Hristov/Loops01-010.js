/*
Write a program to check if a given number is prime (divisible only by 1 and itself).
*/

let num = 7;
if (num <= 1)
    return console.log(`${num} is less or equal to 1`);
if (num == 2 || num == 3)
    return console.log(`${num} is a prime number`);
if (num % 2 == 0 || num % 3 == 0)
    return console.log(`${num} is not a prime number`);
else if (num / 1 === num && num / num === 1) {
    return console.log(`${num} is a prime number.`);
}
