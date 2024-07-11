/*
ARRAY01-010: Find the minimum elements from each column in two-dimensional array.
*/

let twoDimArr = [[14, 95, 68], [-9, 0, 84], [-16, -19, -158], [0, 0, 0]];

for (let i = 0; i < twoDimArr.length; i++) {
    let smallestNum = Number.MAX_SAFE_INTEGER;


    for (let j = 0; j <= twoDimArr[i].length; j++) {

        if (smallestNum >= twoDimArr[i][j]) {
            smallestNum = twoDimArr[i][j];
        }
    }
    console.log(`The minimum element from this column in the array is ${smallestNum}.`);
}