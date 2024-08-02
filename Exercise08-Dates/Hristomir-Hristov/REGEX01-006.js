/*Write a function to count all the words in a string. Use regular expression to
define a word (hint: use \b ).
*/

function wordCount(str) {
    let result = str.split(/[\b\s]/gm).length;
    return console.log(result);
    
}
wordCount("Hello, there! This is a test string, okay?");