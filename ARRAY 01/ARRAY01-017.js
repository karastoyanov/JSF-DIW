/*
ARRAY01-017: Find the first n-elements from Fibonacci sequence, having the first two
elements 1 and 1, and every sequential element is the sum from the previous two. Put
the elements in an array. Find their sum.
*/

let numberOfMembers = 11;
let number = 1;
let sum = 0;

const arr = [1, 1]

for (let i = 1; i < numberOfMembers - 1; i++) {
    number += arr[i - 1];
    arr.push(number);
}
console.log(`The first ${numberOfMembers} members in the Fibonacci sequence are ${arr}`);

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(`The sum of the first ${numberOfMembers} members in the Fibonacci sequence is ${sum}`);