// Define a string variable with the following text (called pangram): 
// The quick brown fox jumps over the lazy dog 
// Use positive indexing to print on the console the character “b”.
// Use negative indexing to print on the console the character “s”.

let pangram = 'The quick brown fox jumps over the lazy dog'

let slice1 = pangram.slice(10, 11);
let slice2 = pangram.slice(-19, -18);

console.log(slice1, slice2);