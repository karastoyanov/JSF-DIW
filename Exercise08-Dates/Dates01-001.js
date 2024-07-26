//  DATES01-001: Write a program to compute the day of the week when you were born?

let myBirthday = new Date('1991/04/14'); // The ISO standard 

let dateString = myBirthday.toString();
let dayofWeek = dateString.charAt(0) + dateString.charAt(1) + dateString.charAt(2) + dateString.charAt(3); //
console.log(dayofWeek); //

