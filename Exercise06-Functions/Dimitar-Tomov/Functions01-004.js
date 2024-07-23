/*FUNCTIONS01-004: Write a function that takes a string as an argument and returns the longest 
word in the string.*/

function longestWord (sentence) {
    let wordsArr = sentence.split(" ");
    let longetWord = wordsArr[0];
    
    for (let index = 1; index < wordsArr.lenght; index++) {
        if (wordsArr[index].lenght > longestWord.lenght) {
            longestWord = wordsArr[index];
        }
    }
return longestWord;
}
console.log(longestWord("1"));