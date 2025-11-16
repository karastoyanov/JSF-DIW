"use strict"
/*
FUNCTIONS01-006: Write a function that takes a string as an argument and returns the 
number of words in the string.
*/

function WordsCount(str) {
    let strToArr = str.split(" ");

    let count = strToArr.length;

    console.log(count);
}

WordsCount('The quick brown fox jumps over the lazy dog');
