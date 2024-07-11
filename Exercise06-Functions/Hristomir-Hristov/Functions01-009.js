/*
Write a function that takes a string and a character as arguments 
and returns the number of times the character occurs in the string. 
*/

function charMatch(string, x) {
    if (typeof string != 'string' || typeof x != 'string' || x.length != 1) {
        console.log('First argument must be a string and second must be a single character!');

    } else {

        let times = 0;

        for (let i = 0; i < string.length; i++) {
            if (string[i] === x) {
                times++;
            }
        }
        return times;
    }
}
console.log(charMatch('This is a test string', 's'));