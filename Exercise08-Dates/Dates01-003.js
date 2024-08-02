//  DATES01-003: Write a program to compute the number of leap years since your birthday?

const myBirthday = new Date('1991-04-15');
const currDate = new Date();

function isLeap(year) {
    let result = new Date(year,1,29).getDate() === 29; // thanks to Alex Karastoyanov
    return result;
}

function countLeaps(starYear,endYear) {
    let counter = 0;
    let firstYear = new Date(starYear).getFullYear();
    let lastYear = new Date(endYear).getFullYear();
    
    for(let i = firstYear; i <= lastYear; i++) {
       let leapCheck = isLeap(i);
       if(leapCheck == true) {
        counter++;
       } 

    }
    return counter;
} 
console.log(countLeaps(myBirthday,currDate));