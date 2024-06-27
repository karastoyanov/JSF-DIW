/*
DTYPES01-012: Define three string variables with your three names (first, middle and family).
Declare a fourth variable. Initialize it with the sum of the character codes from the last
characters from each name. Print all variables with appropriate text on the console.
*/

let firstName = 'Ivan';
let middleName = 'Georgiev';
let lastName = 'Vazov';
let init = firstName.charCodeAt(firstName.length - 1) + middleName.charCodeAt(middleName.length - 1) + lastName.charCodeAt(lastName.length - 1);

console.log(`First name is ${firstName}, middle name is ${middleName}, last name is ${lastName}, the sum of the character codes from the last characters from each name is ${init}`);