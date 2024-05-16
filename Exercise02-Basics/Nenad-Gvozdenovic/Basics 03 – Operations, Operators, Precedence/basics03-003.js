/*
BASICS03-003: Declare four variables. On two of them assign integer numbers. The third set 
with the division reminder. The fourth one set with the quotient (chastnoto -> cialata chast ot deleneto). Print on 
the console the four variables with appropriate description.
*/

let a = 22;
let b = 7;
let quotient = Math.floor(a/b);
let remainder = a % b;

console.log(a+" is the dividend"+","+b+" is the divisior"+","+quotient+" is the quotient"+","+"and "+remainder+" is the remainder")