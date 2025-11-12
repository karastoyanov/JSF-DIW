/**
 * DTYPES01-023: Count the number of occurrences of each digit in the following text:
 * “193817588”
 * Print in ascending order all numbers from 0 to 9 and the number of times they occur in 
 * the text, separated with a comma.
 */

"use strict";

const Text = "193817588";
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
    console.log(`${digit}, ${counts[digit]}`);
}