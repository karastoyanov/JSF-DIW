/**
 * BASICS03-016: A bus leaves from point A to point B with speed of 80 km/h. At the same time, 
    a car leaves from point B to point A with speed of x km/h. The distance between point A 
    and point B is S kilometers. After how many minutes, the bus, and the car will meet? 
    Print the result on the console. (S = V.t)
 */

let vb = 80, vc = 100, S = 300;

let t = S / (vb + vc);

console.log("Meeting time (min):", t * 60);