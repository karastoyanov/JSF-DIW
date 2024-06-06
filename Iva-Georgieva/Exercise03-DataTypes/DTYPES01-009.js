/* Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters from each 
name (capitalize them), separated with a dot “.” character. Print the fourth variable on 
the console. */

let firstName = "iva";
let middleName = "georgieva";
let familyName = "georgieva";
let fullName = `${firstName.charAt(0)}\.${middleName.charAt(0)}\.${familyName.charAt(0)}`;

console.log(fullName.toUpperCase());