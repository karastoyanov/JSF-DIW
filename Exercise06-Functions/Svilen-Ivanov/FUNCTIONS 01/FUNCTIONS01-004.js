/*
FUNCTIONS01-004: Write a function that takes a string as an argument and returns the longest
word in the string.
*/

function longestWord (someString) {
    let wordCount = 0;
    let wordInarr = '';
    const arr = someString.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > wordCount) {
            wordCount = arr[i].length;
            wordInarr = arr[i];
        }
    }
    console.log(`The longest word is "${wordInarr}" and it is ${wordCount} characters long.`);
    return;
}

longestWord(`This is a testtt strinnnnggggg`);