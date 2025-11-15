/* Write a program to reverse a string. */

let textReverse = "To be reversed!"
let reversed = "";


for (let i = textReverse.length - 1; i >= 0; i--) {
  reversed += textReverse[i];
}

console.log(reversed);
