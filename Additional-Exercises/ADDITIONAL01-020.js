/*
ADDITIONAL01-020
Define a string variable, a sentence.
Print on the console only the characters between positions 4 and 10.
*/

let sentence = "Lorem ipsum dolor sit amet, consectetur adipisicing elit...";

// Using the slice() method
let sliceChars = sentence.slice(4, 11);
console.log(`Slice() method:\nThe characters between positions 4 and 10 are \"${sliceChars}\".\n`);

// Using the substring() method
let substringChars = sentence.substring(4, 11);
console.log(`Substring() method:\nThe characters between positions 4 and 10 are \"${substringChars}\".\n`);

// Using the substr() method
let substrChars = sentence.substr(4, 7);
console.log(`Substr() method:\nThe characters between positions 4 and 10 are \"${substrChars}\".`);
