/*Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters from each 
name. Print the fourth variable on the console*/

let firstName = `Svetlin`;
let secondName = `Ivov`;
let lastName = `Trayanski`;

let initials = `${firstName.charAt(0)} ${secondName.charAt(0)} ${lastName.charAt(0)}`;

console.log(initials)