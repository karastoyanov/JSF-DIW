/*
DTYPES01-018: The following permanent text is given:
Primitive
Print on the console the following:
On the first line – print the first character.
On the second line – print first two characters.
On the third line – print first three characters and so on until the whole word is printed.
Pad each line with space character(s), so the text is right justified.
*/

const text = "Primitive";

console.log(text.substring(0, 1).padStart(text.length, ' '));
console.log(text.substring(0, 2).padStart(text.length, ' '));
console.log(text.substring(0, 3).padStart(text.length, ' '));
console.log(text.substring(0, 4).padStart(text.length, ' '));
console.log(text.substring(0, 5).padStart(text.length, ' '));
console.log(text.substring(0, 6).padStart(text.length, ' '));
console.log(text.substring(0, 7).padStart(text.length, ' '));
console.log(text.substring(0, 8).padStart(text.length, ' '));
console.log(text.substring(0, 9).padStart(text.length, ' '));