/**
 * BASICS03-021: Are there any not correctly defined expressions in the following excerpt? If 
    any – which one(s)? Why?
 */

let a = 1, b = a; // valid
let r1 = a + --b; // valid

// let r2 = a+++b; // invalid: '++' used incorrectly
// let r3 = a---b; // invalid: same reason

let r4 = a - ++b; // valid
let r5 = a * ++b; // valid
let r6 = a * --b; // valid
let r7 = a ** ++b * b; // valid
let r8 = a ** ++b; // valid

console.log(r1, r4, r5, r6, r7, r8);

a = 1, b = 3;
result = a ** ++b / b++ ** a;
console.log('a ** ++b / b++ ** a = ' + result);
// ++b = 4, b++ = 4 (then becomes 5), so:
// result = 1 ** 4 / 4 ** 1 = 1 / 4 = 0.25