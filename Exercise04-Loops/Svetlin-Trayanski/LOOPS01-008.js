/*Write a program to calculate the mathematical function factorial of a given
number n.*/

let n = 55;

if (n < 0) {
    console.log(`${n} is negative.`);
}
let result = 1;
for (let i = 1; i <= n; i++){
    result *= i;
}
console.log(result);