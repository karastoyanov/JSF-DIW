/*Write a program to check if a given number is prime (divisible only by 1 and
itself).*/

let num = 5;
let prime = true;

prime = prime && (num > 1 && Number.isInteger(num))

for (let i = 2; i <= Math.sqrt(num) && prime; i++){
    prime = num % i !== 0;
}
if (prime = true){
    result = `is prime`
}
else {
    result = `is not prime`
}
console.log(`${num} ${result}`)