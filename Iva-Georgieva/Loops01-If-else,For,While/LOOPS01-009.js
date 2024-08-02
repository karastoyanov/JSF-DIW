// LOOPS01-009: Write a program to reverse a string.

let sentence = 'Once upon a time';
let result ="";

for (i = sentence.length-1; i >=0; i--) {
      result += sentence[i];
     
}
console.log(result);