"use strict"
/*
FUNCTIONS01-009: Write a function that takes a string and a character as arguments and 
returns the number of times the character occurs in the string.
*/

function CharCount(str, ch) {
    let count = 0;

    for (let char of str) {
        if (char === ch) {
            count++;
        }
    }

    console.log(count);
}

CharCount('The quick brown fox jumps over the lazy dog', 'o');
