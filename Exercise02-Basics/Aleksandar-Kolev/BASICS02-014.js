let letter = 'K'; 
let code = letter.charCodeAt(0);
if (code >= 65 && code <= 90) {
    console.log(String.fromCharCode(code + 32));
} else if (code >= 97 && code <= 122) {
    console.log(String.fromCharCode(code - 32));
} else {
    console.log("Not a letter from the English alphabet.");
}