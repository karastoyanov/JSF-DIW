/*Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the 
second characters from each name, minus the sum of the character codes from the 
characters before last from each name. Print the fourth variable on the console. */

let firstName = `Svetlin`; 
let secondName = `Ivov`;
let lastName = `Trayanski`;

let sum = (firstName.charCodeAt(1) + secondName.charCodeAt(1) + lastName.charCodeAt(1))
                                            - 
          (firstName.charCodeAt(6) + secondName.charCodeAt(3) + lastName.charCodeAt(8))

console.log(sum)