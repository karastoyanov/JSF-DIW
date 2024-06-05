/*
ADDITIONAL01-020
Define a string variable, a sentence.
Print on the console only the characters between positions 4 and 10.
*/

let sPos = 4;
let ePos = 10 + 1;      //Since it's not clear if position 10 is included - assuming it is.

let sentence = "Lorem ipsum dolor sit amet, consectetur adipisicing elit...";

// Using the slice() method
let sliceChars = sentence.slice(sPos, ePos);
console.log(`Slice() method:\nThe characters between positions 4 and 10 are \"${sliceChars}\".\n`);

// Using the substring() method
let substringChars = sentence.substring(sPos, ePos);
console.log(`Substring() method:\nThe characters between positions 4 and 10 are \"${substringChars}\".\n`);

// Using the substr() method
let substrChars = sentence.substr(sPos, ePos - sPos);
console.log(`Substr() method:\nThe characters between positions 4 and 10 are \"${substrChars}\".`);