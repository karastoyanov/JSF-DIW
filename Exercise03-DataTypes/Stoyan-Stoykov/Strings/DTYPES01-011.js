/**
 * DTYPES01-011: Define three string variables with your three names (first, middle and family). 
  Declare a fourth variable. Initialize it with the sum of the character codes from the first 
  characters from each name. Print all variables with appropriate text on the console.
 */

let first = 'Stoyan';
let middle = 'Lyubomirov';
let last = 'Stoykov';

let sumFirstCharacters = first.charAt(0).charCodeAt(0) + middle.charAt(0).charCodeAt(0) + last.charAt(0).charCodeAt(0);

console.log(first.charAt(0).charCodeAt(0), middle.charAt(0).charCodeAt(0), last.charAt(0).charCodeAt(0));
console.log(sumFirstCharacters);