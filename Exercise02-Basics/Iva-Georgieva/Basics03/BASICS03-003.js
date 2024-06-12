/* Declare four variables. On two of them assign integer numbers. The third set 
with the division remainder. The fourth one set with the quotient (частното -> цялата част от делението). 
Print on the console the four variables with appropriate description */

let inetegerNum1;
let inetegerNum2;
let divisionRemainder;
let quotient;

inetegerNum1 = 23;
inetegerNum2 = 11;
divisionRemainder = inetegerNum1 % inetegerNum2;
quotient = (inetegerNum1 / inetegerNum2) | 0;


console.log (inetegerNum1);
console.log (inetegerNum2);
console.log (divisionRemainder);                                 // 23 : 11 = 2 with remainder 1
console.log (quotient);                                          // was not sure how to do it - used google for help 
                

