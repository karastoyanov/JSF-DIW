// Write a program to count the number of vowels (гласни) in a given string using for loop and if-else.

let string = "How many vowels are in this string?";
string = string.toLowerCase();
let count = 0;

for (let i = 0; i < string.length; i++) {
    let letter = string[i]
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        count++
    }
}
if (count === 0) {
    console.log("There were no vowels found in this sentence.");
} else {
    console.log(`There are ${count} vowels in the sentence: "${string.charAt(0).toUpperCase() + string.slice(1)}".`)
}
