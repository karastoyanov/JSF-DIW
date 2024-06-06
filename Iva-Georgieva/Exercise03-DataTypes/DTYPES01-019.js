/* The following permanent text is given:
Primitive
Print on the console the following:
On the first line – print the first character.
On the second line – print first two characters.
On the third line – print first three characters and so on until the whole word is 
printed.
Pad each line with space character(s), so the text is right justified.*/



let allChar = "Primitive";

console.log(allChar.slice(0, 1).padStart(9, " "));
console.log(allChar.slice(0, 2).padStart(9, " "));
console.log(allChar.slice(0, 3).padStart(9, " "));
console.log(allChar.slice(0, 4).padStart(9, " "));
console.log(allChar.slice(0, 5).padStart(9, " "));
console.log(allChar.slice(0, 6).padStart(9, " "));
console.log(allChar.slice(0, 7).padStart(9, " "));
console.log(allChar.slice(0, 8).padStart(9, " "));
console.log(allChar.slice(0, 9).padStart(9, " "));