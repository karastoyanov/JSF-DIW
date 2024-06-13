/* What is the result of the following arithmetic operations:
1) NaN++
2) NaN - NaN
3) Infinity - Infinity
4) 5 - true
5) Boolean(true-true)*true */


let arOper1 = NaN++;
let arOper2 =  NaN - NaN;
let arOper3 = Infinity - Infinity;
let arOper4 = 5 - true;
let arOper5 = Boolean(true-true)*true;

console.log(arOper1);
console.log(arOper2);
console.log(arOper3);
console.log(arOper4);
console.log(arOper5);