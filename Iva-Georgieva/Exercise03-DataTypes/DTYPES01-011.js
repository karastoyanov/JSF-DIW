/* Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first 
characters from each name. Print all variables with appropriate text on the console. */

let firstName = "Iva".charCodeAt(0);
let middleName = "Georgieva".charCodeAt(0);
let familyName = "Georgieva".charCodeAt(0);
let sumChar = `${(firstName + middleName + familyName)}`;

console.log(sumChar);
