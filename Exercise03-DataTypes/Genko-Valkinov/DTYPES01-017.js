// DTYPES01-017: Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one 
// column, right justified. Pad all the digits with zeros so that the column is right-justified,
// and the width is exactly eight characters. Also, replace all eights with the digit nine, and 
// all nines with the digit one.


console.log('1'.padStart(8, 0).replaceAll('8', '9').replaceAll('9', '1'));
console.log('10'.padStart(8, 0).replaceAll('8', '9').replaceAll('9', '1'));
console.log('38'.padStart(8, 0).replaceAll('8', '9').replaceAll('9', '1'));
console.log('4'.padStart(8, 0).replaceAll('8', '9').replaceAll('9', '1'));
console.log('824'.padStart(8, 0).replaceAll('8', '9').replaceAll('9', '1'));
console.log('120'.padStart(8, 0).replaceAll('8', '9').replaceAll('9', '1'));
console.log('999'.padStart(8, 0).replaceAll('8', '9').replaceAll('9', '1'));
console.log('64'.padStart(8, 0).replaceAll('8', '9').replaceAll('9', '1'));