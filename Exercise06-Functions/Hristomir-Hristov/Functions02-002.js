/*
Write a function that takes a nested array (an array containing arrays of strings) 
and returns a single concatenated string of all the strings in the nested arrays. 
Try to solve the problem with nested functions.
*/

function concatStr(string) {
    function splitArr(array) {

        strSplit = array.join(',');
        return strSplit;
    }
    return splitArr(string);
}
console.log(concatStr([['one', 'two', 'three'], ['four', 'five', 'six'], ['seven', 'eight', 'nine']]).replace(/,/g, ''));