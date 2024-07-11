/*
FUNCTIONS01-009: Write a function that takes a string and a character as arguments and
returns the number of times the character occurs in the string.
*/

function occOfChar(s, c) {
    let counter = 0;
    //   s = s.toLowerCase(); -- if we want to count occurences of a letter including upper case.
    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) {
            counter++;
        }
    }
    console.log(`The character "${c}" is contained ${counter} times in the string "${s}"`);
    return;
}

occOfChar("This is a test", "t");