// Write a program to compute the number of leap years since your birthday?

const bornYear = (new Date("1991-02-19")).getFullYear();
const currentYear = (new Date("2024-07-30")).getFullYear();


function countLeapYears(bornYear, currentYear) {
    let leapYearCount = 0;
    for (let year = bornYear; year <= currentYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYearCount++;
        }
    }
    return leapYearCount;
}

console.log(countLeapYears(bornYear, currentYear));