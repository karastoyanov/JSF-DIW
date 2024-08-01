/* Write a function that takes a string as an argument and returns the longest word in the string. */

function findLongestWord(sentence) {
    
    const words = sentence.split(' ');

    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord("This is a test string to fulfill thee requirement of the task."));
