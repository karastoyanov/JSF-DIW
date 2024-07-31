/*
Write a program to display the month (as a word), from the current date? (if I
run this program next month, it shoud return the month name properly)
*/

const d1 = new Date().getMonth();

function getMonth(currentMonth) {
    if (currentMonth == 0) {
        return console.log(`The month is January.`);
    } else if (currentMonth == 1) {
        return console.log(`The month is February.`);
    } else if (currentMonth == 2) {
        return console.log(`The month is March.`);
    } else if (currentMonth == 3) {
        console.log(`The month is April.`);
    } else if (currentMonth == 4) {
        return console.log(`The month is May.`);
    } else if (currentMonth == 5) {
        return console.log(`The month is June.`);
    } else if (currentMonth == 6) {
        return console.log(`The month is July.`);
    } else if (currentMonth == 7) {
        return console.log(`The month is August.`);
    } else if (currentMonth == 8) {
        return console.log(`The month is September.`);
    } else if (currentMonth == 9) {
        return console.log(`The month is October.`);
    } else if (currentMonth == 10) {
        return console.log(`The month is November.`);
    } else if (currentMonth == 11) {
        return console.log(`The month is December.`);
    }
}
getMonth(d1);