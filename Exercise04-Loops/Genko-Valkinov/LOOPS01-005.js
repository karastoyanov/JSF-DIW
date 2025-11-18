// LOOPS01-005: You are doing an online test and at the end are receiving certain number of 
// points. Write a program, that assigns a grade (string value) based on the received points 
// from the test. Use the following grade scale:


const F = 19.99;
const FX = 39.99;
const E = 49.99;
const D = 59.99;
const C = 69.99;
const B = 84.99;
const A = 100;

let points = 67.67;

switch (true) {
    case points < F:
        console.log(`Points: ${points} -> Score: F}`);
        break;
    case points < FX:
        console.log(`Points: ${points} -> Score: F`);
        break;
    case points < E:
        console.log(`Points: ${points} -> Score: FX`);
        break;
    case points < D:
        console.log(`Points: ${points} -> Score: E`);
        break;
    case points < C:
        console.log(`Points: ${points} -> Score: D`);
        break;
    case points < B:
        console.log(`Points: ${points} -> Score: C`);
        break;
    case points < A:
        console.log(`Points: ${points} -> Score: B`);
        break;
    case points === A:
        console.log(`Points: ${points} -> Score: A`);
    default:
        console.log('Invalid Score');
        break;
}