/*
Write a function that takes a string as an argument and returns the string with the first letter of each word capitalized.
*/

function capitalizeString(string) {
    let arrSplit = string.split(" ");

    for (let i = 0; i < arrSplit.length; i++) {
        arrSplit[i] = arrSplit[i].charAt(0).toUpperCase() + arrSplit[i].slice(1);
    }
    return arrSplit.join(" ");
}

console.log(capitalizeString("This is a test string"));