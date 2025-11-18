"use strict"
/*
DTYPES01-018: The following permanent text is given:
Primitive
Print on the console the following:
On the first line – print the first character.
On the second line – print first two characters.
On the third line – print first three characters and so on until the whole word is printed.
Pad each line with space character(s), so the text is right justified.
 */

const TEXT = 'Primitive';

let str1 = text[0].padStart(TEXT.length, " ");
let str2 = text.substr(0, 2).padStart(TEXT.length, " ");
let str3 = text.substr(0, 3).padStart(TEXT.length, " ");
let str4 = text.substr(0, 4).padStart(TEXT.length, " ");
let str5 = text.substr(0, 5).padStart(TEXT.length, " ");
let str6 = text.substr(0, 6).padStart(TEXT.length, " ");
let str7 = text.substr(0, 7).padStart(TEXT.length, " ");
let str8 = text.substr(0, 8).padStart(TEXT.length, " ");
let str9 = text.padStart(TEXT.length, " ");

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
console.log(str7);
console.log(str8);
console.log(str9);



