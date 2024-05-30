let letter = `A`
let code = letter.charCodeAt(0)
let reverseLetter = 0

if (code >= 65 && code <= 90){
    reverseLetter = String.fromCharCode(code + 32)
}
else if (code >= 97 && code <= 122){
    reverseLetter = String.fromCharCode(code - 32)
}
else {
    console.log(`opa, please enter a letter`)
}

console.log(reverseLetter)