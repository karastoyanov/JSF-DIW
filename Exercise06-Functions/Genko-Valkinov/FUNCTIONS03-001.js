// FUNCTIONS03-001: Write a recursive function that takes an array of numbers and returns the 
// sum of all the elements.

const recursiveSum = arr => {
    if (arr.length === 0){
        return 0;
    }
    return arr[0] + recursiveSum(arr.slice(1));
};

console.log(recursiveSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));