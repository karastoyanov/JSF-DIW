// LOOPS01-006: Define a variable and initialize it with a number from the interval [0,23] (this 
// will be interpreted as an hour). Write an appropriate congratulations message, based on 
// the variable’s value.

const goodMorning = 10;
const goodAfternoon = 18;
const goodEvening = 0;

let points = 17;

switch (true) {
    case points < goodMorning:
        console.log(`Good Morning`);
        break;
    case points < goodAfternoon:
        console.log(`Good Afternoon`);
        break;
    case points < goodEvening:
        console.log(`Good Evening`);
        break;
    default:
        console.log('Invalid Hour');
        break;
}