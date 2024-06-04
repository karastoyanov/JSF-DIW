let firstName = "asen";
let secondName = "asenov";
let lastName = "petrov";

let concatNames = `${firstName.charAt(0).toUpperCase()}${secondName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}${firstName.charAt(firstName.length-1).toUpperCase()}${secondName.charAt(secondName.length-1).toUpperCase()}${lastName.charAt(lastName.length-1).toUpperCase()}`
console.log(concatNames);