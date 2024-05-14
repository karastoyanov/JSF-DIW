let char = 'A';
const Chiper = 4;

let charValue = char.charCodeAt();
//console.log(charValue);

if (charValue + Chiper > 90) {
    let remainingValue = (charValue + Chiper) - 90;
    let newCharValue = 64 + remainingValue;
    console.log(String.fromCharCode(newCharValue))
}else{
    let newCharValue = charValue + Chiper;
    console.log(String.fromCharCode(newCharValue))
}