// Write a program to count the number of vowels in a given string using for loop and if-else.

let string = "TDI poweeeeeeeeeeeeeeeeeeeeer";
lowerCaseString = string.toLowerCase();
let vowels = 0;

Array.from(lowerCaseString).forEach(char => {
    if (char == 'a' || char == 'o' || char === 'e' || char == 'i' || char == 'u') {
        vowels++;
    }
});

console.log(`${string} has ${vowels} vowels.`)