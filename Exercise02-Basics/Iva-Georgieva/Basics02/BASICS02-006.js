/* BASICS02-006: Declare five variables. Assign them with the randomly chosen emoji 
characters. Print the UNICODE codes on the console – on diWerent lines */

let mushroom;
let beer;
let medal;
let mkey;                        // musical keyboard 
let fireworks;

mushroom = "🍄".codePointAt(0);             
beer = "🍺".charCodeAt(0);                  
medal = "🏅".charCodeAt(0);                       
mkey =  "🏅".codePointAt(0);                                            
fireworks = "🎆".codePointAt(0);                  

console.log(mushroom.toString(16));
console.log(beer.toString(16));
console.log(medal.toString(16));
console.log(mkey.toString(16));
console.log(fireworks.toString(16));