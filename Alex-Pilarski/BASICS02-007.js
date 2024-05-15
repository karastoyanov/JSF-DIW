// Declare five variables. Assign them with the randomly chosen emoji characters. 
// Print the UNICODE codes on the console – on one line, separated with commas and space after each comma character.

let randomEmoji = "😀".codePointAt(0);
let randomEmoji2 = "😋".codePointAt(0);
let randomEmoji3 = "😆".codePointAt(0);
let randomEmoji4 = "😄".codePointAt(0);
let randomEmoji5 = "😁".codePointAt(0);


console.log(randomEmoji.toString(8)+", "+randomEmoji2.toString(8)+", "+randomEmoji2.toString(8)+", "+randomEmoji3.toString(8)+", "+randomEmoji4.toString(8));