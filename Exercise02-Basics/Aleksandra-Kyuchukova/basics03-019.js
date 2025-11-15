"use strict"
/*
BASICS03-019: Write a JavaScript program to convert km/h into m/s. Print on the console an 
appropriate message.
*/

let kmH = 60;

let mS = kmH * (1000 / 3600); 

console.log(`${kmH} km/h is equal to ${mS.toFixed(2)} m/s.`);