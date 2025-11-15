// FUNCTIONS02-003*: Write a function that takes a nested array (an array containing arrays of 
// numbers) and returns the smallest and the largest number from all the nested arrays. Try 
// to solve the problem with nested functions.

const matrix = [
    [3, 2, 1, 4, 5, 6],
    [10, 21, 30, 898, 50, 61],
    [100, 217, 300, 439, 500, 677]
];

const smallestAndLargest = arr => {
    const findSmallestInSub = subArr => subArr.reduce((acc, cur) => (cur < acc ? cur : acc));
    const findLargestInSub = subArr => subArr.reduce((acc, cur) => (cur > acc ? cur : acc));

    const smallest = arr.map(findSmallestInSub).reduce((acc, cur) => (cur < acc ? cur : acc));
    const largest = arr.map(findLargestInSub).reduce((acc, cur) => (cur > acc ? cur : acc));

    return `Smallest number: ${smallest}\nLargest number: ${largest}`;
};


console.log(smallestAndLargest(matrix));