/*DTYPES01-008: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters from each 
name. Print the fourth variable on the console. */
let firstName = 'Georgi';
let middleName = 'Dimitrov';
let lastName = 'Balabanov';
let allFistLetters = firstName.substring(0, 1) + middleName.substring(0, 1) + lastName.substring(0, 1);
console.log(allFistLetters)