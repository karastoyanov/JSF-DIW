/*
DTYPES01-014: 
Define a string variable with the following text (called pangram):
The quick brown fox jumps over the lazy dog
Use positive indexing to print on the console the character “b”.
Use negative indexing to print on the console the character “s”. 
*/

let pangram = 'The quick brown fox jumps over the lazy dog';
console.log(pangram[10]);
console.log(pangram.substr(pangram.length-19,1));

/* eample for comprehension:

let pangram2 = 'The jay, pig, fox, zebra and my wolves quack';
console.log(pangram2[21]);
console.log(pangram2.substr(pangram2.length-7,1));
*/