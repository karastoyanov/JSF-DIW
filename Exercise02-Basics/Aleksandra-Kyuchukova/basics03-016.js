"use strict"
/*
BASICS03-016: A bus leaves from point A to point B with speed of 80 km/h. At the same time, 
a car leaves from point B to point A with speed of x km/h. The distance between point A 
and point B is S kilometers. After how many minutes, the bus, and the car will meet? 
Print the result on the console. (S = V.t)
*/

let busSpeed = 80;
let carSpeedX = 100;
let distanceS = 200;


let timeMin = (distanceS * 60) / (busSpeed + carSpeedX);    

console.log(timeMin.toFixed(2));