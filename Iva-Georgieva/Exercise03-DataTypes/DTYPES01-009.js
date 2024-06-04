/* Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters from each 
name (capitalize them), separated with a dot “.” character. Print the fourth variable on 
the console. */

let firstName = "Iva";
let middleName = "Georgieva";
let familyName = "Georgieva";
let fullName = `${firstName.toUpperCase().charAt(0)}\.${middleName.toUpperCase().charAt(0)}\.${familyName.toUpperCase().charAt(0)}`;

console.log(fullName);