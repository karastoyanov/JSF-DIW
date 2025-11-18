/**
 * DTYPES01-016: Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one 
    column, right justified. Pad all the digits with zeros so that the column is right-justified, 
    and the width is exactly the width of the longest number written in the list. The length of 
    a number is measured by the number of digits involved in its writing. 
 */

const nums = [1, 10, 38, 4, 824, 120, 999, 64];

const width = 3; // 999 is longest

for (let n of nums) {
  console.log(String(n).padStart(width, '0'));
}