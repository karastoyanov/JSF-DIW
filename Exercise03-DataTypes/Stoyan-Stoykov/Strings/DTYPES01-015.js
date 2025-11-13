/**
 * DTYPES01-015: Define three string variables with your three names (first, middle and family). 
    Declare a fourth variable. Initialize it with the sum of the character codes from the 
    second characters from each name, minus the sum of the character codes from the 
    characters before last from each name. Print the fourth variable on the console.
 */

let first = 'Stoyan';
let middle = 'Lyubomirov';
let last = 'Stoykov';

let firstSum = first[1].charCodeAt(0) - first.at(-1).charCodeAt(0);
let middleSum = middle[1].charCodeAt(0) - middle.at(-1).charCodeAt(0);
let lastSum = last[1].charCodeAt(0) - last.at(-1).charCodeAt(0);

let sumLastCharacters = firstSum + middleSum + lastSum;

console.log(firstSum, middleSum, lastSum);
console.log(sumLastCharacters);
