//Write a JavaScript program to convert degrees in radians. Print on the console an appropriate message

const degrees = 90;
const degreesToRadians = (degrees) => degrees * (Math.PI / 180);

const radians = degreesToRadians(degrees);

console.log(`${degrees} degrees = ${radians.toFixed(2)} radians.`);