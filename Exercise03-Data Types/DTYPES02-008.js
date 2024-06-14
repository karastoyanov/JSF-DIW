/* Define 5 bigint variables and print them in hexadecimal number system. */

let bigNum = BigInt("1234567890123456789012345678901234567890");
let bigNum2 = BigInt("9876543210987654321098765432109876543210");
let bigNum3 = BigInt("1122334455667788990011223344556677889900");
let bigNum4 = BigInt("9988776655443322110099887766554433221100");
let bigNum5 = BigInt("1111222233334444555566667777888899990000");

console.log(bigNum.toString(16));
console.log(bigNum2.toString(16));
console.log(bigNum3.toString(16));
console.log(bigNum4.toString(16));
console.log(bigNum5.toString(16));
