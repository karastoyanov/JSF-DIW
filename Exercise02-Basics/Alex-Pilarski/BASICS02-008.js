// Declare five variables. Assign them with the randomly chosen emoji characters. 
// Print the UNICODE codes on the console – on one line, separated with commas and space after each comma character.

let randomEmoji = "😀".codePointAt(0);
let randomEmoji2 = "😋".codePointAt(0);
let randomEmoji3 = "😆".codePointAt(0);
let randomEmoji4 = "😄".codePointAt(0);
let randomEmoji5 = "😁".codePointAt(0);

console.log(randomEmoji.toString(16)); 
console.log(randomEmoji2.toString(16));
console.log(randomEmoji3.toString(16));
console.log(randomEmoji4.toString(16));
console.log(randomEmoji5.toString(16));