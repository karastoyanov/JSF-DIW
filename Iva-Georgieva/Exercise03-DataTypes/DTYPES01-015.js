/* Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the 
second characters from each name, minus the sum of the character codes from the 
characters before last from each name. Print the fourth variable on the console. */

let firstName = "Iva";
let middleName = "Georgieva";
let familyName = "Georgieva";
let sumName = ((familyName.charCodeAt(1))+(middleName.charCodeAt(1))+(familyName.charCodeAt(1))) - ((familyName.charCodeAt(7))+(middleName.charCodeAt(7))+(familyName.charCodeAt(7)));
console.log(sumName);

