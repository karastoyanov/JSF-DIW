// BASICS03-019: Write a JavaScript program to convert km/h into m/s. Print on the console an 
// appropriate message.

const kmh = 100;

console.log(`${kmh} km/h = ${((kmh / 60 / 60) * 1000).toFixed(4)}  m/s`);