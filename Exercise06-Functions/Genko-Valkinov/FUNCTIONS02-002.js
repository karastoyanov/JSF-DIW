// FUNCTIONS02-002: Write a function that takes a nested array (an array containing arrays of 
// strings) and returns a single concatenated string of all the strings in the nested arrays. Try 
// to solve the problem with nested functions

const matrix = [
    ['JavaScript', 'is'],
    ['fun', 'to'],
    ['learn', 'every', 'day']
];

const concatNested = arr => {
    const concatInner = subArr => subArr.join(' ');

    return arr.map(concatInner).join(' ');
};

console.log(concatNested(matrix));