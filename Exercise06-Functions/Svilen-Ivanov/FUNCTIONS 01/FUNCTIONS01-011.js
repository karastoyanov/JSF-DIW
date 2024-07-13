/*
FUNCTIONS01-011: Write a function that takes a string as an argument and returns the string
with the first letter of each word capitalized.
*/

function capitalizeWords(stringToManipulate) {
    let counter = 0;
    for (let i = 0; i < stringToManipulate.length; i++) {
        if (stringToManipulate[i - 1] == " ") {
            stringToManipulate = stringToManipulate.replace(` ${stringToManipulate[i]}`, ` ${stringToManipulate[i].toUpperCase()}`);
        }
    }
    console.log(`${stringToManipulate}`);
    return;
}
capitalizeWords("This is a bad test");