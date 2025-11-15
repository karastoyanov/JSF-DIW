"use strict"
/*
DTYPES01-022: Check if the word “jump” exists in the following text (called pangram), 
ignoring the case sensitivity:
The quick brown fox jumps over the lazy dog
If it does not exist -> print “does not exist”.
If it is fount -> print “found at position: <position>. 
*/

let pangram = 'The quick brown fox jumps over the lazy dog';

let position = pangram.search(/jump/i);

let result = position !== -1 ? console.log(`found at position: ${position}`) : console.log(`does not exist`);


