/**
 * DTYPES01-010: Define four string variables with your three names (first, middle and family). 
  The fourth variable initialize with the concatenation of the first characters (capitalize 
  them) from each name plus the concatenation in reverse order (again capital letters). 
  Print the fourth variable on the console.
 */

let first = 'Stoyan';
let middle = 'Lyubomirov';
let last = 'stoykov';

let string = `${first.charAt(0).toUpperCase() + 
  first.slice(1).split('').reverse().join('')}-${middle.charAt(0).toUpperCase() + 
    middle.slice(1).split('').reverse().join('')}-${last.charAt(0).toUpperCase() + 
      last.slice(1).split('').reverse().join('')}`;

console.log(string);