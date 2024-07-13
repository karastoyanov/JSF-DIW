//Write a program to reverse a string

let string = "hello hello hello";
let reversedString = "";

for (let index = string.length-1; index >= 0; index--) {
    reversedString += string[index];
    
}

console.log(reversedString);
