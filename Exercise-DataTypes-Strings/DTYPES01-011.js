/*Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first 
characters from each name. Print all variables with appropriate text on the console. */

let firstName = `Svetlin`;
let secondName = `Ivov`;
let lastName = `Trayanski`;

let initials = firstName.charCodeAt(0) + secondName.charCodeAt(0) + lastName.charCodeAt(0);

console.log(`First Name: ${firstName}`)
console.log(`Second Name: ${secondName}`)
console.log(`Last Name: ${lastName}`)
console.log(`Sum of code: ${initials}`)