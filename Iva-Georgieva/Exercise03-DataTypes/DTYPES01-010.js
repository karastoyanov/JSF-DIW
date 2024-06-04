/* Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters (capitalize
them) from each name plus the concatenation in reverse order (again capital letters). 
Print the fourth variable on the console */


let firstName = "Iva";
let middleName = "Georgieva";
let familyName = "Georgieva";
let fullName = `${firstName.charAt(0)}${middleName.charAt(0)}${familyName.charAt(0)}+${familyName.charAt(0)}${middleName.charAt(0)}${firstName.charAt(0)}`;

console.log(fullName.toUpperCase())

