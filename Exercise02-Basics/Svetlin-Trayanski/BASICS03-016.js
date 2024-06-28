/* A bus leaves from point A to point B with speed of 80 km/h. At the same time, 
a car leaves from point B to point A with speed of x km/h. The distance between point A 
and point B is S kilometers. After how many minutes, the bus, and the car will meet? 
Print the result on the console. (S = V.t) */

const speedBus = 80;
let speedCar = 160; 
const distance = 300; 

const timeBus = distance / speedBus; 
const timeCar = distance / speedCar;

const timeBusMinutes = timeBus * 60; 
const timeCarMinutes = timeCar * 60;

console.log(Math.min(timeBusMinutes, timeCarMinutes));