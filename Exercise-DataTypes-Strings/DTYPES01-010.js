/*Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters (capitalize 
them) from each name plus the concatenation in reverse order (again capital letters). 
Print the fourth variable on the console. */

let firstName = `Svetlin`;
let secondName = `Ivov`;
let lastName = `Trayanski`;

let initials = `${lastName.charAt(0)}. ${secondName.charAt(0)}. ${firstName.charAt(0)}.`;

console.log(initials)