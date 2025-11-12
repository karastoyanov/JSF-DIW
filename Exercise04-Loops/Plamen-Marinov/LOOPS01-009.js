// LOOPS01-009: Write a program to reverse a string.

let str = "Text that has to be reversed!";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed);