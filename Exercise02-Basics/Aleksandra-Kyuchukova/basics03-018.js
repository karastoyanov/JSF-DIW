"use strict"
/*
BASICS03-018: Write a JavaScript program to convert km/h into km/min. Print on the console 
an appropriate message.
*/

let kmH = 60;

let kmMin = kmH / 60;

console.log(`${kmH} km/h is equal to ${kmMin.toFixed(2)} km/min.`);