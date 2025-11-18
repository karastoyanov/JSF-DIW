/**
 * DTYPES01-009: Define four string variables with your three names (first, middle and family). 
    The fourth variable initialize with the concatenation of the first characters from each 
    name (capitalize them), separated with a dot “.” character. Print the fourth variable on 
    the console
 */

let first = 'Stoyan';
let middle = 'Lyubomirov';
let last = 'stoykov';

let string = `${first.charAt(0).toUpperCase()}.${middle.charAt(0).toUpperCase()}.${last.charAt(0).toUpperCase()}`;

console.log(string);