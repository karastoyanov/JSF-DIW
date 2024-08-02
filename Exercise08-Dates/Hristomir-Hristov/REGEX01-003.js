// Write a function to replace all whitespace characters with a single space in a string.


function trimWhiteSpace(str) {
    let result = str.replace(/\s+/g, ' ');
    return console.log(result);
    
}
trimWhiteSpace("This  string    has  white   spaces.");