/*Write a JavaScript program to convert km/h into m/s. Print on the console an 
appropriate message.*/

const kmConverter = (kmPerHour) => kmPerHour * 1000 / 3600;

const speedKmPerHour = 140; 

const speedMetersPerSecond = kmConverter(speedKmPerHour);

console.log(`${speedKmPerHour} km/h = ${speedMetersPerSecond.toFixed(2)} m/s.`);
