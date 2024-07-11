/*
Write a function that takes a number as an argument and returns the sum of its digits. 
*/

function num(n) {
    let numToString = n.toString().split('');
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
        // console.log(sum);
    }
    return sum;
}
console.log(num(501));