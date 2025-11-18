"use strict"
/*
FUNCTIONS01-011: Write a function that takes a string as an argument and returns the string 
with the first letter of each word capitalized.
*/

function FirstLetterUpperC(str) {
    let strToArr = str.split(' ');
    let result = '';

    for (let word of strToArr) {
        let currWord = word[0].toUpperCase() + word.slice(1);
        result += `${currWord} `;
    }

    console.log(result);
}

FirstLetterUpperC('The quick brown fox jumps over the lazy dog');
