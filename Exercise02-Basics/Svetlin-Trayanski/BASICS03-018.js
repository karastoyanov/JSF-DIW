// Write a JavaScript program to convert km/h into km/min. Print on the console an appropriate message.

const kmConverter = (kmPerHour) => kmPerHour / 60;
const speedKmPerHour = 140;

const speedKmPerMinute = kmConverter(speedKmPerHour);

console.log(`${speedKmPerHour} km/h = ${speedKmPerMinute.toFixed(2)} km/min.`);