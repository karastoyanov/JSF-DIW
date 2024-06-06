/*
DTYPES01-024: 
Count the number of occurrences of each digit in the following text:
“193817588”
Print in ascending order all numbers from 0 to 9 and the number of times they occur in
the text, separated with a comma.
*/

let text = '193817588';
let number0 = text.match(/0/g);
let number1 = text.match(/1/g);
let number2 = text.match(/2/g);
let number3 = text.match(/3/g);
let number4 = text.match(/4/g);
let number5 = text.match(/5/g);
let number6 = text.match(/6/g);
let number7 = text.match(/7/g);
let number8 = text.match(/8/g);
let number9 = text.match(/9/g);

number0 ? console.log(`0, ${number0.length}`) : console.log('0, 0');
number1 ? console.log(`1, ${number1.length}`) : console.log('1, 0');
number2 ? console.log(`2, ${number2.length}`) : console.log('2, 0');
number3 ? console.log(`3, ${number3.length}`) : console.log('3, 0');
number4 ? console.log(`4, ${number4.length}`) : console.log('4, 0');
number5 ? console.log(`5, ${number5.length}`) : console.log('5, 0');
number6 ? console.log(`6, ${number6.length}`) : console.log('6, 0');
number7 ? console.log(`7, ${number7.length}`) : console.log('7, 0');
number8 ? console.log(`8, ${number8.length}`) : console.log('8, 0');
number9 ? console.log(`9, ${number9.length}`) : console.log('9, 0');