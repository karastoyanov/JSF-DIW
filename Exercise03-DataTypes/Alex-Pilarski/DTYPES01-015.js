/* Define three string variables with your three names (first, middle and family).
Declare a fourth variable. Initialize it with the sum of the character codes from the
second characters from each name, minus the sum of the character codes from the
characters before last from each name. Print the fourth variable on the console. */

let firstName = 'Alexander';
let middleName = 'Plamenov';
let lastName = 'Pilarski';

let sum = (firstName.charCodeAt(1) + middleName.charCodeAt(1) + lastName.charCodeAt(1)) - 
          (firstName.charCodeAt(firstName.length - 2) + 
           middleName.charCodeAt(middleName.length - 2) + 
           lastName.charCodeAt(lastName.length - 2));

console.log(sum);
