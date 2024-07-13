/*
BASICS03-003: Declare four variables. On two of them assign integer numbers. The third set
with the division reminder. The fourth one set with the quotient (частното -> цялата
част от делението). Print on the console the four variables with appropriate
description
*/
let a = 9;
let b = 4;
let c = a % b;
let d = Math.trunc(a / b)

console.log("The divident is", a);
console.log("The divisor is", b);
console.log("The remainder is", c);
console.log("The quotient is", d);