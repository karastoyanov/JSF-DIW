/* BASICS02-008: Declare five variables. Assign them with the randomly chosen emoji 
characters. Print the UNICODE codes in hex format on the console – on diWerent lines. */

let speaker;                           
let sun;                           
let glasses;                           
let spider; 
let hammer;


speaker = '🔊'.codePointAt(0);                           
sun = "🔆".codePointAt(0);                           
glasses = "🕶️".codePointAt(0);                           
spider = "🕷️".codePointAt(0); 
hammer = "🔨".codePointAt(0);                         

console.log(speaker.toString(16));
console.log(sun.toString(16));
console.log(glasses.toString(16));
console.log(spider.toString(16));
console.log(hammer.toString(16));