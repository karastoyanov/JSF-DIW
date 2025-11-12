/*
DTYPES01-023: Count the number of occurrences of each digit in the following text:
“193817588”
Print in ascending order all numbers from 0 to 9 and the number of times they occur in 
the text, separated with a comma.
*/

let text = "193817588";

let count0 = text.split("0").length - 1;
let count1 = text.split("1").length - 1;
let count2 = text.split("2").length - 1;
let count3 = text.split("3").length - 1;
let count4 = text.split("4").length - 1;
let count5 = text.split("5").length - 1;
let count6 = text.split("6").length - 1;
let count7 = text.split("7").length - 1;
let count8 = text.split("8").length - 1;
let count9 = text.split("9").length - 1;

console.log("0, " + count0);
console.log("1, " + count1);
console.log("2, " + count2);
console.log("3, " + count3);
console.log("4, " + count4);
console.log("5, " + count5);
console.log("6, " + count6);
console.log("7, " + count7);
console.log("8, " + count8);
console.log("9, " + count9);