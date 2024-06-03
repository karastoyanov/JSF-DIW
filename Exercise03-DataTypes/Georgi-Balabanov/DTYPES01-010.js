/*DTYPES01-010: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters (capitalize 
them) from each name plus the concatenation in reverse order (again capital letters). 
Print the fourth variable on the console. */
let firstName = 'Georgi';
let middleName = 'Dimitrov';
let lastName = 'Balabanov';
let allFistLetters = (firstName.substring(0, 1) + middleName.substring(0, 1) + lastName.substring(0, 1)) +lastName.substring(0, 1) +middleName.substring(0, 1)+firstName.substring(0, 1);
console.log(allFistLetters.toUpperCase())