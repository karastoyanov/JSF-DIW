// Declare five variables. Assign them with the randomly chosen emoji characters. 
// For each of the variables - print the UNICODE code in binary, octal, decimal,
// and hex format on one line, separated with comas and space after it.

let randomEmoji = "😀".codePointAt(0);
let randomEmoji2 = "😋".codePointAt(0);
let randomEmoji3 = "😆".codePointAt(0);
let randomEmoji4 = "😄".codePointAt(0);
let randomEmoji5 = "😁".codePointAt(0);

// console.log(randomEmoji.toString(2)+", "+(randomEmoji.toString(8))+", "+(randomEmoji.toString(10)+", "+randomEmoji.toString(16)+", "+randomEmoji2.toString(2)+", "+randomEmoji2.toString(8))+", "+randomEmoji2.toString(10)+", "+randomEmoji2.toString(16)+", "+randomEmoji3.toString(2)+", "+randomEmoji3.toString(8)+", "+randomEmoji3.toString(10)+", "+randomEmoji3.toString(16)+", "+randomEmoji4.toString(2)+", "+randomEmoji4.toString(8)+", "+randomEmoji4.toString(10)+", "+randomEmoji4.toString(16)+", "+randomEmoji5.toString(2)+", "+randomEmoji5.toString(8)+", "+randomEmoji5.toString(10)+", "+randomEmoji5.toString(16));

// !! it is not by condition -> on one line

// console.log(randomEmoji.toString(2)+", "+(randomEmoji.toString(8))+", "+(randomEmoji.toString(10)+", "+randomEmoji.toString(16) + '\n' + randomEmoji2.toString(2)+", "+randomEmoji2.toString(8))+", "+randomEmoji2.toString(10)+", "+randomEmoji2.toString(16)+ '\n'+ randomEmoji3.toString(2)+ '\n' +randomEmoji3.toString(8)+", "+randomEmoji3.toString(10)+", "+randomEmoji3.toString(16)+ '\n' +randomEmoji4.toString(2)+", "+randomEmoji4.toString(8)+", "+randomEmoji4.toString(10)+", "+randomEmoji4.toString(16)+ '\n' + randomEmoji5.toString(2)+", "+randomEmoji5.toString(8)+", "+randomEmoji5.toString(10)+", "+randomEmoji5.toString(16));
// or
console.log(randomEmoji.toString(2)+", "+randomEmoji.toString(8)+", "+randomEmoji.toString(10)+", "+randomEmoji.toString(16));
console.log(randomEmoji2.toString(2)+", "+randomEmoji2.toString(8)+", "+randomEmoji2.toString(10)+", "+randomEmoji2.toString(16));
console.log(randomEmoji3.toString(2)+", "+randomEmoji3.toString(8)+", "+randomEmoji3.toString(10)+", "+randomEmoji3.toString(16)); 
console.log(randomEmoji4.toString(2)+", "+randomEmoji4.toString(8)+", "+randomEmoji4.toString(10)+", "+randomEmoji4.toString(16));
console.log(randomEmoji5.toString(2)+", "+randomEmoji5.toString(8)+", "+randomEmoji5.toString(10)+", "+randomEmoji5.toString(16));
