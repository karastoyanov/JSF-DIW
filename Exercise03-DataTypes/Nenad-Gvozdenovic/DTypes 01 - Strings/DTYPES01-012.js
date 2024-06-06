/* 
DTYPES01-012: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the last 
characters from each name. Print all variables with appropriate text on the console.
*/

let firstName = 'Nenad';
let middleName = 'NG';
let lastName = 'Gvozdenovic';
let sumOfCharCodes = firstName.slice(-1).charCodeAt(0) + middleName.slice(-1).charCodeAt(0) + lastName.slice(-1).charCodeAt(0);

console.log(`The code of last charcter in my name ${firstName} is [${firstName.slice(-1).charCodeAt(0)}]`);
console.log(`The code of last charcter in my middle name ${middleName} is [${middleName.slice(-1).charCodeAt(0)}]`);
console.log(`The code of last charcter in my last name ${lastName} is [${lastName.slice(-1).charCodeAt(0)}]`);
console.log(`Sum of last characters codes of full name ${firstName} ${middleName} ${lastName} is [${sumOfCharCodes}]`)