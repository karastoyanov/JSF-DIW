/*Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first
characters from each name, minus the sum of the character codes from the last 
characters from each name. Print the fourth variable on the console*/

let firstName = `Svetlin`; 
let secondName = `Ivov`;
let lastName = `Trayanski`;

let sum = (firstName.charCodeAt(0) + secondName.charCodeAt(0) + lastName.charCodeAt(0))
                                            - 
          (firstName.charCodeAt(6) + secondName.charCodeAt(3) + lastName.charCodeAt(8))

console.log(sum)