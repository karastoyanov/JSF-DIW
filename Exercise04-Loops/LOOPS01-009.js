/* Write a program to reverse a string. */

let str = "Hello, World!"; 

let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

console.log("Reversed string:", reversedStr);