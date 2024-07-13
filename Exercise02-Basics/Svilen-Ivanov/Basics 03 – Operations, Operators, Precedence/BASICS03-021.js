/*
BASICS03-021: Are there any not correctly defined expressions in the following excerpt? If
any – which one(s)? Why?
*/

let a = 1;
let b = a;
let r1 = a+--b;
let r2 = a+++b;
let r3 = a---b;
let r4 = a-++b;
let r5 = a*++b;
let r6 = a*--b;
let r7 = a**++b*b;
let r8 = a**++b//b;


//r8 is wrong because of the // which indicates comment and is not escaped
//r7 is wrong because there is no ** operator

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
console.log(r6);