// Write a program to retrieve and to display the day of the week (as a word) of today?

const d1 = new Date().getDay();

function getWeekday(currentDate) {
    if (currentDate == 1) {
        console.log(`Today is Monday.`);
    } else if (currentDate == 2) {
        console.log(`Today is Tuesday.`);
    } else if (currentDate == 3) {
        console.log(`Today is Wednesday.`);
    } else if (currentDate == 4) {
        console.log(`Today is Thursday.`);
    } else if (currentDate == 5) {
        console.log(`Today is Friday.`);
    } else if (currentDate == 6) {
        console.log(`Today is Saturday.`);
    } else if (currentDate == 0) {
        console.log(`Today is Sunday.`);
    }
} 
getWeekday(d1);