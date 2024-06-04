/* Declare three variables and assign them with three randomly selected integer 
numbers. Print on the console those two of them, which have the biggest sum. Hint: Use 
the ternary operators. */

let inetegerNum1;
let inetegerNum2;
let inetegerNum3;

inetegerNum1 = 7;
inetegerNum2 = 11;
inetegerNum3 = 5;

let sum1 = inetegerNum1 + inetegerNum2;
let sum2 = inetegerNum2 + inetegerNum3;
let sum3 = inetegerNum1 + inetegerNum3;


let result = (sum1 > sum2 && sum1 > sum3) ? console.log(inetegerNum1, inetegerNum2) : ((sum2 > sum3) ? console.log(inetegerNum2, inetegerNum3) : console.log(inetegerNum1, inetegerNum3));




