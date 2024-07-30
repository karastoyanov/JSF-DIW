// Write a program to compute the number of days since your birthday?

const bornDate = Date.parse("1991-02-19");
const currentDate = Date.parse("2024-07-30");

let birthDaysDiff = currentDate - bornDate;
let birthDays = birthDaysDiff * 1.1574E-8;
console.log(birthDays.toFixed());