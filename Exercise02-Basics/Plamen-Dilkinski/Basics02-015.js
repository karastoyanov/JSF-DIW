let bukva = "P";

const CIPHER = 4;

let bukvaIndex = (bukva.charCodeAt(0) - 65 + CIPHER ) % 26;

let bukvaString = String.fromCharCode(bukvaIndex + 65);

console.log(bukvaString);