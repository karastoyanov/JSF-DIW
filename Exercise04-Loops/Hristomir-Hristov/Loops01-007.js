/*
Write a program to count the number of vowels in a given string using for loop and if-else.
*/

let varStr = 'Hristomir Hristov';
let vowelsTotal = 0;

for (let i = 0; i < varStr.length; i++) {
    let vowl = varStr[i].toLowerCase();
    if (vowl == 'a' || vowl == 'e' || vowl == 'i' || vowl == 'o' || vowl == 'u' || vowl == 'y') {
        vowelsTotal++;
    }
}
console.log(`Total vowels are ${vowelsTotal}`);