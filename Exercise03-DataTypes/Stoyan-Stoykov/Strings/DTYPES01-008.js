/**
    DTYPES01-008: Define four string variables with your three names (first, middle and family). 
    The fourth variable initialize with the concatenation of the first characters from each 
    name. Print the fourth variable on the console.
 */
let first = 'Stoyan';
let middle = 'Lyubomirov';
let last = 'Stoykov';

let string = `${first.charAt(0)}-${middle.charAt(0)}-${last.charAt(0)}`;

console.log(string);