/* Write a program to check if a given string is a palindrome (reads the same 
string in both directions – from the beginning to the end and vice versa – the same 
string).*/

let string = "ahaha";
let reversedString = "";

for (let index = string.length - 1; index >= 0; index--) {
    reversedString += string[index];
}

console.log(reversedString);

if (reversedString === string) {
    console.log("The string is a palindrome.")
} else {
    console.log("The string is not a palindrome.")
}