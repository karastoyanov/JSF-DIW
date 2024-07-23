// Write a program to reverse a string.

let strVar = "Reverse this string";
let revStr = "";

for (let i = strVar.length-1; i >= 0; i--) {
    revStr += strVar[i];
}
console.log(revStr);