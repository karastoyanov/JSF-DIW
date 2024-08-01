/* Write a function that takes a string and a character as arguments and returns the number of times the character occurs in the string. */

function countCharacterOccurrences(str, char) {
    let count = 0;

    for (const currentChar of str) {
        if (currentChar === char) {
            count++;
        }
    }

    return count;
}

console.log(countCharacterOccurrences("This is a test string to fulfill thee requirement of the task.", "t")); 

