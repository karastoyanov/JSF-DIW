/*
Write a program to check if a given string is a palindrome (reads the same string in both directions – 
from the beginning to the end and vice versa – the same string).
*/

let pal = "kayak";
let palFor = "";
let palBac = "";

for (let i = 0; i < pal.length; i++) {
    palFor += pal[i];
}
for (let i = pal.length - 1; i >= 0; i--) {
    palBac += pal[i];
}

if (palFor === palBac) {
    return console.log(`${pal} is a palindrome.`)
} else {
    return console.log(`${pal} is not a palindrome.`)
}