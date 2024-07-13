let firstName = "Asen";
let secondName = "Asenov";
let lastName = "Petrov";

let firstNameFirstCharValue = firstName.charCodeAt(0);
let secondNameFirstCharValue = secondName.charCodeAt(0);
let lastNameFirstCharValue = lastName.charCodeAt(0);

console.log(firstNameFirstCharValue);
console.log(secondNameFirstCharValue);
console.log(lastNameFirstCharValue);

let totalFirstCharValue = firstNameFirstCharValue + secondNameFirstCharValue + lastNameFirstCharValue;

console.log(`First name: ${firstName}`);
console.log(`Second name: ${secondName}`);
console.log(`Last name: ${lastName}`);
console.log(`Value of first chars of 3 names: ${totalFirstCharValue}`);
