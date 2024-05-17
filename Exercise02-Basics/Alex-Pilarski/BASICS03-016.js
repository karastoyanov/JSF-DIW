// A bus leaves from point A to point B with speed of 80 km/h. At the same time,
// a car leaves from point B to point A with speed of x km/h. The distance between point A
// and point B is S kilometers. After how many minutes, the bus, and the car will meet?
// Print the result on the console.

let speedBus = 60; 
let speedCar = 80; 
let distance = 400; 

// Calculate the time taken by the bus to travel the distance
let timeBusHours = distance / speedBus;

// Calculate the time taken by the car to travel the distance 
let timeCarHours = distance / speedCar;

// Convert hours to minutes
let timeBusMinutes = timeBusHours * 60;
let timeCarMinutes = timeCarHours * 60;

console.log("The bus and the car will meet after approximately: " + Math.round(Math.abs(timeBusMinutes - timeCarMinutes)) + " minutes.");

