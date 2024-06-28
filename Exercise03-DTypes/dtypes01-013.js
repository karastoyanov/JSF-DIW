let firstName = "Asen";
let secondName = "Asenov";
let lastName = "Petrov";

let firstNameFirstCharValue = firstName.charCodeAt(0);
let secondNameFirstCharValue = secondName.charCodeAt(0);
let lastNameFirstCharValue = lastName.charCodeAt(0);
let resultFirstChars = firstNameFirstCharValue + secondNameFirstCharValue + lastNameFirstCharValue;

let firstNameLastCharValue = firstName.charCodeAt(firstName.length-1);
let secondNameLastCharValue = secondName.charCodeAt(secondName.length-1);
let lastNameLastCharValue = secondName.charCodeAt(secondName.length-1);
let resultLastChars = firstNameLastCharValue + secondNameLastCharValue + lastNameLastCharValue;

let result = resultFirstChars - resultLastChars;
console.log(result);
