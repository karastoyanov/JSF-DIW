/* DTYPES01-019: The following permanent text is given: Primitive
Print on the console the following:
On the first line – print the first character.
On the second line – print first two characters.
On the third line – print first three characters and so on until the whole word is printed. Pad each line with space character(s), so the text is right justified.*/

const textVar = 'Primitive';

console.log(textVar.substring(0,1).padStart(textVar.length," "));
console.log(textVar.substring(0,2).padStart(textVar.length," "));
console.log(textVar.substring(0,3).padStart(textVar.length," "));
console.log(textVar.substring(0,4).padStart(textVar.length," "));
console.log(textVar.substring(0,5).padStart(textVar.length," "));
console.log(textVar.substring(0,6).padStart(textVar.length," "));
console.log(textVar.substring(0,7).padStart(textVar.length," "));
console.log(textVar.substring(0,8).padStart(textVar.length," "));
console.log(textVar.substring(0,9).padStart(textVar.length," "));