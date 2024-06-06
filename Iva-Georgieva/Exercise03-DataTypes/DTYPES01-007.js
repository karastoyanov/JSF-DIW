/* Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with all names, separated with a dash “-“ character. Make 
sure that only the first letter of each name is capital, all other letters are lowercase. Print 
on the console the length of each string. */

let firstName = "Iva";
let middleName = "Georgieva";
let familyName = "Georgieva";
let fullName = `${firstName.charAt(1).toUpperCase()}\-${middleName}\-${familyName}`;



console.log(firstName.length, firstName);
console.log(middleName.length);
console.log(familyName.length);
console.log(fullName.length, fullName);