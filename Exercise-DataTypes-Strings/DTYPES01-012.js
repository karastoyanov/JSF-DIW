/*Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the last 
characters from each name. Print all variables with appropriate text on the console.*/

let firstName = `Svetlin`; 
let secondName = `Ivov`;
let lastName = `Trayanski`;

let sum = firstName.charCodeAt(6) + secondName.charCodeAt(3) + lastName.charCodeAt(8)


console.log(`First Name: ${firstName}`)
console.log(`Second Name: ${secondName}`)
console.log(`Last Name: ${lastName}`)
console.log(`Sum of code: ${sum}`)