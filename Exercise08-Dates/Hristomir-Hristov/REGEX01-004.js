/*
Write a function to check if a string contains only letters, digits and “_”
(underscore).
*/

function checkWordChar(str) {
    const pattern = /[^\w\s]/igm;
    let result = pattern.test(str);

    if (result) {
        return console.log(`The string contains non-word characters.`)
    } else {
        return console.log(`The string doesn't contain non-word characters. `)
    }
}
checkWordChar("This is a test string.");