// LOOPS01-009: Write a program to reverse a string.

const text = 'lets reverse this string';

const reverseString = input => {
    let currArr = [];
    for (let i = input.length - 1; i >= 0; i--) {
        currArr.push(input[i]);
    }
    return currArr.join('');
}

console.log(reverseString(text));