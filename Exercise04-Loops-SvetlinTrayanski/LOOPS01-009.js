/*Write a program to reverse a string.*/

let string = "ooooopa";
let reversed = "";

for (let i = string.length - 1; i >= 0; i--) {
  reversed += string[i];
}


console.log(reversed);