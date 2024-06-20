/*
What will be the result, if you convert an empty string variable to Boolean and 
one more time convert the result to number? Print the result on the console. 
*/

let bool = Boolean("");
let num = Number(bool);

console.log(num);

// empty string equals boolean false, false equals number 0