// LOOPS01-011: Write a program to check if a given string is a palindrome (reads the same 
// string in both directions – from the beginning to the end and vice versa – the same 
// string).

const isPalindrome = input => {
    for (let i = 0; i < Math.floor(input.length / 2); i++) {
        if(input[i] !== input[input.length - i - 1]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('hello'));      // false
console.log(isPalindrome('racecar'));    // true
