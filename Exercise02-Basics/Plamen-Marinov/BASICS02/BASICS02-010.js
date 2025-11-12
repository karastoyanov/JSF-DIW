/*
BASICS02-010: Declare five variables. Assign them with the randomly chosen emoji 
characters. For each of the variables - print the UNICODE code in binary, octal, decimal,
and hex format on one line, separated with comas and space after it.
*/

let emoji40 = '🐸';
let emoji41 = '🍕';
let emoji42 = '🚴';
let emoji43 = '🎧';
let emoji44 = '🧠';

console.log(
  emoji40.codePointAt(0).toString(2) + ', ' +
  emoji40.codePointAt(0).toString(8) + ', ' +
  emoji40.codePointAt(0).toString(10) + ', ' +
  emoji40.codePointAt(0).toString(16)
);

console.log(
  emoji41.codePointAt(0).toString(2) + ', ' +
  emoji41.codePointAt(0).toString(8) + ', ' +
  emoji41.codePointAt(0).toString(10) + ', ' +
  emoji41.codePointAt(0).toString(16)
);

console.log(
  emoji42.codePointAt(0).toString(2) + ', ' +
  emoji42.codePointAt(0).toString(8) + ', ' +
  emoji42.codePointAt(0).toString(10) + ', ' +
  emoji42.codePointAt(0).toString(16)
);

console.log(
  emoji43.codePointAt(0).toString(2) + ', ' +
  emoji43.codePointAt(0).toString(8) + ', ' +
  emoji43.codePointAt(0).toString(10) + ', ' +
  emoji43.codePointAt(0).toString(16)
);

console.log(
  emoji44.codePointAt(0).toString(2) + ', ' +
  emoji44.codePointAt(0).toString(8) + ', ' +
  emoji44.codePointAt(0).toString(10) + ', ' +
  emoji44.codePointAt(0).toString(16)
);