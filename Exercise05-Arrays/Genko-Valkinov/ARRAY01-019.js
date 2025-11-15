// ARRAY01-019: Count the even numbers in a two-dimensional array. Calculate the 
// percentage of this amount from the total amount of numbers in the array.

const matrix = [
    [1, 3, 5, 7],
    [6, 77, 12, 24],
    [155, 12, 123, 223],
    [30, 32, 36, 40]
];


const evenNumbersPercentageMatrix = input => {
    const flat = input.flat();
    const evenCount = flat.reduce((acc, cur) => cur % 2 === 0 ? acc + 1 : acc, 0);
    const percentage = (evenCount / flat.length) * 100;

    return `Even: ${evenCount}\nTotal: ${flat.length}\nPercentage: ${percentage.toFixed(2)} %`;
};


console.log(evenNumbersPercentageMatrix(matrix));