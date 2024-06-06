/* Count the number of occurrences of each digit in the following text:
“193817588”
Print in ascending order all numbers from 0 to 9 and the number of times they occur in
the text, separated with a comma. */

let digitOccur = "193817588";

let count = (digitOccur.match(/0/g) || []).length;
let count1 = (digitOccur.match(/1/g) || []).length;
let count2 = (digitOccur.match(/2/g) || []).length;
let count3 = (digitOccur.match(/3/g) || []).length;
let count4 = (digitOccur.match(/4/g) || []).length;
let count5 = (digitOccur.match(/5/g) || []).length;
let count6 = (digitOccur.match(/6/g) || []).length;
let count7 = (digitOccur.match(/7/g) || []).length;
let count8 = (digitOccur.match(/8/g) || []).length;
let count9 = (digitOccur.match(/9/g) || []).length;

console.log(`0, ${count}`);
console.log(`1, ${count1}`);
console.log(`2, ${count2}`);
console.log(`3, ${count3}`);
console.log(`4, ${count4}`);
console.log(`5, ${count5}`);
console.log(`6, ${count6}`);
console.log(`7, ${count7}`);
console.log(`8, ${count8}`);
console.log(`9, ${count9}`);

