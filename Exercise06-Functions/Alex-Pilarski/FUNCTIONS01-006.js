/* Write a function that takes a string as an argument and returns the number of words in the string. */

function countWords(sentence) {
    const words = sentence.trim().split(/\s+/);
    return words.length;
}

console.log(countWords("This is a test string to fulfill thee requirement of the task.")); 
