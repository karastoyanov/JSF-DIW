// Write a program to check if a given number is prime (divisible only by 1 and itself).

let number = 5;
let prime = false;
for (let index = 2; index < number; index++){
    if (number % index == 0) {
        prime = true;
        break;
    }
   
}

if (prime) {
    console.log(`Number ${number} is NOT prime`)
} else{
    console.log(`Number ${number} is prime`)
}