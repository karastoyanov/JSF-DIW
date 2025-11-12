// DTYPES01-013: Define three string variables with your three names (first, middle and family). 
// Declare a fourth variable. Initialize it with the sum of the character codes from the first
// characters from each name, minus the sum of the character codes from the last 
// characters from each name. Print the fourth variable on the console.

let firstName = 'Genko';
let middleName = 'Petev';
let lastName = 'Valkinov';
let sum = (firstName.charCodeAt(0) + middleName.charCodeAt(0) + lastName.charCodeAt(0))
    - (firstName.charCodeAt(firstName.length - 1) + middleName.charCodeAt(middleName.length - 1) + lastName.charCodeAt(lastName.length - 1));

console.log(`Sum of the first characters minus the sum of the last characters is: ${sum}`);
