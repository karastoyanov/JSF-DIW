
/*
DTYPES01-015: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the 
second characters from each name, minus the sum of the character codes from the 
characters before last from each name. Print the fourth variable on the console.
*/
let fstName = 'Martin';
let midName = 'Stoyanov';
let famName = 'Zhivkov';
let sumChar = (fstName.charCodeAt(1) + midName.charCodeAt(1) + famName.charCodeAt(1))-
(fstName.at(-2).charCodeAt(0) + midName.at(-2).charCodeAt(0) + famName.at(-2).charCodeAt(0));

console.log(`The sum of the unicode values for the second letters of my first, middle and last name minus
the sum of the unicode values for the before last letters of my first, middle and last name is ${sumChar}.`);