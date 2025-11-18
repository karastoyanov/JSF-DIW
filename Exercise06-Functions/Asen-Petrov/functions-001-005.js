//Write a function that takes a number as an argument and returns the sum of its digits.

let number = 123456789;
let sum = 0;

function sumDiggits(a){

    let arrayDiggits = a.toString().split("");
    for (let index = 0; index < arrayDiggits.length; index++) {
        let currentNum = Number(arrayDiggits[index]);
        sum += currentNum;
        
    }
    return sum;
}

console.log(sumDiggits(number));