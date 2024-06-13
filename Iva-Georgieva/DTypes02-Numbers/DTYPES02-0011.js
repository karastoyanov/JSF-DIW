/* What will be the result, if you convert an empty string variable to Boolean and 
one more time convert the result to number? Print the result on the console. */

let emptyString = "";
let convert1 = Boolean(emptyString);
let convert2 = Number(convert1);

console.log(convert1);
console.log(convert2);