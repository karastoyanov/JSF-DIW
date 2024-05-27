/*
BASICS02-015: Declare a variable. Assign it with a letter from the English alphabet. Define a 
constant, named Cipher and assign it a value in the range of [3;13]. Print on the console 
the Cipher-th letter after the assigned letter to the variable. Imagine that the English 
alphabet is linked in a circle (cycle) – after Z letter follows A letter, then B etc. Example: 
if you have Cipher=4, and the given letter is 'Y', then print on the console 'C' (the fourth
after 'Y').
*/

//let char = Y;
//const chiper = 9;

let char = 'A';
const Cipher = 5;

let charValue = char.charCodeAt();
//console.log(charValue);

if (charValue + Cipher > 90) {
    let remainingValue = (charValue + Cipher) - 90;
    let newCharValue = 64 + remainingValue;
    console.log(String.fromCharCode(newCharValue))
}else{
    let newCharValue = charValue + Cipher;
    console.log(String.fromCharCode(newCharValue))
}