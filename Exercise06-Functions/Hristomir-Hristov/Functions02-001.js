/*
Write a function that takes a nested array (an array containing arrays of numbers) and returns a new nested array 
with only the even numbers. Try to solve the problem with nested functions.
*/


function twoDimArr(twoDim) {
    function evenNums(twoDim) {
        let evens = [];
        let rows = 3;
        let columns = 3;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (twoDim[i][j] % 2 == 0) {
                    evens = evens.concat(twoDim[i][j]);
                }
            }
        }
        return evens;
    }
    return evenNums(twoDim);
}
console.log(twoDimArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));