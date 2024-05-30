/* DTYPES01-012: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the last 
characters from each name. Print all variables with appropriate text on the console.*/
let firstName = 'Georgi';
let middleName = 'Dimitrov';
let lastName = 'Balabanov';
let sumOfCharCodes = firstName.slice(-1).charCodeAt(0) + middleName.slice(-1).charCodeAt(0) + lastName.slice(-1).charCodeAt(0);
console.log(`Charcter code for last letter of my name ${firstName} is [${firstName.slice(-1).charCodeAt(0)}]`);
console.log(`Charcter code for last letter of my middle name ${middleName} is [${middleName.slice(-1).charCodeAt(0)}]`);
console.log(`Charcter code for last letter of my last name ${lastName} is [${lastName.slice(-1).charCodeAt(0)}]`);
console.log(`Sum of last characters of my full name ${firstName} ${middleName} ${lastName} is [${sumOfCharCodes}]`)