/* Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters (capitalize
them) from each name plus the concatenation in reverse order (again capital letters). 
Print the fourth variable on the console */


let firstName = "Iva";
let middleName = "Georgieva";
let familyName = "Georgieva";
let fullName = `${firstName.toUpperCase().charAt(0)}${firstName.toUpperCase().at(-1)} ${middleName.toUpperCase().charAt(0)}${middleName.toUpperCase().at(-1)} ${familyName.toUpperCase().charAt(0)}${familyName.toUpperCase().at(-1)}`;

console.log(fullName);