/*
BASICS03-016: A bus leaves from point A to point B with speed of 80 km/h. At the same time, 
a car leaves from point B to point A with speed of x km/h. The distance between point A 
and point B is S kilometers. After how many minutes, the bus, and the car will meet? 
Print the result on the console.
*/

let busSpeed = 80;
let S = 800;
let busTime = S/busSpeed; 
let carSpeed = 20; 
let carTime = S/carSpeed; 

let meetTime = (S/(carSpeed + busSpeed))*60;  

console.log(busTime);
console.log(carTime);
console.log('Vehiecles will meet in aproximate: ' + (meetTime) + ' ' + 'Minutes');