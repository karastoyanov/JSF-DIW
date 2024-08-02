/* Write a program to retrieve and to display the day of the week (as a word) of today. */

const today = new Date();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayIndex = today.getDay();

const dayName = daysOfWeek[dayIndex];

console.log(`Today is: ${dayName}`);
