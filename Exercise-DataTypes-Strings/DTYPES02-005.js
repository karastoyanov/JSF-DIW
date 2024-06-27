/*Using Number and BigInt types, define variables and perform the actions
with each of the arithmetic operations ( + - * / ). Save the results in diWerent variables
and print them on the console.
*/

let num1 = 2;
let num2 = 500;
let bigInt1 = 4n;
let bigInt2 = 8n;

let addResult = BigInt(num1) + bigInt2;
let subtractResult = BigInt(num2) - bigInt1;
let multiplyResult = BigInt(num1) * bigInt2;
let divideResult = BigInt(num1) / bigInt2;

console.log(addResult);
console.log(subtractResult);
console.log(multiplyResult);
console.log(divideResult);