/*
BASICS03-019
Write a JavaScript program to convert km/h into m/s.
Print on the console an appropriate message.
*/

let speedInKmPerHour = 80;

let speedInMPerSecond = speedInKmPerHour * (1000 / 3600);

console.log(`${speedInKmPerHour} km/h is equal to ${speedInMPerSecond} m/s.`);