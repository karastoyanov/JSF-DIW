// LOOPS01-010: Write a program to check if a given number is prime (divisible only by 1 and itself).

let givenNum = 11;

for (let i = 2; i < givenNum; i++) {
    if (givenNum % i == 0) {

        console.log(`the number ${givenNum} is not prime number!`);
    } else {

        console.log(`${givenNum} is prime number!`)
    }
}