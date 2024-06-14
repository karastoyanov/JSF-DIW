/* Add two big numbers (each with at least 30 digits). Print the result on the
console. */

let bigNum = BigInt("123456789012345678901234567890");
let bigNum2 = BigInt("987654321098765432109876543210");

let bigSum = bigNum + bigNum2;

console.log("Result:", bigSum.toString());
