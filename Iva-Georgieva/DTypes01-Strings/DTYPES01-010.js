/* Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters (capitalize
them) from each name plus the concatenation in reverse order (again capital letters). 
Print the fourth variable on the console */


let firstName = "Iva".charAt(0);
let middleName = "Georgieva".charAt(0);
let familyName = "Georgieva".charAt(0);
let fullName = `${firstName}${middleName}${familyName}+${familyName}${middleName}${firstName}`;

console.log(fullName);

