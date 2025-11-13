/**
 * DTYPES01-013: Define three string variables with your three names (first, middle and family). 
    Declare a fourth variable. Initialize it with the sum of the character codes from the first
    characters from each name, minus the sum of the character codes from the last 
    characters from each name. Print the fourth variable on the console.
 */

let first = 'Stoyan';
let middle = 'Lyubomirov';
let last = 'Stoykov';

let firstSum = first.charAt(0).charCodeAt(0) - first.charAt(first.length - 1).charCodeAt(0);
let middleSum = middle.charAt(0).charCodeAt(0) - middle.charAt(middle.length - 1).charCodeAt(0);
let lastSum = last.charAt(0).charCodeAt(0) - last.charAt(last.length - 1).charCodeAt(0);

let sumLastCharacters = firstSum + middleSum + lastSum;

console.log(firstSum, middleSum, lastSum);
console.log(sumLastCharacters);