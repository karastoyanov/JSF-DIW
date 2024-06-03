/*DTYPES01-011: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first 
characters from each name. Print all variables with appropriate text on the console. */
let firstName = 'Georgi';
let middleName = 'Dimitrov';
let lastName = 'Balabanov';
let sumOfCharCodes = firstName.charCodeAt(0) + middleName.charCodeAt(0) + lastName.charCodeAt(0);



console.log(`Charcter code for first letter of my name ${firstName} is [${firstName.charCodeAt(0)}]`);
console.log(`Charcter code for first letter of my middle name ${middleName} is [${middleName.charCodeAt(0)}]`);
console.log(`Charcter code for first letter of my last name ${lastName} is [${lastName.charCodeAt(0)}]`);
console.log(`Sum of first characters of my full name ${firstName} ${middleName} ${lastName} is [${sumOfCharCodes}]`)