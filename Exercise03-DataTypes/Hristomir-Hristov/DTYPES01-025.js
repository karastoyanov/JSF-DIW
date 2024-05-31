/*

Count the number of occurrences of each digit in the following text:
“19002288034”
Print in ascending order all numbers encountered in the string and the number of times
they occur in the text, separated with a colon character “:”.

*/

let digitOccur = "19002288034";

let digit0 = digitOccur.match(/0/g);
let result0 = digit0 ? console.log('0:' +digit0.length) : '';

let digit1 = digitOccur.match(/1/g);
let result1 = digit1 ? console.log('1:' +digit1.length) : '';

let digit2 = digitOccur.match(/2/g);
let result2 = digit2 ? console.log('2:' +digit2.length) : '';

let digit3 = digitOccur.match(/3/g); 
let result3 = digit3 ? console.log('3:' +digit3.length) : '';

let digit4 = digitOccur.match(/4/g); 
let result4 = digit4 ? console.log('4:' +digit4.length) : '';

let digit5 = digitOccur.match(/5/g); 
let result5 = digit5 ? console.log('5:' +digit5.length) : '';

let digit6 = digitOccur.match(/6/g); 
let result6 = digit6 ? console.log('6:' +digit6.length) : '';

let digit7 = digitOccur.match(/7/g); 
let result7 = digit7 ? console.log('7:' +digit7.length) : '';

let digit8 = digitOccur.match(/8/g); 
let result8 = digit8 ? console.log('8:' +digit8.length) : '';

let digit9 = digitOccur.match(/9/g); 
let result9 = digit9 ? console.log('9:' +digit9.length) : '';