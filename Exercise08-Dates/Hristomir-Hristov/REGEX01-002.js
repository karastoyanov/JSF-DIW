/* Write a function to extract all numbers from a given string. Use regular
expression to retrieve the numbers (hint: use global modifier).
*/

function extractNum(str) {
    const pattern = /\d+/g;
    let result = str.match(pattern);
    if (result) {
        return console.log(result);
    } else {
        return console.log(`${str} does not contain numbers.`);
    }
}
(extractNum("text555.te22xt"));