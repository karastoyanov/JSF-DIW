/* Write a JavaScript program to convert km/h into m/s. Print on the console an 
appropriate message. */

let distanceMeters = 400;
let timeSeconds = 40;

let speed = distanceMeters / timeSeconds

console.log(`${distanceMeters} meters in ${timeSeconds} seconds is ${speed.toFixed(2)} m/s.`)
