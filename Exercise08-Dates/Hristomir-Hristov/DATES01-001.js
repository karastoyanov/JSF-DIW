// Write a program to compute the day of the week when you were born?

const d1 = new Date("1991-02-19");

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const dayName = daysOfWeek[d1.getDay() - 1];

console.log(dayName);