/**
    DTYPES01-007: Define four string variables with your three names (first, middle and family). 
    The fourth variable initialize with all names, separated with a dash “-“ character. Make 
    sure that only the first letter of each name is capital, all other letters are lowercase. Print 
    on the console the length of each string.
 */

let first = 'stoyan';
let middle = 'Lyubomirov';
let last = 'sTOykov';

const capitalize = s => String(s).charAt(0).toUpperCase() + String(s).slice(1).toLowerCase();

let fullName = `${capitalize(first)}-${capitalize(middle)}-${capitalize(last)}`;

console.log(fullName);