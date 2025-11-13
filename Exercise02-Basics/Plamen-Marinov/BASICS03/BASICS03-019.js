/*
BASICS03-019: Write a JavaScript program to convert km/h into m/s. Print on the console an 
appropriate message.
*/

let speedKmH = 90;
let speedMs = speedKmH * (1000 / 3600);

console.log(speedKmH + " km/h = " + speedMs.toFixed(2) + " m/s.");