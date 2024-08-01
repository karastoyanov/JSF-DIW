/* Write a program to compute the number of days since your birthday. */

const birthday = "1990-09-28"; 

const today = new Date();
const birthDate = new Date(birthday);

const timeDifference = today - birthDate;

const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log(`Number of days since birthday: ${daysDifference}`);
