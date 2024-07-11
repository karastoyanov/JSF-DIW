/*
DTYPES01-017: Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one 
column, right justified. Pad all the digits with zeros so that the column is right-justified,
and the width is exactly eight characters. Also, replace all eights with the digit nine, and 
all nines with the digit one.
*/

let one = '1';
let ten = '10';
let thirtyEight = '38';
let four = '4';
let eithTwoFour= '824';
let hudredTwenty = '120';
let nineNineNine = '999';
let sixtyFour = '64';

//console.log(one.padStart(8, 0).replaceAll(8, 9).replaceAll(9, 8 ));
console.log(one.padStart(8, 0));
console.log(ten.padStart(8, 0));
console.log(thirtyEight.padStart(8, 0).replaceAll(8, 9));
console.log(four.padStart(8, 0));
console.log(eithTwoFour.padStart(8, 0).replaceAll(8, 9));
console.log(hudredTwenty.padStart(8, 0));
console.log(nineNineNine.padStart(8, 0).replaceAll(9, 1));
console.log(sixtyFour.padStart(8, 0));
