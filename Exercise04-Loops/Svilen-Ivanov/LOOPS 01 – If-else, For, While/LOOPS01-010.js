/*
LOOPS01-010: Write a program to check if a given number is prime (divisible only by 1 and
itself).
*/

let number = 22;

for (let i = 2; i <= number; i++) {
    if (number % i == 0 && i < number) {
        console.log (`The number ${number} is not prime.`)
        break; 
    } else if ( i = number) 
    {
        console.log (`The number ${number} is prime.`);
        break;
    }
}

//not entirely sure why this one works but it works :)