/*
Write a function to split a string by commas. Use a regular expression to split a
string into an array of substrings, using commas as the delimiter.
*/

// if the condition is to split a string by its commas, then this
function splitStr1(str) {
    let result = str.replace(/[^\W\S]/g, ',').split(',');
    return console.log(result);
}
splitStr1("This, is a test string, ok?");


// if the condition is to split a string with commas, then this
function splitStr2(str) {
    let result = str.replace(/\s/g, ',').split(',');
    return console.log(result);
}
splitStr2("This is a test string.");