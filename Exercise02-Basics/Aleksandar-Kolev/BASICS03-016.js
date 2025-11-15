// A bus leaves from point A to point B with speed of 80 km/h. At the same time, 
// a car leaves from point B to point A with speed of x km/h. The distance between point A 
// and point B is S kilometers. After how many minutes, the bus, and the car will meet? 
// Print the result on the console. (S = V.t)

let V_bus = 80;
let V_car = 110;
let S = 260;

let V_combined = V_bus + V_car;

const t_hours = S / V_combined;

const t_minutes = t_hours * 60;

console.log(`The bus and the car will meet in ${t_minutes.toFixed(0)} minutes.`);
