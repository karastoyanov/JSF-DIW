// LOOPS01-007: Write a program to count the number of vowels (гласни) in a given string using 
// for loop and if-else.

let text = 'Hello How Are You';

const totalVowels = input => {
    let vowels = 0;
    input = input.toLocaleLowerCase();
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
            vowels++;
        }
    }
    return vowels;
}

console.log(totalVowels(text));