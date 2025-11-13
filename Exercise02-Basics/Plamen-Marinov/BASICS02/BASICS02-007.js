/*
BASICS02-007: Declare five variables. Assign them with the randomly chosen emoji 
characters. Print the UNICODE codes on the console – on one line, separated with 
commas and space after each comma character.
*/

let emoji15 = '😎';
let emoji16 = '🐶';
let emoji17 = '🍕'; 
let emoji18 = '🎮';
let emoji19 = '🌈';

console.log(
  emoji15.codePointAt(0) + ', ' +
  emoji16.codePointAt(0) + ', ' +
  emoji17.codePointAt(0) + ', ' +
  emoji18.codePointAt(0) + ', ' +
  emoji19.codePointAt(0)
);