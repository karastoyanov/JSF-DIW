// Count the number of occurrences of each digit in the following text:
// “19002288034”
// Print in ascending order all numbers encountered in the string and the number of times 
// they occur in the text, separated with a colon character “:”

let n = "193817588";

let count0 = (n.match(/0/g) || []).length;
let count1 = (n.match(/1/g) || []).length;
let count2 = (n.match(/2/g) || []).length;
let count3 = (n.match(/3/g) || []).length;
let count4 = (n.match(/4/g) || []).length;
let count5 = (n.match(/5/g) || []).length;
let count6 = (n.match(/6/g) || []).length;
let count7 = (n.match(/7/g) || []).length;
let count8 = (n.match(/8/g) || []).length;
let count9 = (n.match(/9/g) || []).length;

console.log(`0: ${count0}`);
console.log(`1: ${count1}`);
console.log(`2: ${count2}`);
console.log(`3: ${count3}`);
console.log(`4: ${count4}`);
console.log(`5: ${count5}`);
console.log(`6: ${count6}`);
console.log(`7: ${count7}`);
console.log(`8: ${count8}`);
console.log(`9: ${count9}`);