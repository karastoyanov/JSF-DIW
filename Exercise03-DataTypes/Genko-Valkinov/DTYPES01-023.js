// DTYPES01-023: Count the number of occurrences of each digit in the following text:
// “193817588”
// Print in ascending order all numbers from 0 to 9 and the number of times they occur in 
// the text, separated with a comma

let number = '193817588';
let number0 = number.match(/0/g) || [];
let number1 = number.match(/1/g) || [];
let number2 = number.match(/2/g) || [];
let number3 = number.match(/3/g) || [];
let number4 = number.match(/4/g) || [];
let number5 = number.match(/5/g) || [];
let number6 = number.match(/6/g) || [];
let number7 = number.match(/7/g) || [];
let number8 = number.match(/8/g) || [];
let number9 = number.match(/9/g) || [];

console.log(`0, ${number0.length}`);
console.log(`1, ${number1.length}`);
console.log(`2, ${number2.length}`);
console.log(`3, ${number3.length}`);
console.log(`4, ${number4.length}`);
console.log(`5, ${number5.length}`);
console.log(`6, ${number6.length}`);
console.log(`7, ${number7.length}`);
console.log(`8, ${number8.length}`);
console.log(`9, ${number9.length}`);