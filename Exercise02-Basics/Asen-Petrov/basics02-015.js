let char = 'A';
const Cipher = 4;

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