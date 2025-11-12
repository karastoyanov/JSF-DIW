/* What will be the result, if you convert an empty string variable to Boolean and 
one more time convert the result to number? Print the result on the console. */

let firstValue = "";
let secondValue = Boolean(firstValue);
let thirdValue = Number(secondValue);

console.log(firstValue);
console.log(secondValue);
console.log(thirdValue);
