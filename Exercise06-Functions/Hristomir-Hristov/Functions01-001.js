/*
 Write a function that takes two numbers as arguments and returns the largest of them. 
 */

function compareNum(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return [a, b];
    }
} 
console.log(compareNum(7, 4));