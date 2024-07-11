//Write a program to calculate the mathematical function factorial of a given number n

let num = 10;
let result = 1;

if(num > 0){

for (let index = num; index > 0; index--) {
result *= index;
        }
console.log(result);
}

