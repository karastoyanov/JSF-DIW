/*DTYPES01-015: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first 
characters from each name, minus the sum of the character codes from the last 
characters from each name. Print the fourth variable on the console. */
let firstName = 'Georgi';
let middleName = 'Dimitrov';
let lastName = 'Balabanov';
let sumOfCharCodes = (firstName.charCodeAt(0) + middleName.charCodeAt(0) + lastName.charCodeAt(0)) - (firstName.slice(-1).charCodeAt(0) + middleName.slice(-1).charCodeAt(0) + lastName.slice(-1).charCodeAt(0));
console.log(sumOfCharCodes)
