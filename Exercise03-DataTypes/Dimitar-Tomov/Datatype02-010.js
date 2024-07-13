/*What is the result of the following arithmetic operations: 
1) NaN++ 
2) NaN - NaN 
3) Infinity - Infinity 
4) 5 - true 
5) Boolean(true-true)*true*/

let result1 = NaN++;
console.log(result1);

let result2 = NaN - NaN;
console.log(result2);

let result3 = Infinity - Infinity;
console.log(result3);

let result4 = 5 - true;
console.log(result4);

let result5 = Boolean(true - true) * true;
console.log(result5);