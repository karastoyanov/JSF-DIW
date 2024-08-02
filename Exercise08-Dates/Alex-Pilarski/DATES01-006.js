/* Write a program to display the month (as a word) from the current date. */

const today = new Date();

const monthsOfYear = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const monthIndex = today.getMonth();

const monthName = monthsOfYear[monthIndex];

console.log(`The current month is: ${monthName}`);
