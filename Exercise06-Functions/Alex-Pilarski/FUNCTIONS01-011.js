/* Write a function that takes a string as an argument and returns the string
with the first letter of each word capitalized. */

function capitalizeString(input) {
    let wordsArray = input.split(" ");

    for (let index = 0; index < wordsArray.length; index++) {
        wordsArray[index] = wordsArray[index].charAt(0).toUpperCase() + wordsArray[index].slice(1);
    }

    return wordsArray.join(" ");
}

console.log(capitalizeString("This is a test string to fulfill thee requirement of the task."));
