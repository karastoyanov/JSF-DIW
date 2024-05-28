/*

A bus leaves from point A to point B with speed of 80 km/h. At the same time,
a car leaves from point B to point A with speed of x km/h. The distance between point A
and point B is S kilometers. After how many minutes, the bus, and the car will meet?
Print the result on the console. (S = V.t)

*/

const BUSSPEED = 80;

let carSpeed = 90;
let dist = 30;

let combinedSpeed = BUSSPEED + carSpeed;
let timeInMin = (dist / combinedSpeed) * 60 >> 0;

console.log("If the car is moving with " +carSpeed + " km/h and the distance is " +dist + ", the vehicles will meet in about " +timeInMin + " minutes.");