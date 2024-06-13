
/*
Make a program to add one variable of type Number with a small value and one variable of type BigInt also with a small value. 
Print the type of the result and the result on the console. 
*/

let a = 6;
let b = 9n;

let x = a + Number(b);
console.log(typeof x);
console.log(x);