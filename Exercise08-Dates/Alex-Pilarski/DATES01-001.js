/* Write a program to compute the day of the week for a given date.   */

const birthDate = new Date("1990-09-28");

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayOfWeek = weekDays[birthDate.getDay()];

console.log(`The day of the week is: ${dayOfWeek}`);