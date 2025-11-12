/**
 * DTYPES01-017: Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one 
  column, right justified. Pad all the digits with zeros so that the column is right-justified,
  and the width is exactly eight characters. Also, replace all eights with the digit nine, and 
  all nines with the digit one.

 */

const nums = [1, 10, 38, 4, 824, 120, 999, 64];

const width = 8;
const paddedLines = nums.map(n => String(n).padStart(width, '0'));

for (let n of nums) {
  // replace eights with the digit nine, and nine with the digit one
  let s = String(n).padStart(width, '0').replace(/[89]/g, ch => ch === '8' ? '9' : '1');
  console.log(s);
}
