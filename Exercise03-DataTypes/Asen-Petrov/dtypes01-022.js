let wordToCheck = "jump";
let pangram = "The quick brown fox jumps over the lazy dog";

if(pangram.includes("jump")){
    let jumpPosition = pangram.indexOf(wordToCheck);
    console.log(`found at position: ${jumpPosition}.`)
}else{
    console.log(`does not exists.`)
}

//I know we have not used if so far, not able to use ? 