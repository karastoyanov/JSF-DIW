// What will be the result, if you convert an empty string variable to Boolean and 
// one more time convert the result to number? Print the result on the console.

let str = "";
let boo = Boolean(str);
let num = Number(boo);

console.log(boo, ",", num);