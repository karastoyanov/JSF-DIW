//  FUNCTIONS01-004: Write a function that takes a string as an argument and returns the longest word in the string.

function stringCheck(string) {

    let breakDownArray = string.split(" ");
    let longest = 0;
    let longest_word = null;
    for (let i = 0; i < breakDownArray.length; i++) {
        if (longest < breakDownArray[i].length) {
            longest = breakDownArray[i].length;
            longest_word = breakDownArray[i];
        }
    }
    return longest_word;
    
};
console.log(stringCheck("Another task around Fuunnctioonnss in JavaScript"));


