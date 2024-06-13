/* Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the last 
characters from each name. Print all variables with appropriate text on the console. */

let firstName = "Iva".charCodeAt(2);
let middleName = "Georgieva".charCodeAt(8);
let familyName = "Georgieva".charCodeAt(8);
let sumChar = `${(firstName + middleName + familyName)}`;

console.log(sumChar);
