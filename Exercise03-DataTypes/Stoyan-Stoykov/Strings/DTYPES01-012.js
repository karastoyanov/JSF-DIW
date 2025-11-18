/**
 * DTYPES01-012: Define three string variables with your three names (first, middle and family). 
  Declare a fourth variable. Initialize it with the sum of the character codes from the last 
  characters from each name. Print all variables with appropriate text on the console
 */

let first = 'Stoyan';
let middle = 'Lyubomirov';
let last = 'Stoykov';

let sumLastCharacters = first.charAt(first.length - 1).charCodeAt(0) + middle.charAt(middle.length - 1).charCodeAt(0) + last.charAt(last.length - 1).charCodeAt(0);

console.log(first.charAt(
  first.length - 1).charCodeAt(0), 
  middle.charAt(middle.length - 1).charCodeAt(0), 
  last.charAt(last.length - 1).charCodeAt(0)
);
console.log(sumLastCharacters);