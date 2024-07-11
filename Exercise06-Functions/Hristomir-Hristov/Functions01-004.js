/*
Write a function that takes a string as an argument and returns the longest word in the string
*/

function longestWord(string) {
    let arrSplit = string.split(" ");
    let longest = arrSplit[0];

    for ( let i = 1; i < arrSplit.length; i++) {
        if (arrSplit[i].length > longest.length) {
            longest = arrSplit[i];
        } 
    }
    return longest;
    }

console.log(longestWord("This is a test string"));