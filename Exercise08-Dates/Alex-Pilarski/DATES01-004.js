/* Write a program to display on the console the leap years since your birthday. */

const birthday = "1990-09-28";

const birthDate = new Date(birthday);

const startYear = birthDate.getFullYear();
const currentYear = new Date().getFullYear();

const leapYears = [];

for (let year = startYear; year <= currentYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapYears.push(year);
    }
}

console.log(`Leap years since ${startYear}: ${leapYears.join(', ')}`);
