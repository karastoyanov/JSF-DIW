/*
DTYPES01-016: Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one 
column, right justified. Pad all the digits with zeros so that the column is right-justified, 
and the width is exactly the width of the longest number written in the list. The length of 
a number is measured by the number of digits involved in its writing.
*/

let one = '1';
let ten = '10';
let thirtyEight = '38';
let four = '4';
let eithTwoFour= '824';
let hudredTwenty = '120';
let nineNineNine = '999';
let sixtyFour = '64';

let getLongestLenght= 0;

/*Compare the getLongestLenght with the lenght of each individual number. 
Every time a higher digit number is encountered it's lenght is stored in getLongestLenght.
This is annoying without loops.
*/
getLongestLenght <= one.length ? getLongestLenght = one.length : getLongestLenght;
getLongestLenght <= ten.length ? getLongestLenght = ten.length : getLongestLenght;
getLongestLenght <= thirtyEight.length ? getLongestLenght = thirtyEight.length : getLongestLenght;
getLongestLenght <= four.length ? getLongestLenght = four.length : getLongestLenght;
getLongestLenght <= eithTwoFour.length ? getLongestLenght = eithTwoFour.length : getLongestLenght;
getLongestLenght <= hudredTwenty.length ? getLongestLenght = hudredTwenty.length : getLongestLenght;
getLongestLenght <= nineNineNine.length ? getLongestLenght = nineNineNine.length : getLongestLenght;
getLongestLenght <= sixtyFour.length ? getLongestLenght = sixtyFour.length : getLongestLenght;

console.log(one.padStart(getLongestLenght, 0));
console.log(ten.padStart(getLongestLenght, 0));
console.log(thirtyEight.padStart(getLongestLenght, 0));
console.log(four.padStart(getLongestLenght, 0));
console.log(eithTwoFour.padStart(getLongestLenght, 0));
console.log(hudredTwenty.padStart(getLongestLenght, 0));
console.log(nineNineNine.padStart(getLongestLenght, 0));
console.log(sixtyFour.padStart(getLongestLenght, 0));