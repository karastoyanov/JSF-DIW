//  DATES01-002: Write a program to compute the number of days since your birthday?

const myBirthday = new Date('1991-04-15');
const currentDate = new Date();

let startDate = myBirthday.getTime();
let endDate = currentDate.getTime();
let difference = endDate - startDate;
let ageDays = parseInt(difference / 86400000); // converting milliseconds to days

console.log(ageDays);