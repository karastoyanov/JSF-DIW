/* Write a program to compute the number of leap years since your birthday. */

const birthday = "1990-09-28";

const birthDate = new Date(birthday);

const startYear = birthDate.getFullYear();
const currentYear = new Date().getFullYear();

let leapYearCount = 0;

for (let year = startYear; year <= currentYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapYearCount++;
    }
}

console.log(`Number of leap years since ${startYear}: ${leapYearCount}`);
