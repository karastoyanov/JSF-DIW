/*
DTYPES01-014: Define a string variable with the following text (called pangram):
The quick brown fox jumps over the lazy dog
Use positive indexing to print on the console the character “b”.
Use negative indexing to print on the console the character “s”.
 */

let pangram = 'The quick brown fox jumps over the lazy dog';

let charB = pangram.substr(10, 1);
let charS = pangram.substr(-19, 1);

console.log(`Char "b": ${charB}`);
console.log(`Char "s": ${charS}`);


