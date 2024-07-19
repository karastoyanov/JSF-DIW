/*FUNCTIONS01-006:  Write  a  function  that  takes  a  string  as  an  argument  and  returns  the 
number of words in the string.*/

function nameString(string) {
    let wordSplit = string.split(" ");
    let count = 0;
    for (let i = 0; i < wordSplit.length; i++) {
       count += 1;
    }
    return count;
}
console.log(nameString("Hello World"));