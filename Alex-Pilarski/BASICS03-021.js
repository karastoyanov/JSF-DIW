// Are there any not correctly defined expressions in the following excerpt? If any – which one(s)? Why?

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

/*
let r2 = a+++b;: This expression is incorrectly defined. ++ operator is incorrect

let r3 = a---b;: This expression is incorrectly defined. -- operator is incorrect

let r8 = a**++b//b;: This expression is incorrectly defined becase of misplaced comment symbol (//).
*/
