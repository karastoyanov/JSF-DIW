// FUNCTIONS01-003: Write a function that takes a number as an argument and returns:
// • “Fizz” if the number is divisible by 3
// • “Buzz” if the number is divisible by 5
// • “FizzBuzz” if the number is divisible by both 3 and 5
// • The number itself if it is divisible by neither

const fizzBuzz = number => number % 3 === 0 && number % 5 === 0 ? `FizzBuzz` : number % 3 === 0 ? `Fizz` : number % 5 === 0 ? 'Buzz' : number

console.log(fizzBuzz(2));
