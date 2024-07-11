/*
FUNCTIONS01-006: Write a function that takes a string as an argument and returns the
number of words in the string.
*/

function numberOfWords(someString) {
    const arr = someString.split(" ");
    let wordCount = arr.length;
    console.log(`The number of words in the string is ${wordCount}`);
    return;
}

numberOfWords(`This is a test string for tests`);