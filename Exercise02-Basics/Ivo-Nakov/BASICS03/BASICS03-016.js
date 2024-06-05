/*
BASICS03-016
A bus leaves from point A to point B with speed of 80 km/h.
At the same time, a car leaves from point B to point A with speed of x km/h.
The distance between point A and point B is S kilometers.
After how many minutes, the bus, and the car will meet?
Print the result on the console
*/

let speedOfBus = 80;
let speedOfCar = 70;

let distance = 100;

let timeInHours = distance / (speedOfBus + speedOfCar);
let timeInMinutes = timeInHours * 60;

console.log(`The bus and the car will meet after ${timeInMinutes} minutes.`);