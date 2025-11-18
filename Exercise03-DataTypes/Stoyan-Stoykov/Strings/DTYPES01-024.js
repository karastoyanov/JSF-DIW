/**
 * DTYPES01-023: Count the number of occurrences of each digit in the following text:
 * "19002288034"
 * Print in ascending order all numbers encountered in the string and the number of times
 * they occur in the text, separated with a colon character “:”
 */

"use strict";

const Text = "19002288034";
let counts = {}

// initialize all digits with 0
for (let i = 0; i < 10; i++) {
    counts[i] = 0;
}

//count digits
for (const ch of Text) {
    counts[ch]++;
}

console.log("Text: " + Text);
console.log("Digit occurrences:");
for (let digit in counts) {
    console.log(`${digit}: ${counts[digit]}`);
}