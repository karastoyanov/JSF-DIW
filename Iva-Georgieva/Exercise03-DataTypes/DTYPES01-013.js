/* : Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first
characters from each name, minus the sum of the character codes from the last 
characters from each name. Print the fourth variable on the console. */

let firstName = "Iva";
let middleName = "Georgieva";
let familyName = "Georgieva";
let fullName = ((familyName.charCodeAt(0))+(middleName.charCodeAt(0))+(familyName.charCodeAt(0))) - ((familyName.charCodeAt(2))+(middleName.charCodeAt(8))+(familyName.charCodeAt(8)));

console.log(fullName)