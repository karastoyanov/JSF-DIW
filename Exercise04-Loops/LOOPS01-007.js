/* Write a program to count the number of vowels in a given string using for loop and if-else. */


let inputString = "Hello, how are you?"; 
let count = 0;

inputString = inputString.toLowerCase();

for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === 'a' || inputString[i] === 'e' || inputString[i] === 'i' || inputString[i] === 'o' || inputString[i] === 'u') {
        count++;
    }
}

console.log("Number of vowels in the string:", count);