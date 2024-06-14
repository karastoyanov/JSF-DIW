/* Multiply two big numbers (each with more than 20 digits). */

let bigNum = BigInt("12345678901234567890123456");
let bigNum2 = BigInt("98765432109876543210987654");

let bigMultiply = bigNum * bigNum2;

console.log("Result of multiplication:", bigMultiply.toString());
