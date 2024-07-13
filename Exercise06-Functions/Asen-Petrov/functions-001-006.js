//Write a function that takes a string as an argument and returns the number of words in the string.

function wordsCount(sentence){
    let wordsArr = sentence.split(" ");
    //let wordsCount = wordsArr.length;

    return wordsArr.length;
}

console.log(wordsCount("asd asd asd asd"));