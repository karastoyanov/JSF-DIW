"use strict"
/*
FUNCTIONS01-004: Write a function that takes a string as an argument and returns the longest 
word in the string.
*/

function LongestWord(str) {
    let strToArr = str.split(" ");
    let longWord = '';

    for (let word of strToArr) {
        if (word.length > longWord.length) {
            longWord = word;
        }
    }

    console.log(longWord);
}

LongestWord('The quick brown fox jumps over the lazy dog');
