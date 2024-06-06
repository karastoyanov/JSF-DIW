let firstName = "Asen";
let secondName = "Asenov";
let lastName = "Petrov";
let totalLastChars;

let firstNameLastCharValue = firstName.charCodeAt(firstName.length-1);
let secondNameLastCharValue = secondName.charCodeAt(secondName.length-1);
let lastNameLastCharValue = secondName.charCodeAt(secondName.length-1);

totalLastChars = firstNameLastCharValue + secondNameLastCharValue + lastNameLastCharValue;
console.log(`My name is ${firstName} ${secondName} ${lastName}. Sum of last chars is ${totalLastChars}`);

