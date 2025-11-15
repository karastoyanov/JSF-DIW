/* Write a program to count the number of vowels (гласни) in a given string using 
for loop and if-else. */

let string = "Vowels quantity here";
let vowels = "oeuaiyOEUAIY";

let count = 0;

for (let i = 0; i < string.length; i++) {
  if (vowels.includes(string[i])) {
    count++;
  }
}

console.log(`Number of found vowels in the string: ${count}`);
