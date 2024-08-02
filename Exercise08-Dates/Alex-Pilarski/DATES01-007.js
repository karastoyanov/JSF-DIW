/* Write a program to compute the amount of hours between two given dates. */

const date1String = "2024-08-01";
const date2String = "2024-08-03";

const date1 = new Date(date1String);
const date2 = new Date(date2String);

const timeDifference = Math.abs(date2 - date1);

const hoursDifference = timeDifference / (1000 * 60 * 60);

console.log(`The amount of hours between ${date1String} and ${date2String} is: ${hoursDifference} hours`);
