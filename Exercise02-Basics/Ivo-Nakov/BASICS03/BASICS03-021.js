/*
BASICS03-021
Are there any not correctly defined expressions in the following excerpt?
If any – which one(s)? Why?
*/

let a = 1;
let b = a;
let r1 = a+--b;
let r2 = a+++b; // Attempts to increment a and then add b. Should be "a++ + b"
let r3 = a---b; // Attempts to decrement a and then subtract b. Should be "a-- - b"
let r4 = a-++b;
let r5 = a*++b;
let r6 = a*--b;
let r7 = a**++b*b; // Missing parentheses. Should be "a ** (++b * b)"
let r8 = a**++b//b; // Missing parentheses and has an extra / commenting the last b. Should be "a ** (++b / b)"