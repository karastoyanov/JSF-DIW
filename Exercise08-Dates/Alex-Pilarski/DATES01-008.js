/* Write a program to compute the amount of days and remaining hours from a given number of hours. */

const totalHours = 268;

const days = Math.floor(totalHours / 24);
const remainingHours = totalHours % 24;

console.log(`${totalHours} hours is equal to ${days} day(s) and ${remainingHours} hour(s).`);
