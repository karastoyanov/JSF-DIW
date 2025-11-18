 // Are there any not correctly defined expressions in the following excerpt? If any – which one(s)? Why?

let a = 1;
let b = a;
let r1 = a+--b;
let r2 = a+++b; // incorrect use of the ++ operator, it is confusing if it is used for a or b (increment of a or b)
let r3 = a---b; // same case like the ++ operator above
let r4 = a-++b;
let r5 = a*++b;
let r6 = a*--b;
let r7 = a**++b*b;
let r8 = a**++b //b // I am not sure why the b is a comment here, but this looks like a syntax error with the / operator