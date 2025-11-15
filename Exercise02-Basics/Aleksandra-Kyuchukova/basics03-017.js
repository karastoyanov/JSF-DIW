"use strict"
/*
BASICS03-017: Write a JavaScript program to convert degrees in radians. Print on the console 
an appropriate message.
*/

let degrees = 270;

let radians = Math.PI * degrees / 180;

console.log(`${degrees} degrees are equal to ${radians.toFixed(2)} radians`);