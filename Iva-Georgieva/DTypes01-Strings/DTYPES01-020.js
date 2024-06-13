/*  Print all even (четни) numbers from the string:
The number 28469 is not so big.
Hint 1: Check the remainder of integer division by two.
Hint 2: Use the ternary operator. */

let sentence = `The number "28469" is not so big.`;

let check1 = (sentence.at(12) % 2) == 0 ? console.log(sentence.at(12)) : false
let check2 = (sentence.charAt(13) % 2) == 0 ? console.log(sentence.at(13)) : false
let check3 = (sentence.charAt(14) % 2) == 0 ? console.log(sentence.at(14)) : false
let check4 = (sentence.charAt(15) % 2) == 0 ? console.log(sentence.at(15)) : false
let check5 = (sentence.charAt(16) % 2) == 0 ? console.log(sentence.at(16)) : false




