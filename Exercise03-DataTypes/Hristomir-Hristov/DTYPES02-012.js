/*
Multiply a variable (with nine digits, initialized with the sequential numbers from 1 to 9) from BigInt type with a variable, 
initialized as a number with value 2. Print the result on the console. 
*/

let bigNum = 123456789n;
let num = 2;

let result = Number(bigNum) * num;

console.log(result);

/* we need to convert the types, so that they are the same, otherwise, the script will fail
because JavaScript won't allow us to mix BigInt with other types
*/